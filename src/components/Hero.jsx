import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  return (
    <section className="hero">
      <div className="hero-container">

        <motion.div className="hero-image-wrap"
          initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.9, delay:0.1 }}>
          <div className="hero-image-frame">
            <img src="/my.jpeg" alt="Krati Agarwal" />
          </div>
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