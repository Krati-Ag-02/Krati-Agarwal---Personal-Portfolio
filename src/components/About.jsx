import { motion } from "framer-motion";

const traits = ["React", "Node.js", "Firebase", "Full Stack", "UI Focused"];

export default function About() {
  return (
    <section id="about">
      <div className="blob blob-sage b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 56 }}>
        <span className="section-eyebrow">// who I am</span>
        <h2 className="section-title">About <em className="em-sage">me</em></h2>
      </motion.div>

      <div className="about-wrap">
        <motion.div className="about-text"
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p>
            I'm a <strong>full-stack developer</strong> — a 2026 B.Tech Computer
            Science graduate from JECRC University, Jaipur, who likes building
            things that actually work end to end, not just coursework.
          </p>
          <p>
            At <strong>Vrutsa Solutions</strong> I build and ship React features
            on a live production app used by real people. Outside of that, I use
            personal projects — <strong>CareerGenie</strong>, <strong>Planara</strong>,{" "}
            <strong>Funhouse</strong>, and a few others — to keep practicing
            full-stack development by actually shipping, not just following tutorials.
          </p>
          <p>
            I'm looking for a <strong style={{ color: "var(--clay)" }}>full-stack or frontend role</strong> —
            remote, Pune, Bangalore, Jaipur, or Gurgaon — where I can start contributing from day one.
          </p>

          <div className="about-traits">
            {traits.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>

          <div className="about-cta">
            <a href="/Resume_Krati.pdf" className="btn btn-solid" target="_blank" rel="noopener noreferrer">Download resume ↗</a>
            <a href="#contact" className="btn btn-outline">Let's talk</a>
          </div>

          <p className="quote-line" style={{ marginTop: 36 }}>
            "Programs must be written for people to read, and only incidentally for machines to execute."
            <cite>— Harold Abelson</cite>
          </p>
        </motion.div>

        <motion.div className="about-facts"
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div className="fact-card glass fc1">
            <div className="flabel">Role</div>
            <div className="fvalue">Full Stack Intern @ Vrutsa Solutions</div>
          </div>
          <div className="fact-card glass fc2">
            <div className="flabel">Education</div>
            <div className="fvalue">B.Tech CS · JECRC University · 2026</div>
          </div>
          <div className="fact-card glass fc3">
            <div className="flabel">Looking for</div>
            <div className="fvalue">Full-stack / frontend role</div>
          </div>
          <div className="fact-card glass fc4">
            <div className="flabel">Status</div>
            <div className="fvalue status"><span className="avail-dot"></span>Open to opportunities</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}