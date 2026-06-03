import { useEffect, useState } from "react";

/**
 * Light/dark theme state, synced to the `data-theme` attribute on <html>.
 *
 * The initial value is read from the attribute already set by the no-flash
 * script in index.html (which itself reads localStorage / prefers-color-scheme),
 * so React state matches what painted — no flash, no mismatch. Toggling persists
 * the choice to localStorage.
 */
const readInitialTheme = () => {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  return "dark";
};

export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable (private mode, etc.) — non-fatal */
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
