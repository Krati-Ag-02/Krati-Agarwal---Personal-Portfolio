import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const data = [
    {
      title: "Leadership and Team Effectiveness",
      org: "NPTEL",
      year: "Jan 2025 – Apr 2025",
    },
    {
      title: "Organizational Behaviour",
      org: "NPTEL",
      year: "Jul 2024 – Oct 2024",
    },
  ];

  return (
    <section id="certifications" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Credentials</p>
        <h2 className="section-title">Certifi<span>cations</span></h2>
      </motion.div>

      <div className="grid">
        {data.map((c, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="edu-icon">
                <FaCertificate size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: "18px" }}>{c.title}</h3>
                <p className="card-meta" style={{ marginTop: "4px" }}>{c.org}</p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>{c.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}