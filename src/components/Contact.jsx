import { Icon } from "@iconify/react";
import { profile } from "../data/portfolio";

function Contact() {
  const channels = [
    { icon: "ph:envelope-simple-bold", label: "Email", href: `mailto:${profile.email}` },
    { icon: "ph:whatsapp-logo-bold", label: "WhatsApp", href: profile.whatsapp },
    { icon: "ph:linkedin-logo-bold", label: "LinkedIn", href: profile.linkedin },
    { icon: "ph:instagram-logo-bold", label: "Instagram", href: profile.instagram },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact reveal">
          <p className="eyebrow">Let's work together</p>
          <h2>Have a project or role in mind?</h2>
          <p>
            I'm open to fullstack and backend opportunities. Feel free to reach out,
            and I'll get back to you as soon as I can.
          </p>
          <a className="btn btn--light" href={`mailto:${profile.email}`}>
            <Icon icon="ph:envelope-simple-bold" /> {profile.email}
          </a>
          <ul className="contact__links">
            {channels.map((ch) => (
              <li key={ch.label}>
                <a href={ch.href} target="_blank" rel="noreferrer" aria-label={ch.label}>
                  <Icon icon={ch.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
      </footer>
    </section>
  );
}

export default Contact;
