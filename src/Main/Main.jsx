import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { options } from "./particlesjs-config";
import headshot from "../About/headshot.jpg";
import useFadeIn from "../hooks/useFadeIn";
import "./Main.css";

// Particle palette flips with the theme so dots/links never go invisible.
const PARTICLE_COLORS = {
  dark: { dot: "#ff0000", link: "#ffffff", tri: "#ffffff" },
  light: { dot: "#2563eb", link: "#9db4cd", tri: "#cdd9e6" },
};

export default function Main({ theme = "dark" }) {
  const heroRef = useFadeIn({ threshold: 0.1 });

  // tsParticles v4: the engine registrar passed to ParticlesProvider must keep a
  // stable identity for the app's lifetime (the provider throws if it changes).
  const initParticles = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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

  return (
    <section className="home-sect" id="home" aria-label="Introduction">
      <ParticlesProvider init={initParticles}>
        <Particles
          key={theme}
          className="particles"
          id="tsparticles"
          options={themedOptions}
        />
      </ParticlesProvider>

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
