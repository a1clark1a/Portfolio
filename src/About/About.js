import React from "react";
import "./About.css";
import headshot from "./headshot.jpg";

export default function About() {
  return (
    <section className="about_sect" id="about">
      <figure>
        <img
          src={headshot}
          className="prof_pic"
          alt="Anthony Clark Perfecto Headshot"
        />
      </figure>
      <article className="description">
        <p>
          My name is Anthony Clark Perfecto, (I go by Clark but either is fine)
          I am an aspiring full-stack web developer and game programmer
          enthusiast with a bachelor’s in visual and game programming
        </p>
      </article>
      <article className="skills">
        <div className="frontend_list">
          <h2>Front-End</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript(ES6, JSX)</li>
            <li>React.js(Router, Context)</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="backend_list">
          <h2>Back-End</h2>
        </div>
        <div className="gamedev_list">
          <h2>Game Development</h2>
          <ul>
            <li>C++(14,17)</li>
            <li>Unreal Engine 4</li>
            <li>SFML</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
