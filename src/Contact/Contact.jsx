import "./Contact.css";
import linkedin from "./Images/linkedin.png";
import Gmail_Icon from "./Images/Gmail_Icon.png";
import github from "./Images/github.png";
import useFadeIn from "../hooks/useFadeIn";
import Tooltip from "../components/Tooltip";

export default function Contact() {
  const headRef = useFadeIn({ threshold: 0.2 });

  return (
    <section className="cont-sect section" id="contact">
      <div className="wrap">
        <div ref={headRef} className="fade-in">
          <p className="eyebrow">05 — Contact</p>
          <h2 className="spine-h">Let's get in touch</h2>
        </div>

        <div className="term">
          <div className="term-head">
            <span className="term-dot dot-r"></span>
            <span className="term-dot dot-y"></span>
            <span className="term-dot dot-g"></span>
            <span className="term-title">acp@portfolio: ~/contact</span>
          </div>

          <div className="term-body">
            <div className="term-line">
              <span className="prompt">$</span>
              <span className="cmd">contact --list</span>
            </div>

            <a
              className="term-link"
              href="https://www.linkedin.com/in/acperfecto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <span className="arrow" aria-hidden="true">→</span>
              <Tooltip label="LinkedIn: www.linkedin.com/in/acperfecto/">
                <img className="term-icon" src={linkedin} alt="LinkedIn" />
              </Tooltip>
              <span className="term-key">LinkedIn</span>
              <span className="term-val">linkedin.com/in/acperfecto</span>
            </a>

            <a
              className="term-link"
              href="mailto:a1clark1a@gmail.com?subject=Let's get in touch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <span className="arrow" aria-hidden="true">→</span>
              <Tooltip label="Email: a1clark1a@gmail.com">
                <img className="term-icon" src={Gmail_Icon} alt="Email" />
              </Tooltip>
              <span className="term-key">Email</span>
              <span className="term-val">a1clark1a@gmail.com</span>
            </a>

            <a
              className="term-link"
              href="https://github.com/a1clark1a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <span className="arrow" aria-hidden="true">→</span>
              <Tooltip label="GitHub: github.com/a1clark1a">
                <img className="term-icon" src={github} alt="GitHub" />
              </Tooltip>
              <span className="term-key">GitHub</span>
              <span className="term-val">github.com/a1clark1a</span>
            </a>

            <div className="term-line term-spacer">
              <span className="prompt">$</span>
              <span className="cmd">./say-hello.sh</span>
            </div>

            <div className="term-actions">
              <a
                className="term-btn solid"
                href="mailto:a1clark1a@gmail.com?subject=Let's work together"
              >
                ✉ Send an email
              </a>
              <a
                className="term-btn ghost"
                href="https://www.linkedin.com/in/acperfecto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="term-line">
              <span className="prompt">$</span>
              <span className="caret" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
