import "./TechStack.css";
import { skillList } from "../data/skills";
import useFadeIn from "../hooks/useFadeIn";

const TechStack = () => {
  const ref = useFadeIn();

  return (
    <article ref={ref} className="skills-container fade-in">
      <h2 className="skill-header">
        <code>{"< "}</code>Technical Skills<code>{" >"}</code>
      </h2>
      <ul className="skills-list" aria-label="Technical skills">
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};

export default TechStack;
