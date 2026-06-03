import "./TechStack.css";
import { skillCategories } from "../data/skills";
import Reveal from "../components/Reveal";
import useFadeIn from "../hooks/useFadeIn";

const TechStack = () => {
  const headRef = useFadeIn({ threshold: 0.2 });

  return (
    <section className="skills-sect section" id="skills">
      <div className="wrap">
        <div ref={headRef} className="fade-in">
          <p className="eyebrow">02 — Skills</p>
          <h2 className="spine-h">
            <span className="bracket">{"< "}</span>Technical Skills
            <span className="bracket">{" >"}</span>
          </h2>
        </div>

        <div className="skills-grid" aria-label="Technical skills">
          {skillCategories.map(({ category, skills }, i) => (
            <Reveal key={category} index={i} className="card skill-card">
              <h3 className="category-title">{category}</h3>
              <ul className="skill-badges">
                {skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
