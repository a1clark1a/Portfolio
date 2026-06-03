import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { options } from "./particlesjs-config";
import headshot from "../About/headshot.jpg";
import useFadeIn from "../hooks/useFadeIn";
import "./Main.css";

// Particles adopt the accent color per theme — red on dark, blue on light —
// kept low-opacity (see particlesjs-config) so they sit behind the text, not over it.
const PARTICLE_COLORS = {
  dark: { dot: "#e23b3b", link: "#cc2b2b", tri: "#cc2b2b" },
  light: { dot: "#2563eb", link: "#2563eb", tri: "#2563eb" },
};

// loadSlim registers the slim preset onto the engine once for the whole app.
// Caching the promise keeps React 19 StrictMode's double-mount from registering twice.
let enginePromise;
function ensureEngine() {
  if (!enginePromise) enginePromise = loadSlim(tsParticles);
  return enginePromise;
}

export default function Main({ theme = "dark" }) {
  const heroRef = useFadeIn({ threshold: 0.1 });

  const themedOptions = useMemo(() => {
    const c = PARTICLE_COLORS[theme] || PARTICLE_COLORS.dark;
    return {
      ...options,
      particles: {
        ...options.particles,
        color: { ...options.particles.color, value: c.dot },
        links: {
          ...options.particles.links,
          color: c.link,
          triangles: { ...options.particles.links.triangles, color: c.tri },
        },
      },
    };
  }, [theme]);

  // Drive the engine directly rather than via <Particles>/<ParticlesProvider>:
  // the v4 React wrapper double-loads the same container id under StrictMode and
  // races its own cleanup, blanking the canvas on first paint. Checking `cancelled`
  // *before* load() guarantees only the surviving mount actually loads.
  useEffect(() => {
    let container;
    let cancelled = false;

    ensureEngine()
      .then(() => {
        if (cancelled) return undefined;
        return tsParticles.load({ id: "tsparticles", options: themedOptions });
      })
      .then((loaded) => {
        if (cancelled) {
          loaded?.destroy();
          return;
        }
        container = loaded;
      });

    return () => {
      cancelled = true;
      container?.destroy();
    };
  }, [themedOptions]);

  return (
    <section className="home-sect" id="home" aria-label="Introduction">
      <div id="tsparticles" className="particles" aria-hidden="true" />

      <div className="wrap hero-grid">
        <div ref={heroRef} className="hero-text fade-in">
          <p className="eyebrow">Software Engineer · Full Stack</p>
          <h1 className="intro">
            Hey there! <span className="name">I'm Clark Perfecto</span>
          </h1>
          <p className="subtitle">
            Full Stack Engineer · 5+ years <span className="sep">|</span> React ·
            React Native · TypeScript · Node.js
          </p>
          <p className="hero-blurb">
            I ship software real businesses run on, proven across retail and
            logistics. The domain changes; the engineering doesn't.
          </p>

          <div className="hero-cta">
            <a className="btn btn--primary" href="#about">
              Get to know me
            </a>
            <a className="btn btn--ghost" href="#work">
              View my work
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/acperfecto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="devicon-linkedin-plain" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/a1clark1a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="devicon-github-original" aria-hidden="true"></i>
            </a>
            <a href="mailto:a1clark1a@gmail.com" aria-label="Email">
              <span aria-hidden="true">✉</span>
            </a>
          </div>
        </div>

        <img
          className="hero-portrait"
          src={headshot}
          alt="Anthony Clark Perfecto headshot"
        />
      </div>
    </section>
  );
}

Main.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};
