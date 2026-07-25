import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "React Developer", "Node.js Developer"];

function TypingText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[idx];
    let t;
    if (!del && text.length < cur.length)
      t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 72);
    else if (!del && text.length === cur.length)
      t = setTimeout(() => setDel(true), 2000);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(cur.slice(0, text.length - 1)), 38);
    else { setDel(false); setIdx((i) => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return <span>{text}<span className="cursor-blink">|</span></span>;
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="blob blob-sage b1"></div>
      <div className="blob blob-clay b2"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-name">
            Krati<br />
            <em>
              Agarwal
              <svg className="squiggle" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M2 12 Q 20 2, 40 12 T 80 12 T 120 12 T 160 12 T 198 12"
                  fill="none" stroke="var(--clay)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </em>
          </h1>

          <p className="hero-role"><TypingText /></p>

          <p className="hero-desc">
            I build scalable, responsive web apps — from clean frontends to
            full-stack products with real users. Currently shipping features at{" "}
            <strong>Vrutsa Solutions</strong>.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">React / Node</span>
              <span className="hero-stat-label">Primary stack</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">2026</span>
              <span className="hero-stat-label">B.Tech CS graduate</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-solid">View my work</a>
            <a href="/Resume_Krati.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-accent"></div>
          <div className="hero-photo-frame">
            <img src="/my.jpeg" alt="Krati Agarwal" />
          </div>
          <div className="hero-photo-status glass">
            <span className="dot"></span> Open to opportunities
          </div>
        </div>
      </div>
    </section>
  );
}