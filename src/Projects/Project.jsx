import PropTypes from "prop-types";
import Tooltip from "../components/Tooltip";
import useLiveVersion from "../hooks/useLiveVersion";
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
  openSource,
  versionRepo,
  versionFallback,
  renderedProject,
  date,
  title,
  subtitle,
  bullets = [],
  tools,
}) => {
  const hasMobile = Boolean(imgMobile);
  // Called for every card so the hook order never changes; cards without a
  // `versionRepo` get an empty version and make no request.
  const { version } = useLiveVersion({
    repo: versionRepo,
    fallback: versionFallback,
  });
  const repoLabel =
    renderedProject === "Web Project" ? "Client Repo" : "Github Repo";

  const renderExperienceCard = () => (
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

  // The screenshots are the primary way into the live app, so the media itself
  // is the link. Cards still in development have no `link` and stay a plain div.
  const MediaTag = link ? "a" : "div";
  const mediaLinkProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${name} — open the live app`,
      }
    : {};

  const renderProjectCard = () => (
    <article className="card proj-card">
      <MediaTag
        className={`proj-media${hasMobile ? "" : " single"}`}
        {...mediaLinkProps}
      >
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
      </MediaTag>

      <div className="proj-body">
        <div className="proj-title-row">
          <h3>{name}</h3>
          {openSource && (
            <span className="proj-badge">Open Source</span>
          )}
          {versionRepo && version && (
            <a
              className="proj-version"
              href={`https://github.com/${versionRepo}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} v${version} — release notes on GitHub`}
            >
              v{version}
            </a>
          )}
        </div>
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

        {/* No "Live" button — the media above is the link. This row is only the
            repos, plus the in-development note for cards with nothing to visit. */}
        {(!link || client || server) && (
        <div className="proj-links">
          {!link && <span className="proj-indev">In development →</span>}
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
        )}
      </div>
    </article>
  );

  return renderedProject === "Experience"
    ? renderExperienceCard()
    : renderProjectCard();
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
  openSource: PropTypes.bool,
  versionRepo: PropTypes.string,
  versionFallback: PropTypes.string,
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
