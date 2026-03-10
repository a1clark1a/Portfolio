import { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectList } from "./ProjectList";
import useFadeIn from "../hooks/useFadeIn";
import "./ProjectSect.css";

const MOBILE_BREAKPOINT = 1000;
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

  useEffect(() => {
    const resizeListener = () => {
      setWindowWidth(getWidth());
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const showMobile = windowWidth < MOBILE_BREAKPOINT;
  const isCompact = windowWidth < COMPACT_BREAKPOINT;
  const tabRef = useFadeIn();

  return (
    <section className="proj-sect" id="work">
      <div ref={tabRef} className="proj-tab fade-in" role="tablist" aria-label="Project categories">
        {PROJECT_TABS.map(({ key, label, compactLabel }) => (
          <button
            key={key}
            className="button"
            role="tab"
            aria-selected={renderedProject === key}
            aria-controls={`tabpanel-${key}`}
            onClick={() => setRenderedProject(key)}
          >
            <span>{isCompact ? compactLabel : label}</span>
          </button>
        ))}
      </div>

      {PROJECT_TABS.map(({ key }) => {
        const isActive = renderedProject === key;
        return (
          <article
            key={key}
            id={`tabpanel-${key}`}
            className={`tab-panel ${isActive ? "tab-panel--active" : ""} ${
              key === "Experience" ? "exp-art" : "proj-art"
            }`}
            role="tabpanel"
            aria-hidden={!isActive}
          >
            {ProjectList[key].map((proj, i) => (
              <Project
                key={proj.name}
                name={proj.name}
                imgPc={proj.imgPc}
                imgMobile={proj.imgMobile}
                showMobile={showMobile}
                link={proj.link}
                description={proj.description}
                position={i % 2 === 0 ? "left" : "right"}
                stack={proj.stack}
                client={proj.client}
                server={proj.server}
                renderedProject={key}
                date={proj.date}
                title={proj.title}
              />
            ))}
          </article>
        );
      })}
    </section>
  );
};

export default ProjectSect;
