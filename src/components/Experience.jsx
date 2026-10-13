import { experiences } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle eyebrow="Where I've worked" title="Work Experience" />
        <ol className="timeline">
          {experiences.map((job) => (
            <li className="timeline__item reveal" key={job.company}>
              <span className="timeline__dot" />
              <article className="card">
                <header className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className={`badge ${job.end === "Present" ? "badge--live" : ""}`}>
                    {job.start} – {job.end}
                  </span>
                </header>
                <ul className="timeline__points">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="chips chips--small">
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
