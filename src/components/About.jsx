import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "1", label: "Live Internship" },
    { number: "∞", label: "Drive to Grow" },
  ];

  return (
    <section id="about" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Who I am</p>
        <h2 className="section-title">About <span>Me</span></h2>
      </motion.div>

      <div className="about-grid">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p>
            I'm a Full Stack Developer and 2026 B.Tech Computer Science graduate from
            JECRC University, Jaipur. I build clean, responsive, and scalable web
            applications — from pixel-perfect frontends to full-stack products with
            real users.
          </p>
          <p>
            Currently, I'm interning at <strong style={{ color: "var(--text)" }}>Vrutsa Solutions</strong> as a
            Full Stack Intern, where I ship React features and collaborate on a live
            product via Git workflows. Before that, I built <strong style={{ color: "var(--text)" }}>CareerGenie</strong> — an
            AI-powered career platform using LLM APIs, deployed live on Vercel.
          </p>
          <p>
            I'm actively looking for a <strong style={{ color: "var(--accent)" }}>paid full-stack or frontend developer role</strong>  — where I can contribute from day one and grow fast.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            <a href="/Resume_Krati.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <a href="#contact" className="btn">Get in Touch</a>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}