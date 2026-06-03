import { useEffect, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import "./Nav.css";

const MOBILE_BREAKPOINT = 800;
const LOGO_TEXT = "ACP";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]";

const NAV_LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const NavLink = ({ href, label, onClick, active }) => (
  <li role="none" className={active ? "is-active" : ""}>
    <a
      href={href}
      role="menuitem"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  </li>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

const Nav = ({ theme = "dark", toggleTheme }) => {
  // 800 is the desktop side of the boundary (matches CSS min-width:800) so there is
  // no 800px dead zone where neither the hamburger nor the links would render.
  const [isActive, setIsActive] = useState(getWidth() >= MOBILE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(getWidth() < MOBILE_BREAKPOINT);
  const [activeSection, setActiveSection] = useState("home");
  const [logoText, setLogoText] = useState(LOGO_TEXT);
  const scrambleTimer = useRef(null);

  // --- scramble / decode the <ACP/> letters ---
  const runScramble = useCallback(() => {
    if (prefersReducedMotion()) return;
    clearInterval(scrambleTimer.current);
    const totalFrames = 16;
    let frame = 0;
    scrambleTimer.current = setInterval(() => {
      frame += 1;
      const revealed = Math.floor((frame / totalFrames) * LOGO_TEXT.length);
      const next = LOGO_TEXT.split("")
        .map((ch, i) =>
          i < revealed
            ? ch
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        )
        .join("");
      setLogoText(next);
      if (frame >= totalFrames) {
        clearInterval(scrambleTimer.current);
        setLogoText(LOGO_TEXT);
      }
    }, 45);
  }, []);

  useEffect(() => {
    runScramble();
    return () => clearInterval(scrambleTimer.current);
  }, [runScramble]);

  useEffect(() => {
    const handleResize = () => {
      const width = getWidth();
      const mobile = width < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      setIsActive(!mobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll-spy: highlight the link for whichever section owns the viewport mid-band.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    const els = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleNav = useCallback(() => setIsActive((prev) => !prev), []);

  const handleLinkClick = useCallback(() => {
    if (isMobile) setIsActive(false);
  }, [isMobile]);

  return (
    <nav className="nav-bar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a
          className="logo"
          href="#home"
          aria-label="ACP home"
          onMouseEnter={runScramble}
          onFocus={runScramble}
        >
          &lt;<span className="logo-lab">{logoText}</span>/&gt;
          <span className="logo-caret" aria-hidden="true"></span>
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={theme === "light"}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          title="Toggle light / dark"
        >
          <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
        </button>

        <button
          type="button"
          className={`toggle-button${isActive ? " is-open" : ""}`}
          onClick={toggleNav}
          aria-expanded={isActive}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {isActive && (
          <ul className="nav-bar-links" role="menubar">
            {NAV_LINKS.map(({ href, label, id }) => (
              <NavLink
                key={id}
                href={href}
                label={label}
                onClick={handleLinkClick}
                active={activeSection === id}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
  toggleTheme: PropTypes.func,
};

export default Nav;
