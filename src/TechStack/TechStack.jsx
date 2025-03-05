import React from "react";
import "./TechStack.css";

const skillList = [
  "TypeScript",
  "JavaScript (ES6, JSX)",
  "jQuery",
  "C++",
  "HTML5",
  "CSS3",
  "SQL",
  "React.js",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Knex.js",
  "MaterialUI",
  "Cordova",
  "Stripe",
  "Sanity.io",
  "Pusher.js",
  "MailerLite",
  "Sass",
  "SFML",
  "Unreal Engine",
  "Firestore",
  "Cloudant",
  "PostgreSQL",
  "CouchDB",
  "PouchDB",
  "NoSQL",
  "AWS",
  "GCP",
  "IBM Cloudant",
  "Serverless",
  "GitHub",
  "Vercel",
  "Heroku",
  "Netlify",
  "NPM",
  "PNPM",
  "Yarn",
  "NX",
  "Postman",
  "CircleCI",
  "GitKraken",
  "GitHub Desktop",
  "ResponsivelyApp",
  "Visual Studio/Code",
  "Android Studio",
  "Jira",
  "Asana",
  "ClickUp",
  "Trello",
  "Mocha",
  "Chai",
  "Supertest",
  "Jest",
  "Enzyme",
];

const TechStack = () => {
  return (
    <article className="skills-container">
      <h2 className="skill-header">
        <code>{"< "}</code>Technical Skills<code>{" >"}</code>
      </h2>
      <ul className="skills-list">
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};

export default TechStack;
