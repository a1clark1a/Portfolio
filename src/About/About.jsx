import React from "react";
import "./About.css";
import headshot from "./headshot.jpg";
import Contact from "../Contact/Contact";
import TechStack from "../TechStack/TechStack";

export default function About() {
  return (
    <section className="about_sect" id="about">
      <article className="pic_wrapper">
        <img
          src={headshot}
          className="prof_pic"
          alt="Anthony Clark Perfecto Headshot"
        />
        <div className="paragraphContainer">
          <p className="description">
            I'm a passionate Software Engineer with professional experience in
            full-stack development, specializing in building scalable
            applications, optimizing backend systems, and integrating cloud
            technologies. A quick learner and strong collaborator, I thrive in
            team environments, leveraging TypeScript/JavaScript, React, Node.js,
            AWS, and Firebase/Firestore to develop efficient, high-performance
            solutions.
          </p>

          <p className="description">
            Check out my projects below and at GitHub, and feel free to connect
            with me on LinkedIn!
          </p>
        </div>
      </article>
      <Contact />
      <TechStack />
    </section>
  );
}
