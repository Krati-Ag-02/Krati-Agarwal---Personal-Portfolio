import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const links = ["about","experience","projects","skills","education","certifications","interests","contact"];
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-38% 0px -58% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="nav-inner">
       
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className={active === l ? "active" : ""}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}