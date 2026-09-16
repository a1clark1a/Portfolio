import { useEffect, useState } from "react";

/**
 * Live version number for a public GitHub repo.
 *
 * Reads `version` out of the repo's package.json on raw.githubusercontent.com.
 * That host is CORS-open and CDN-cached (max-age=300), and — unlike the GitHub
 * REST API — has no 60-requests-per-hour-per-IP limit, so a visitor behind a
 * busy shared IP (office NAT, VPN, campus) can never make the card look broken.
 *
 * The displayed value is never empty and never goes backwards. It starts from
 * the newest of three *synchronous* sources, so the right number is on screen at
 * first paint — the same trick useTheme uses to read the pre-paint `data-theme`
 * attribute. No spinner, no flash, and nothing mounts late, so no layout shift:
 *
 *   1. this tab's sessionStorage cache (a value already fetched from GitHub)
 *   2. `__REPO_VERSIONS__` — baked in at build time by the define in vite.config.js
 *   3. the `fallback` literal passed in by the caller (ProjectList)
 *
 * The network result replaces it only if it parses as semver AND is newer.
 * Offline, 404, timed out, or a garbage body: nothing happens and whatever was
 * already rendered stays on screen.
 *
 * @param {Object} options
 * @param {string} options.repo - "owner/name". Falsy returns an empty version and makes no request.
 * @param {string} options.fallback - Version to show when nothing else is known.
 * @param {string} options.branch - Branch to read package.json from. Default "main".
 * @param {number} options.maxAgeMs - Reuse this tab's cached value without refetching. Default 30min.
 * @returns {{ version: string, isLive: boolean }}
 */

const RAW_HOST = "https://raw.githubusercontent.com";
const CACHE_PREFIX = "liveVersion:";
const SEMVER = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;
const DEFAULT_MAX_AGE_MS = 30 * 60 * 1000;
const FETCH_TIMEOUT_MS = 4000;

// Substituted by `define` in vite.config.js as { "owner/name": "2.2.0" }, and as
// {} for dev and test builds. The typeof guard is only for a consumer importing
// this outside Vite entirely, where the identifier would genuinely be undefined.
const BUILD_VERSIONS =
  typeof __REPO_VERSIONS__ === "object" && __REPO_VERSIONS__
    ? __REPO_VERSIONS__
    : {};

// Module-level, so one page makes exactly one request per repo no matter how
// many cards ask — and so StrictMode's second mount reuses the first's promise.
const inFlight = new Map();

const cacheKey = (repo, branch) => `${CACHE_PREFIX}${repo}@${branch}`;

const core = (version) => {
  const [major, minor, patch] = String(version)
    .split("+")[0]
    .split("-")[0]
    .split(".");
  return [Number(major) || 0, Number(minor) || 0, Number(patch) || 0];
};

/** Higher of the two versions; keeps `a` on a tie or an unparseable value. */
const pickNewer = (a, b) => {
  if (!b) return a || "";
  if (!a) return b;
  const left = core(a);
  const right = core(b);
  for (let i = 0; i < 3; i += 1) {
    if (right[i] > left[i]) return b;
    if (right[i] < left[i]) return a;
  }
  return a;
};

const readCache = (repo, branch) => {
  try {
    const raw = sessionStorage.getItem(cacheKey(repo, branch));
    if (!raw) return null;
    const { v, at } = JSON.parse(raw);
    return SEMVER.test(v) ? { version: v, at: Number(at) || 0 } : null;
  } catch (e) {
    /* storage unavailable (private mode) or a corrupt entry — treat as a miss */
    return null;
  }
};

const writeCache = (repo, branch, version) => {
  try {
    sessionStorage.setItem(
      cacheKey(repo, branch),
      JSON.stringify({ v: version, at: Date.now() })
    );
  } catch (e) {
    /* storage unavailable or over quota — non-fatal, we just refetch next tab */
  }
};

const timeoutSignal = () =>
  typeof AbortSignal !== "undefined" && AbortSignal.timeout
    ? AbortSignal.timeout(FETCH_TIMEOUT_MS)
    : undefined;

const fetchVersion = (repo, branch) => {
  // Checked before touching `inFlight` so a missing fetch never leaves a
  // permanently-resolved null in the map and poisons later calls.
  if (typeof fetch !== "function") return Promise.resolve(null);

  const key = `${repo}@${branch}`;
  if (inFlight.has(key)) return inFlight.get(key);

  const request = (async () => {
    try {
      const res = await fetch(`${RAW_HOST}/${repo}/${branch}/package.json`, {
        signal: timeoutSignal(),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) return null;
      const data = await res.json();
      const version =
        data && typeof data.version === "string" ? data.version.trim() : "";
      // A captive portal or an error page can answer 200 with HTML — only a
      // real semver string is allowed anywhere near the card.
      if (!SEMVER.test(version)) return null;
      // Written here rather than in the effect so the value survives the pass
      // StrictMode throws away.
      writeCache(repo, branch, version);
      return version;
    } catch (e) {
      /* offline, DNS/CORS failure, timeout, or a non-JSON body — keep fallback */
      return null;
    } finally {
      inFlight.delete(key);
    }
  })();

  inFlight.set(key, request);
  return request;
};

const readInitialVersion = (repo, branch, fallback) => {
  if (!repo) return { version: "", isLive: false };
  const cached = readCache(repo, branch);
  // The baked value is revalidated here because vite.config.js writes whatever
  // package.json held; it is not trusted just for having survived the build.
  const built = SEMVER.test(BUILD_VERSIONS[repo] || "")
    ? BUILD_VERSIONS[repo]
    : "";
  const version = pickNewer(
    pickNewer(fallback || "", built),
    cached && cached.version
  );
  return { version, isLive: Boolean(cached && cached.version === version) };
};

export default function useLiveVersion({
  repo = "",
  fallback = "",
  branch = "main",
  maxAgeMs = DEFAULT_MAX_AGE_MS,
} = {}) {
  const [state, setState] = useState(() =>
    readInitialVersion(repo, branch, fallback)
  );

  useEffect(() => {
    if (!repo) return undefined;

    // Already refreshed in this tab recently — the initial read above used that
    // cached value, so there is nothing left to ask GitHub for.
    const cached = readCache(repo, branch);
    if (cached && Date.now() - cached.at < maxAgeMs) return undefined;

    let cancelled = false;
    fetchVersion(repo, branch).then((fetched) => {
      if (cancelled || !fetched) return;
      setState((prev) => ({
        version: pickNewer(prev.version, fetched),
        isLive: true,
      }));
    });

    // StrictMode mounts, unmounts and remounts in dev. This only stops the
    // discarded pass from calling setState — the request is shared via
    // `inFlight` and deliberately NOT aborted, because aborting here would
    // cancel the very request the second pass is waiting on.
    return () => {
      cancelled = true;
    };
  }, [repo, branch, maxAgeMs]);

  return state;
}
