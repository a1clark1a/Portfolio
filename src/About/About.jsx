import "./About.css";
import Reveal from "../components/Reveal";
import useFadeIn from "../hooks/useFadeIn";

const STATEMENTS = [
  {
    num: "01",
    text: (
      <>
        Shipped a production order-fulfillment MVP to{" "}
        <b>50+ Molton Brown stores</b>, replacing legacy warehouse workflows.
      </>
    ),
    sub: "Serverless AWS Lambda API · offline IndexedDB sync · Firestore optimistic locking",
  },
  {
    num: "02",
    text: (
      <>
        Built a real-time dispatch dashboard for <b>100+ Kroger drivers</b>,
        powering live pickup &amp; delivery order updates.
      </>
    ),
    sub: "Live Firestore sync · dispatch notifications · order completion",
  },
  {
    num: "03",
    text: (
      <>
        Migrated <b>1M+ records</b> to Firestore at <b>100% accuracy</b> — zero
        data loss across live systems.
      </>
    ),
    sub: "Atomic batch writes · fail-and-split retries · checkpoint resumability",
  },
  {
    num: "04",
    text: (
      <>
        <b>100%</b> unit + integration test coverage, enforced in CI/CD.
      </>
    ),
    sub: "Jest · Playwright · zero-lint-warning policy",
  },
];

export default function About() {
  const headRef = useFadeIn({ threshold: 0.2 });

  return (
    <section className="about-sect section" id="about">
      <div className="wrap">
        <div ref={headRef} className="fade-in">
          <p className="eyebrow">01 — About</p>
          <h2 className="spine-h">About me</h2>
        </div>

        <p className="about-lead">
          I build cross-platform apps that hold up when the network doesn't —
          offline-first architecture, bidirectional sync engines, and migrations
          that move a million records without dropping one. I came up through{" "}
          <b>game programming</b> and now ship <b>enterprise software</b>,
          carrying the same obsession with things that just work.
        </p>

        <div className="manifesto">
          {STATEMENTS.map((statement, i) => (
            <Reveal key={statement.num} index={i} className="manifesto-item">
              <div className="manifesto-num">{statement.num}</div>
              <div className="manifesto-text">
                {statement.text}
                <small>{statement.sub}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
