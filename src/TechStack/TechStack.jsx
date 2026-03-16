import "./TechStack.css";
import { skillCategories } from "../data/skills";
import useFadeIn from "../hooks/useFadeIn";

const TechStack = () => {
  const ref = useFadeIn();

  return (
    <article ref={ref} className="skills-container fade-in">
      <h2 className="skill-header">
        <code>{"< "}</code>Technical Skills<code>{" >"}</code>
      </h2>
      <div className="skills-grid" aria-label="Technical skills">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <ul className="skill-badges">
              {skills.map((skill) => (
                <li key={skill} className="badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};

export default TechStack;
