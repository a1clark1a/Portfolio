import React from "react";
import "./Contact.css";
import linkedin from "./Images/linkedin.png";
import Gmail_Icon from "./Images/Gmail_Icon.png";
import github from "./Images/github.png";

export default function Contact() {
  return (
    <section className="cont_sect" id="contact">
      <h2 className="cont_h2">Need to reach me? </h2>
      <div className="link_wrapper">
        <img className="cont_icon img" src={linkedin} alt="LinkedIn link" />
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=a1clark1a@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="cont_icon img"
            src={Gmail_Icon}
            alt="Send mail link"
          />
        </a>
        <img className="cont_icon img" src={github} alt="Github repo link" />
      </div>
    </section>
  );
}
