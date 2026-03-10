import "./About.css";
import headshot from "./headshot.jpg";
import Contact from "../Contact/Contact";
import TechStack from "../TechStack/TechStack";
import useFadeIn from "../hooks/useFadeIn";

export default function About() {
  const picRef = useFadeIn();
  const bioRef = useFadeIn({ threshold: 0.2 });

  return (
    <section className="about-sect" id="about">
      <article className="pic-wrapper">
        <img
          ref={picRef}
          src={headshot}
          className="prof-pic fade-in"
          alt="Anthony Clark Perfecto headshot"
        />
        <div ref={bioRef} className="paragraph-container fade-in">
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
