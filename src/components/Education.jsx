import { motion } from "framer-motion";

const data = [
  { title: "B.Tech — Computer Science", place: "JECRC University, Jaipur", duration: "2022 – 2026", score: "7.95 CGPA", note: "final result!" },
  { title: "Senior Secondary (XII)", place: "SRGMSS School, Agra", duration: "2022", score: "79%" },
  { title: "Secondary (X)", place: "SRGMSS School, Agra", duration: "2020", score: "85%" },
];

export default function Education() {
  return (
    <section id="education">
      <div className="blob blob-sage b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 56 }}>
        <span className="section-eyebrow">// academic background</span>
        <h2 className="section-title">My <em className="em-sage">education</em></h2>
      </motion.div>

      <div className="edu-area">
        <svg className="edu-path" viewBox="0 0 110 460" preserveAspectRatio="none">
          <path d="M20 10 C 90 60, 10 130, 80 200 S 20 340, 60 450"
            stroke="var(--sage)" strokeWidth="2" fill="none" strokeDasharray="3 8" strokeLinecap="round" />
        </svg>

        <div className="edu-list">
          {data.map((e, i) => (
            <motion.div key={i} className="edu-card glass"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="edu-top">
                <div>
                  <div className="edu-title">{e.title}</div>
                  <div className="edu-place">{e.place}</div>
                  <span className="edu-year">{e.duration}</span>
                </div>
                <div className="edu-right">
                  <span className="edu-score">{e.score}</span>
                  {e.note && <span className="edu-note">{e.note}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}