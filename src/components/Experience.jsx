import { motion } from "framer-motion";

const data = [
  {
    role: "Full Stack Intern",
    company: "Vrutsa Solutions",
    location: "Remote",
    duration: "May 2026 – Present",
    active: true,
    points: [
      "Building responsive, reusable React components used in a live production application.",
      "Shipping frontend features and resolving bugs in a real codebase with daily active users.",
      "Collaborating via Git — clean commits, pull requests, and code reviews with the team.",
    ],
  },
  {
    role: "Counselling Trainee",
    company: "LawSikho (Addictive Learning)",
    location: "Remote",
    duration: "Feb 2026 – Mar 2026",
    active: false,
    points: [
      "Guided prospective students through career programs and assessed individual profiles.",
      "Managed CRM follow-ups and mentorship scheduling in a target-driven environment.",
      "Built strong communication skills through high-volume client conversations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="blob blob-slate b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 56 }}>
        <span className="section-eyebrow">// where I've worked</span>
        <h2 className="section-title">My <em className="em-slate">experience</em></h2>
      </motion.div>

      <div className="exp-stack">
        <svg className="exp-path" viewBox="0 0 120 180">
          <path d="M10 10 C 60 40, 20 90, 90 170" stroke="var(--sage)" strokeWidth="2"
            fill="none" strokeDasharray="3 7" strokeLinecap="round" />
        </svg>

        {data.map((exp, i) => (
          <motion.div key={i} className="exp-card glass"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <div className="exp-top-row">
              <h3 className="exp-role">{exp.role}</h3>
              {exp.active && <span className="exp-current-tag">Currently active</span>}
            </div>
            <div className="exp-meta">
              <span>{exp.company}</span>
              <span>{exp.location}</span>
            </div>
            <span className="exp-duration">{exp.duration}</span>
            <ul className="exp-points">
              {exp.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}