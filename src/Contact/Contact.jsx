import "./Contact.css";
import linkedin from "./Images/linkedin.png";
import Gmail_Icon from "./Images/Gmail_Icon.png";
import github from "./Images/github.png";
import useFadeIn from "../hooks/useFadeIn";
import Tooltip from "../components/Tooltip";

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="cont-sect fade-in" id="contact">
      <h2 className="cont-h2">Let's get in touch.</h2>
      <div className="link-wrapper">
        <a
          href="https://www.linkedin.com/in/acperfecto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <Tooltip label="LinkedIn: www.linkedin.com/in/acperfecto/">
            <img className="cont-icon" src={linkedin} alt="LinkedIn" />
          </Tooltip>
        </a>
        <a
          href="mailto:a1clark1a@gmail.com?subject=Let's get in touch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <Tooltip label="Email: a1clark1a@gmail.com">
            <img className="cont-icon" src={Gmail_Icon} alt="Email" />
          </Tooltip>
        </a>
        <a
          href="https://github.com/a1clark1a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <Tooltip label="GitHub: github.com/a1clark1a">
            <img className="cont-icon" src={github} alt="GitHub" />
          </Tooltip>
        </a>
      </div>
    </section>
  );
}
