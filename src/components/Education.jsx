import { Icon } from "@iconify/react";
import { education, achievements } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section id="education" className="section section--tinted">
      <div className="container">
        <SectionTitle eyebrow="Background" title="Education & Achievements" />
        <div className="edu">
          <article className="card edu__card reveal">
            <span className="icon-badge icon-badge--lg">
              <Icon icon="ph:graduation-cap-duotone" />
            </span>
            <div className="edu__body">
              <div className="edu__head">
                <div>
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                </div>
                <span className="badge">
                  {education.start} – {education.end}
                </span>
              </div>
              <p className="edu__gpa">
                GPA <strong>{education.gpa}</strong>
              </p>
              <h4>Campus activities</h4>
              <ul className="edu__list">
                {education.activities.map((act) => (
                  <li key={act.title}>
                    <span>{act.title}</span>
                    <small>{act.date}</small>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {achievements.map((item) => (
            <article className="card edu__card reveal" key={item.title}>
              <span className="icon-badge icon-badge--lg">
                <Icon icon="ph:trophy-duotone" />
              </span>
              <div className="edu__body">
                <div className="edu__head">
                  <div>
                    <h3>{item.project}</h3>
                    <p>{item.title}</p>
                  </div>
                  <span className="badge">{item.date}</span>
                </div>
                <p className="edu__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
