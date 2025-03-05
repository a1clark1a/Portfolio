import React from "react";
import "./Contact.css";
import linkedin from "./Images/linkedin.png";
import Gmail_Icon from "./Images/Gmail_Icon.png";
import github from "./Images/github.png";

export default function Contact() {
  return (
    <section className="cont_sect" id="contact">
      <h2 className="cont_h2">Let's get in touch. </h2>
      <div className="link_wrapper">
        <a
          href="https://www.linkedin.com/in/acperfecto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cont_icon img" src={linkedin} alt="LinkedIn link" />
        </a>
        <a
          href="mailto:a1clark1a@gmail.com?subject=Let's get in touch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="cont_icon img"
            src={Gmail_Icon}
            alt="Send mail link"
          />
        </a>
        <a
          href="https://github.com/a1clark1a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cont_icon img" src={github} alt="Github repo link" />
        </a>
      </div>
    </section>
  );
}
