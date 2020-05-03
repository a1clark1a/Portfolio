import React, { useState } from "react";
import Particles from "react-particles-js";
import Params from "./particlesjs-config.json";
import "./Main.css";

export default function Main() {
  return (
    <section className="home_sect">
      <div className="info_wrapper">
        <Particles params={Params} className="particles" />
        <h1 className="intro">
          Hey there! <span className="name">I'm Clark Perfecto</span>
        </h1>
        <h2 className="title">
          I'm a Full-Stack Developer and Game Programmer
        </h2>
        <a className={`container}`} href="#about">
          <button className="button">
            <span>Get to know me </span>
          </button>
        </a>
      </div>
    </section>
  );
}
