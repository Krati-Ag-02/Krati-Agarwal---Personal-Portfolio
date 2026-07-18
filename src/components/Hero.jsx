import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const roles = ["Full Stack Developer","React Developer","Node.js Developer","UI-Focused Builder"];

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

  return <span className="typing-text">{text}<span className="cursor-blink">|</span></span>;
}

export default function Hero() {
  const frameRef = useRef(null);

  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotate(-2.2deg) rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
  };
  const handleLeave = () => {
    const el = frameRef.current;
    if (el) el.style.transform = "rotate(-2.2deg)";
  };

  return (
    <section className="hero">
      <div className="hero-container">

        <motion.div className="hero-image-wrap"
          initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.9, delay:0.1 }}
          style={{ perspective: "700px" }}>
          <div className="hero-image-frame" ref={frameRef}
            onMouseMove={handleMove} onMouseLeave={handleLeave}>
            <img src="/my.jpeg" alt="Krati Agarwal" />
          </div>
          <motion.div className="hero-annotation"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
            style={{ top:"-46px", right:"-108px" }}>
            <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
              <path d="M4 6 C 30 10, 55 22, 70 46" stroke="var(--annotate)" strokeWidth="1.6"
                strokeLinecap="round" fill="none" strokeDasharray="3 4" />
              <path d="M62 42 L70 46 L67 37" stroke="var(--annotate)" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="hero-annotation-text" style={{ top:"-6px", left:"0" }}>
              hi, this is me!
            </span>
          </motion.div>
          <motion.div className="hero-chip chip-react"
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1 }}>
            ⚛ React
          </motion.div>
          <motion.div className="hero-chip chip-node"
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.3 }}>
            ⬡ Node.js
          </motion.div>
        </motion.div>

        <div className="hero-content">
          <motion.div className="hero-badge"
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <span className="hero-badge-dot" />
            Open to full-time opportunities ·
          </motion.div>

          <motion.h1 className="hero-name"
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.75, delay:0.15 }}>
            Krati<br /><em>Agarwal</em>
          </motion.h1>

          <motion.p className="hero-role"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}>
            <TypingText />
          </motion.p>

          <motion.p className="hero-desc"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}>
            I build scalable, responsive web apps — from clean frontends to full-stack
            products with real users. Currently shipping features at
            <strong> Vrutsa Solutions</strong>.
          </motion.p>

          <motion.div className="hero-buttons"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/Resume_Krati.pdf" className="btn" target="_blank" rel="noopener noreferrer">Resume ↗</a>
            <a href="#contact" className="btn">Contact</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}