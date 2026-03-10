import PropTypes from "prop-types";
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
  const techStack = () =>
    stack.map((tech, i) => (
      <div key={i} className="tech">
        <img src={tech} alt={`${name} tech stack`} />
      </div>
    ));

  const RenderProjects = () => (
    <div className={`proj-body body-${position}`}>
      <h2 className={`proj-name name-${position}`}>{name}</h2>
      <div className={`proj-wrapper wrapper-${position}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {showMobile ? (
            <div>
              {imgMobile ? (
                <img className="img-mob" src={imgMobile} alt={`${name} mobile screenshot`} />
              ) : (
                <img className="img-pc mobile-img" src={imgPc} alt={`${name} screenshot`} />
              )}
            </div>
          ) : (
            <div className={`img-container ${position}`}>
              <img className="img-pc" src={imgPc} alt={`${name} desktop screenshot`} />
              {imgMobile && (
                <div>
                  <img className="img-mob" src={imgMobile} alt={`${name} mobile screenshot`} />
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
                {renderedProject === "Web Project" ? "Client Repo" : "Github Repo"}
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

  const RenderExperienceCards = () => (
    <div className={`card card-${name}`}>
      <div className="cardTitleContainer">
        <div className="jobTitle">{title}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="companyName">{name}</span>
        </a>
        <span className="workDate"> - {date}</span>
      </div>
      <div className="jobDescription">{description}</div>
    </div>
  );

  return renderedProject === "Experience" ? (
    <RenderExperienceCards />
  ) : (
    <RenderProjects />
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  imgPc: PropTypes.string,
  imgMobile: PropTypes.string,
  showMobile: PropTypes.bool,
  link: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["left", "right"]),
  stack: PropTypes.arrayOf(PropTypes.string),
  client: PropTypes.string,
  server: PropTypes.string,
  renderedProject: PropTypes.string.isRequired,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default Project;
