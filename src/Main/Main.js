import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <section className="home_sect">
      <div className="info_wrapper">
        <h2 className="intro">
          Hey there! <span className="name">I'm Clark Perfecto</span>
        </h2>
        <h2 className="title">
          I'm a full-stack developer and game programmer
        </h2>
        <button className="about_button">
          <a href="#about">Get to know me -></a>
        </button>
      </div>
    </section>
  );
}
