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
          <div className="proj-stack-wrapper">{techStack()}</div>
          <p className="proj-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
