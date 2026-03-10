import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { options } from "./particlesjs-config";
import useFadeIn from "../hooks/useFadeIn";
import "./Main.css";

export default function Main() {
  const [init, setInit] = useState(false);
  const headingRef = useFadeIn({ threshold: 0.1 });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="home-sect" aria-label="Introduction">
      <div className="info-wrapper">
        {init && (
          <Particles className="particles" id="tsparticles" options={options} />
        )}
        <div ref={headingRef} className="fade-in">
          <h1 className="intro">
            Hey there! <span className="name">I'm Clark Perfecto</span>
          </h1>
          <h2 className="title">I'm a Software Engineer | Full Stack</h2>
          <a className="container" href="#about">
            <button className="button" type="button">
              <span>Get to know me</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
