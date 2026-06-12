import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const data = [
    {
      role: "Full Stack Intern",
      company: "Vrutsa Solutions",
      duration: "May 2026 – Present",
      active: true,
      points: [
        "Built responsive, reusable React components maintaining consistent UI across devices.",
        "Shipped frontend features and resolved bugs on a live web application.",
        "Collaborated via Git-based workflows with clean commit history and PR reviews.",
      ],
    },
    {
      role: "Counselling Trainee",
      company: "LawSikho (Addictive Learning)",
      duration: "Feb 2026 – Mar 2026",
      active: false,
      points: [
        "Guided prospective students on career programs and assessed individual profiles.",
        "Managed CRM follow-ups and mentorship scheduling in a target-driven environment.",
        "Strengthened communication and interpersonal skills through real client conversations.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Where I've worked</p>
        <h2 className="section-title">Experi<span>ence</span></h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {data.map((exp, i) => (
          <motion.div
            key={i}
            className="card exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="exp-header">
              <div>
                <h3>
                  <FaBriefcase />
                  {exp.role}
                </h3>
                <p className="card-meta" style={{ marginTop: "4px" }}>{exp.company}</p>
              </div>
              <span className={`exp-badge ${exp.active ? "active" : ""}`}>
                {exp.active ? "● Current" : exp.duration}
              </span>
            </div>

            {exp.active && (
              <p style={{ fontSize: "13px", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>
                {exp.duration}
              </p>
            )}

            <ul>
              {exp.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}