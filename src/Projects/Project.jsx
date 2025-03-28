import React from "react";

import "./Project.css";

const Project = ({
  name,
  imgPc,
  imgMobile,
  showMobile,
  link,
  description,
  position,
  stack = [],
  client,
  server,
  renderedProject,
  date,
  title,
}) => {
  const techStack = () => {
    return stack.map((tech, i) => {
      return (
        <div key={i} className="tech">
          <img src={tech} alt="logo" />
        </div>
      );
    });
  };

  const RenderProjects = () => {
    return (
      <div className={`proj-body body-${position}`}>
        <h2 className={`proj-name name-${position}`}>{name}</h2>
        <div className={`proj-wrapper wrapper-${position}`}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {showMobile ? (
              <div>
                {imgMobile ? (
                  <img className="img-mob " src={imgMobile} alt={name} />
                ) : (
                  <img className="img-pc mobile-img" src={imgPc} alt={name} />
                )}
              </div>
            ) : (
              <div className={`img-container ${position}`}>
                <img className="img-pc " src={imgPc} alt={name} />
                {imgMobile && (
                  <div>
                    <img className="img-mob" src={imgMobile} alt={name} />
                  </div>
                )}
              </div>
            )}
          </a>

          <div className="proj-summary">
            {client && (
              <div className="repo-tab">
                <a
                  href={client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  {renderedProject === "Web Project"
                    ? `Client Repo`
                    : `Github Repo`}
                </a>
                {server && (
                  <a
                    href={server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Server Repo
                  </a>
                )}
              </div>
            )}
            <div className="proj-stack-wrapper">{techStack()}</div>
            <p className="proj-desc">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const RenderExperienceCards = () => {
    return (
      <div className={`card card-${name}`}>
        <div className={`cardTitleContainer`}>
          <div className="jobTitle">{title}</div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="companyName">{name} </span>
          </a>
          <span className="workDate"> - {date}</span>
        </div>
        <div className="jobDescription">{description}</div>
      </div>
    );
  };

  return renderedProject === "Experience" ? (
    <RenderExperienceCards />
  ) : (
    <RenderProjects />
  );
};

export default Project;
