import React from "react";
import Particles from "react-particles-js";
import Params from "./particlesjs-config.json";
import "./Main.css";

export default function Main() {
  return (
    <>
      <section className="home_sect">
        <div className="info_wrapper">
          <Particles params={Params} className="particles" />
          <h2 className="intro">
            Hey there! <span className="name">I'm Clark Perfecto</span>
          </h2>
          <h2 className="title">
            I'm a full-stack developer and game programmer
          </h2>
          <div className="container">
            <a href="#about" className="about_button border-animation">
              <span className="border-animation__inner">Get to know me </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
