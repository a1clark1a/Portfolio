import React, { useState, useEffect } from "react";

import Project from "./Project";
import { ProjectList } from "./ProjectList";

import "./ProjectSect.css";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const ProjectSect = () => {
  const [renderedProject, setRenderedProject] = useState("Experience");
  const [windowWidth, setWindowWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWindowWidth(getWidth());
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const displayProjects = () => {
    const showMobile = windowWidth < 1000 ? true : false;

    return ProjectList[renderedProject].map((proj, i) => {
      const position = i % 2 === 0 ? "left" : "right";

      return (
        <Project
          key={i}
          name={proj.name}
          imgPc={proj.imgPc}
          imgMobile={proj.imgMobile}
          showMobile={showMobile}
          link={proj.link}
          description={proj.description}
          position={position}
          stack={proj.stack}
          client={proj.client}
          server={proj.server}
          renderedProject={renderedProject}
          date={proj.date}
          title={proj.title}
        />
      );
    });
  };

  return (
    <section className="proj-sect" id="work">
      <div className="proj-tab">
        <button
          className="button"
          onClick={() => setRenderedProject("Experience")}
        >
          <span> {windowWidth < 600 ? "Exp" : "Experience"}</span>
        </button>
        <button
          className="button"
          onClick={() => setRenderedProject("Web Project")}
        >
          <span>Full Stack</span>
        </button>
        <button
          className="button"
          onClick={() => setRenderedProject("Game Project")}
        >
          <span>Game Dev</span>
        </button>
      </div>
      <article
        className={renderedProject === "Experience" ? "exp-art" : "proj-art"}
      >
        {displayProjects()}
      </article>
    </section>
  );
};

export default ProjectSect;
