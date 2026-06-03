import "./Education.css";
import Reveal from "../components/Reveal";
import useFadeIn from "../hooks/useFadeIn";

const EDUCATION = [
  {
    degree: "B.S. — Computer Science & Visual / Game Programming",
    school: "Art Institute of California (WASC Accredited)",
    meta: "📍 California · 🗓 2013 – 2017",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Thinkful — Engineering Flex Bootcamp",
    meta: "📍 Remote · 🗓 2019 – 2020",
  },
];

export default function Education() {
  const headRef = useFadeIn({ threshold: 0.2 });

  return (
    <section className="edu-sect section" id="education">
      <div className="wrap">
        <div ref={headRef} className="fade-in">
          <p className="eyebrow">04 — Education</p>
          <h2 className="spine-h">Education</h2>
        </div>

        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} index={i} className="card edu-card">
              <div className="cap" aria-hidden="true">
                🎓
              </div>
              <h3>{edu.degree}</h3>
              <div className="school">{edu.school}</div>
              <div className="meta">{edu.meta}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
