import { Icon } from "@iconify/react";
import { skills } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <SectionTitle eyebrow="What I work with" title="Skills" />
        <div className="skills">
          {skills.map((group) => (
            <div className="card skills__group reveal" key={group.title}>
              <h3>
                <span className="icon-badge">
                  <Icon icon={group.icon} />
                </span>
                {group.title}
              </h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
