import { motion } from "framer-motion";
// react-icons is already a dependency in this project (your old Education.jsx
// imported FaGraduationCap from it) — just add FaBook and FaSchool here too.
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

const data = [
  {
    icon: FaGraduationCap,
    accent: "sage",
    title: "B.Tech — Computer Science",
    place: "JECRC University, Jaipur",
    duration: "2022 – 2026",
    score: "7.95 CGPA",
    note: "final result!",
    current: true,
  },
  {
    icon: FaBook,
    accent: "clay",
    title: "Senior Secondary (XII)",
    place: "SRGMSS School, Agra",
    duration: "2022",
    score: "79%",
  },
  {
    icon: FaSchool,
    accent: "slate",
    title: "Secondary (X)",
    place: "SRGMSS School, Agra",
    duration: "2020",
    score: "85%",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="blob blob-sage b1"></div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 56 }}
      >
        <span className="section-eyebrow">// academic background</span>
        <h2 className="section-title">
          My <em className="em-sage">education</em>
        </h2>
      </motion.div>

      <div className="edu-timeline">
        <div className="edu-track"></div>

        {data.map((e, i) => {
          const Icon = e.icon;
          return (
            <motion.div
              key={i}
              className="edu-row"
              style={{ "--edu-accent": `var(--${e.accent})` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="edu-node">
                <Icon size={12} />
              </div>
              <div className="edu-joiner"></div>

              <div className="edu-card">
                <div className="edu-holes"></div>
                <div className="edu-tab">{e.duration}</div>

                <div className="edu-content">
                  <div className="edu-top-row">
                    <h3 className="edu-title">{e.title}</h3>
                    {e.current && <span className="edu-current-tag">Ongoing</span>}
                  </div>
                  <div className="edu-place">{e.place}</div>

                  <div className="edu-bottom-row">
                    <span className="edu-score-badge">{e.score}</span>
                    {e.note && <span className="edu-handwritten-note">{e.note}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}