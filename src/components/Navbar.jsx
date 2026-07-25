import { useEffect, useRef, useState } from "react";

const links = ["about","experience","projects","skills","education","certifications","interests","contact"];

const accent = {
  about: "var(--sage)",
  experience: "var(--clay)",
  projects: "var(--slate)",
  skills: "var(--ochre)",
  education: "var(--sage)",
  certifications: "var(--ochre)",
  interests: "var(--clay)",
  contact: "var(--slate)",
};

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [dotX, setDotX] = useState(0);
  const tabRefs = useRef({});
  const trackRef = useRef(null);

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

  useEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[active];
      const track = trackRef.current;
      if (tab && track) {
        const tabRect = tab.getBoundingClientRect();
        const trackRect = track.getBoundingClientRect();
        setDotX(tabRect.left - trackRect.left + tabRect.width / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, scrolled]);

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">
          <span className="nav-brand-mark">KA</span>
          <span className="nav-brand-name">Krati Agarwal</span>
        </a>

        <div className="nav-track" ref={trackRef}>
          <span className="nav-track-line" />
          <span className="nav-dot" style={{ left: dotX, "--nav-accent": accent[active] }} />
          {links.map((l) => (
  <a
    key={l}
    href={`#${l}`}
    ref={(el) => (tabRefs.current[l] = el)}
    className={`nav-bookmark${active === l ? " active" : ""}`}
    style={
      active === l
        ? { "--nav-accent": accent[l] }
        : undefined
    }
  >
    {l.charAt(0).toUpperCase() + l.slice(1)}
  </a>
))}
        </div>
      </div>
    </nav>
  );
}