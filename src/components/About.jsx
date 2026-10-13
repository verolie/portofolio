import { Icon } from "@iconify/react";
import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

function About() {
  const info = [
    { icon: "ph:map-pin-duotone", label: "Location", value: profile.location },
    { icon: "ph:envelope-simple-duotone", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "ph:phone-duotone", label: "Phone / WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: "ph:linkedin-logo-duotone", label: "LinkedIn", value: "in/veronica", href: profile.linkedin },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="Get to know me" title="About Me" />
        <div className="about">
          <div className="about__text card reveal">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about__info card reveal">
            {info.map((item) => (
              <li key={item.label}>
                <span className="icon-badge">
                  <Icon icon={item.icon} />
                </span>
                <div>
                  <small>{item.label}</small>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
