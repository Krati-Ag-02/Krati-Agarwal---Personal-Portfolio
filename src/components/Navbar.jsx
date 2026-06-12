import { useEffect, useState } from "react";

export default function Navbar() {
  const links = ["about", "experience", "projects", "skills", "education", "certifications", "interests", "contact"];
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className={active === l ? "active" : ""}
            >
              {l.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}