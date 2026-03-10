import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import icon from "./Hamburger_icon.svg.png";
import "./Nav.css";

const MOBILE_BREAKPOINT = 800;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const NavLink = ({ href, label, onClick }) => (
  <li role="none">
    <a href={href} role="menuitem" onClick={onClick}>
      {label}
    </a>
  </li>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const Nav = () => {
  const [isActive, setIsActive] = useState(getWidth() > MOBILE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(getWidth() <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const width = getWidth();
      const mobile = width <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    if (isMobile) {
      setIsActive(false);
    }
  }, [isMobile]);

  return (
    <nav className="nav-bar" role="navigation" aria-label="Main navigation">
      <button
        type="button"
        className="toggle-button"
        onClick={toggleNav}
        aria-expanded={isActive}
        aria-label="Toggle navigation menu"
      >
        <img src={icon} alt="" aria-hidden="true" />
      </button>

      {isActive && (
        <ul className="nav-bar-links" role="menubar">
          <NavLink href="#home" label="Home" onClick={handleLinkClick} />
          <NavLink href="#about" label="About" onClick={handleLinkClick} />
          <NavLink href="#work" label="Work" onClick={handleLinkClick} />
        </ul>
      )}
    </nav>
  );
};

export default Nav;
