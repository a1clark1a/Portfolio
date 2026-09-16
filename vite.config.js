import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repos whose package.json `version` is baked into the bundle at build time.
// This is the floor the card shows when a visitor's live fetch never lands
// (offline, blocked, slow) — see src/hooks/useLiveVersion.js. Baking it on every
// build is what keeps that floor from rotting without anyone hand-editing it.
const TRACKED_REPOS = ["a1clark1a/diceTable"];
const SEMVER = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;
const BAKE_TIMEOUT_MS = 4000;

const bakeRepoVersions = async (repos) => {
  const entries = await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${repo}/main/package.json`,
          { signal: AbortSignal.timeout(BAKE_TIMEOUT_MS) }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { version } = await res.json();
        if (!SEMVER.test(version)) throw new Error(`bad version "${version}"`);
        return [repo, version];
      } catch (e) {
        // Never fail the build over this. The card still renders the literal in
        // ProjectList.jsx and refreshes itself in the browser.
        console.warn(`[version-bake] ${repo}: ${e.message} — using fallback`);
        return null;
      }
    })
  );
  return Object.fromEntries(entries.filter(Boolean));
};

export default defineConfig(async ({ command }) => ({
  plugins: [react()],
  define: {
    __REPO_VERSIONS__: JSON.stringify(
      command === "build" ? await bakeRepoVersions(TRACKED_REPOS) : {}
    ),
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
}));
