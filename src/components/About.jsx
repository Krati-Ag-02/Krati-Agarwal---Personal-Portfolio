import { motion } from "framer-motion";

const traits = ["React", "Node.js", "Firebase", "Full Stack", "UI Focused"];

const infoCards = [
  { label: "Currently", value: "Full Stack Intern @ Vrutsa Solutions", accent: false },
  { label: "Graduating", value: "B.Tech CS · JECRC University · 2026", accent: false },
  { label: "Looking for", value: "Full-Stack / Frontend Role", accent: false },
  { label: "Status", value: "open", accent: true },
];

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// who I am</p>
        <h2 className="section-title">About <span>Me</span></h2>
      </motion.div>

      <div className="about-grid">
        <motion.div className="about-text"
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.1 }}>
          <p>
            I'm a <strong>Full Stack Developer</strong> and 2026 B.Tech Computer Science graduate
            from JECRC University, Jaipur — building responsive, scalable web apps with real
            users in mind.
          </p>
          <p>
            Currently at <strong>Vrutsa Solutions</strong> shipping React features on a live
            product. I also built <strong>CareerGenie</strong> — an AI-powered career platform
            with LLM API integration, deployed live on Render.
          </p>
          <p>
            I'm actively looking for a{" "}
            <strong style={{ color:"var(--accent)" }}> full-stack or frontend role</strong>
            {" "}— remote, Pune, Bangalore, Jaipur, or Gurgaon — where I can contribute from day one.
          </p>
          <div className="about-traits">
            {traits.map((t) => <span key={t} className="trait-tag">{t}</span>)}
          </div>
          <div className="about-cta">
            <a href="/Resume_Krati.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Download Resume ↗
            </a>
            <a href="#contact" className="btn">Let's Talk</a>
          </div>
        </motion.div>

        <motion.div className="about-right"
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.2 }}>
          {infoCards.map((c, i) => (
            <div key={i} className={`about-info-card${c.accent ? " accent-card" : ""}`}>
              <span className="aic-label">{c.label}</span>
              {c.accent ? (
                <span className="aic-value" style={{ color:"var(--green)", display:"flex", alignItems:"center", gap:"8px" }}>
                  <span className="avail-dot" /> Open to opportunities
                </span>
              ) : (
                <span className="aic-value">{c.value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}