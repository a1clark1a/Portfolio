import React from "react";
import "./About.css";
import headshot from "./headshot.jpg";
import Contact from "../Contact/Contact";

export default function About() {
  return (
    <section className="about_sect" id="about">
      <article className="pic_wrapper">
        <img
          src={headshot}
          className="prof_pic"
          alt="Anthony Clark Perfecto Headshot"
        />
        <Contact />
      </article>
      <article className="description">
        <p>
          My name is Anthony Clark Perfecto, (I go by Clark but either is fine)
          I am an aspiring full-stack web developer and game programmer with a
          passion for implementating new systems and functionalities,
          optimization of code base, debugging and problem-solving with
          accuracy, and learning new design patterns and programming paradigms
        </p>
      </article>
      <article className="skills-list">
        <h2>
          <code>{"< "}</code>Technical Skills<code>{" >"}</code>
        </h2>
        <div className="skills">
          <div className="frontend_list">
            <h3>
              <code>{"< "}</code>Front-End<code>{" >"}</code>
            </h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript(ES6, JSX)</li>
              <li>React.js(Router, Context)</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="backend_list">
            <h3>
              <code>{"< "}</code>Back-End<code>{" >"}</code>
            </h3>
            <ul>
              <li>Node.js</li>
              <li>Postgres</li>
              <li>Express</li>
              <li>JWT</li>
            </ul>
          </div>
          <div className="gamedev_list">
            <h3>
              <code>{"< "}</code>Game Development<code>{" >"}</code>
            </h3>
            <ul>
              <li>C++(14,17)</li>
              <li>Unreal Engine 4</li>
              <li>SFML</li>
            </ul>
          </div>
          <div className="tools_list">
            <h3>
              <code>{"< "}</code>Dev Tools<code>{" >"}</code>
            </h3>
            <ul>
              <li>Visual Studio/Code Ide</li>
              <li>NPM</li>
              <li>Postman</li>
              <li>REST API</li>
              <li>Chrome Dev Tools/Debugger</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
