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
            Full Stack Engineer with 5+ years of experience developing
            cross-platform applications using Android, iOS, and Web platforms
            with React, React Native, Expo, and TypeScript. Experienced in cloud
            architecture using AWS serverless microservices and Firebase.
            Hands-on experience migrating databases and developing offline-first
            sync systems. Strong focus on code quality through extensive
            testing.
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
