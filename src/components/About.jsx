import { motion } from "framer-motion";

const traits = ["React", "Node.js", "Firebase", "Full Stack", "UI Focused"];

export default function About() {
  return (
    <section id="about">
      <div className="blob blob-sage b1"></div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 56 }}
      >
        <span className="section-eyebrow">// who I am</span>
        <h2 className="section-title">
          About <em className="em-sage">me</em>
        </h2>
      </motion.div>

      <div className="about-wrap">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a <strong>Full-Stack Developer</strong> and a 2026 B.Tech
            Computer Science graduate from <strong>JECRC University, Jaipur</strong>.
            I enjoy building modern web applications that combine thoughtful user
            experiences with reliable, scalable functionality.
          </p>

          <p>
            I'm currently working as a <strong>Full-Stack Intern at Vrutsa Solutions</strong>,
            where I contribute to a production application by building React
            features and working across both the frontend and backend. Outside of
            work, I enjoy creating personal projects that help me explore new
            technologies, strengthen my development skills, and turn ideas into
            complete, working applications.
          </p>

          <p>
            I'm currently looking for{" "}
            <strong style={{ color: "var(--clay)" }}>
              Full-Stack, Frontend, or Web Developer roles
            </strong>{" "}
            in <strong>Remote, Pune, Bangalore, Jaipur,</strong> or{" "}
            <strong>Gurgaon</strong>, where I can contribute, keep learning, and
            grow as a developer.
          </p>

          <div className="about-traits">
            {traits.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <p className="quote-line" style={{ marginTop: 36 }}>
            "Programs must be written for people to read, and only incidentally
            for machines to execute."
            <cite>— Harold Abelson</cite>
          </p>
        </motion.div>

        <motion.div
          className="about-facts"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="fact-card glass fc1">
            <div className="flabel">Current Role</div>
            <div className="fvalue">Full-Stack Intern @ Vrutsa Solutions</div>
          </div>

          <div className="fact-card glass fc2">
            <div className="flabel">Education</div>
            <div className="fvalue">B.Tech Computer Science · 2026</div>
          </div>

          <div className="fact-card glass fc3">
            <div className="flabel">Looking for</div>
            <div className="fvalue">
              Full-Stack · Frontend · Web Developer
            </div>
          </div>

          <div className="fact-card glass fc4">
            <div className="flabel">Status</div>
            <div className="fvalue status">
              <span className="avail-dot"></span>
              Open to Work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}