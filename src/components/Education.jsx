import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const data = [
    {
      title: "B.Tech – Computer Science",
      place: "JECRC University, Jaipur",
      duration: "2022 – 2026",
      score: "77%",
    },
    {
      title: "Senior Secondary (XII)",
      place: "SRGMSS School, Agra",
      duration: "2022",
      score: "79%",
    },
    {
      title: "Secondary (X)",
      place: "SRGMSS School, Agra",
      duration: "2020",
      score: "85%",
    },
  ];

  return (
    <section id="education" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Academic background</p>
        <h2 className="section-title">Educa<span>tion</span></h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.map((e, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="edu-card">
              <div className="edu-icon">
                <FaGraduationCap size={20} />
              </div>
              <div className="edu-info">
                <h3 style={{ fontSize: "18px", marginBottom: "4px" }}>{e.title}</h3>
                <p className="card-meta">{e.place}</p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>{e.duration}</p>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right", flexShrink: 0 }}>
                <span className="edu-score">{e.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}