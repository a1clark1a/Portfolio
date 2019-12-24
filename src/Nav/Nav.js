import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav_bar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
