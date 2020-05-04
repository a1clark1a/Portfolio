import React, { useEffect, useState } from "react";
import icon from "./Hamburger_icon.svg.png";
import "./Nav.css";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const Nav = () => {
  const [width, setWidth] = useState(getWidth());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (getWidth() > 800) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    const handleWindowSize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [width]);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const renderNavbarLinks = (
    <ul className="nav_bar-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );

  return (
    <nav className="nav_bar">
      <img
        src={icon}
        alt="navbar icon"
        className="toggle-button"
        onClick={() => toggleNav()}
      />

      {isActive && renderNavbarLinks}
    </nav>
  );
};

export default Nav;
