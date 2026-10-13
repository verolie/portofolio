import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { profile } from "../data/portfolio";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          {profile.nickname}
          <span>.</span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon icon={open ? "ph:x-bold" : "ph:list-bold"} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
