import { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectList } from "./ProjectList";
import Reveal from "../components/Reveal";
import useFadeIn from "../hooks/useFadeIn";
import "./ProjectSect.css";

const COMPACT_BREAKPOINT = 600;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const PROJECT_TABS = [
  { key: "Experience", label: "Experience", compactLabel: "Exp" },
  { key: "Web Project", label: "Full Stack", compactLabel: "Full Stack" },
  { key: "Game Project", label: "Game Dev", compactLabel: "Game Dev" },
];

const ProjectSect = () => {
  const [renderedProject, setRenderedProject] = useState("Experience");
  const [windowWidth, setWindowWidth] = useState(getWidth());
  const headRef = useFadeIn({ threshold: 0.15 });

  useEffect(() => {
    const resizeListener = () => setWindowWidth(getWidth());
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const isCompact = windowWidth < COMPACT_BREAKPOINT;

  return (
    <section className="proj-sect section" id="work">
      <div className="wrap">
        <div ref={headRef} className="fade-in">
          <p className="eyebrow">03 — Work</p>
          <h2 className="spine-h">Experience &amp; Projects</h2>
        </div>

        <div className="proj-tab" role="tablist" aria-label="Project categories">
          {PROJECT_TABS.map(({ key, label, compactLabel }) => (
            <button
              key={key}
              className="tab"
              role="tab"
              aria-selected={renderedProject === key}
              aria-controls={`tabpanel-${key}`}
              onClick={() => setRenderedProject(key)}
            >
              {isCompact ? compactLabel : label}
            </button>
          ))}
        </div>

        {PROJECT_TABS.map(({ key }) => {
          const isActive = renderedProject === key;
          const isExperience = key === "Experience";
          return (
            <div
              key={key}
              id={`tabpanel-${key}`}
              className={`tab-panel ${isActive ? "tab-panel--active" : ""} ${
                isExperience ? "exp-list" : "proj-grid"
              }`}
              role="tabpanel"
              aria-hidden={!isActive}
            >
              {ProjectList[key].map((proj, i) => (
                <Reveal key={proj.name} index={i} className="proj-reveal">
                  <Project {...proj} renderedProject={key} />
                </Reveal>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSect;
