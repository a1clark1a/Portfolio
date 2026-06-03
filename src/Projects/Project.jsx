import PropTypes from "prop-types";
import Tooltip from "../components/Tooltip";
import "./Project.css";

const Project = ({
  name,
  imgPc,
  imgMobile,
  link,
  description,
  stack = [],
  client,
  server,
  renderedProject,
  date,
  title,
  subtitle,
  bullets = [],
  tools,
}) => {
  const hasMobile = Boolean(imgMobile);
  const repoLabel =
    renderedProject === "Web Project" ? "Client Repo" : "Github Repo";

  const RenderExperienceCard = () => (
    <div className="card exp-card">
      <div className="exp-head">
        <span className="ico" aria-hidden="true">
          ▮
        </span>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3>{name}</h3>
          </a>
        ) : (
          <h3>{name}</h3>
        )}
      </div>
      {subtitle && <p className="exp-sub">{subtitle}</p>}
      <div className="exp-role">
        <span className="role">{title}</span>
        <span className="date">{date}</span>
      </div>
      {bullets.length > 0 && (
        <ul className="exp-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      {tools && (
        <p className="exp-tools">
          <b>Tools &amp; Tech:</b> {tools}
        </p>
      )}
    </div>
  );

  const RenderProjectCard = () => (
    <article className="card proj-card">
      <div className={`proj-media${hasMobile ? "" : " single"}`}>
        <img
          className="proj-desktop"
          src={imgPc}
          alt={`${name} desktop screenshot`}
        />
        {hasMobile && (
          <img
            className="proj-phone"
            src={imgMobile}
            alt={`${name} mobile screenshot`}
          />
        )}
      </div>

      <div className="proj-body">
        <h3>{name}</h3>
        <p className="proj-desc">{description}</p>

        {stack.length > 0 && (
          <div className="proj-tech">
            {stack.map((tech, i) => (
              <Tooltip key={i} label={tech.name}>
                {tech.type === "devicon" ? (
                  <i className={tech.class} aria-hidden="true"></i>
                ) : (
                  <img src={tech.src} alt={tech.name} />
                )}
              </Tooltip>
            ))}
          </div>
        )}

        <div className="proj-links">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live ↗
            </a>
          ) : (
            <span className="proj-indev">In development →</span>
          )}
          {client && (
            <a href={client} target="_blank" rel="noopener noreferrer">
              {repoLabel}
            </a>
          )}
          {server && (
            <a href={server} target="_blank" rel="noopener noreferrer">
              Server Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return renderedProject === "Experience" ? (
    <RenderExperienceCard />
  ) : (
    <RenderProjectCard />
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  imgPc: PropTypes.string,
  imgMobile: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["devicon", "img"]).isRequired,
      class: PropTypes.string,
      src: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
  client: PropTypes.string,
  server: PropTypes.string,
  renderedProject: PropTypes.string.isRequired,
  date: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bullets: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ),
  tools: PropTypes.string,
};

export default Project;
