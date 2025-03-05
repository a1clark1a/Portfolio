import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./Main.css";
import { options } from "./particlesjs-config";

export default function Main() {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="home_sect">
      <div className="info_wrapper">
        {init && (
          <Particles className="particles" id="tsparticles" options={options} />
        )}
        {/*  <Particles params={Params} className="particles" /> */}
        <h1 className="intro">
          Hey there! <span className="name">I'm Clark Perfecto</span>
        </h1>
        <h2 className="title">I'm a Software Engineer | Full Stack</h2>
        <a className={`container}`} href="#about">
          <button className="button">
            <span>Get to know me </span>
          </button>
        </a>
      </div>
    </section>
  );
}
