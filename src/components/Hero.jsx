import { Icon } from "@iconify/react";
import { profile } from "../data/portfolio";
import photo from "../assets/foto-pribadi.png";
import cv from "../assets/CV_Veronica_Developer.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text reveal">
          <p className="hero__eyebrow">
            <span className="dot" /> Open to new opportunities
          </p>
          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={cv} download="CV_Veronica.pdf">
              <Icon icon="ph:download-simple-bold" /> Download CV
            </a>
            <a className="btn btn--ghost" href="#contact">
              <Icon icon="ph:paper-plane-tilt-bold" /> Contact Me
            </a>
          </div>

          <ul className="hero__stats">
            {profile.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__photo reveal">
          <img src={photo} alt={`Photo of ${profile.name}`} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
