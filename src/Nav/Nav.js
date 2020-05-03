import React, { Component } from "react";
import icon from "./Hamburger_icon.svg.png";
import "./Nav.css";

export default class Nav extends Component {
  state = {
    isActive: false,
    isMobile: false,
  };

  handleWindowSize = () => {
    this.setState({
      isActive: window.innerWidth > 800 ? true : false,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSize);
  }

  toggleNav() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
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
          onClick={() => this.toggleNav()}
        />

        {this.state.isActive && renderNavbarLinks}
      </nav>
    );
  }
}
