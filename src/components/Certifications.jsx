import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const data = [
  { title: "Leadership and Team Effectiveness", org: "NPTEL", year: "Jan – Apr 2025" },
  { title: "Organizational Behaviour", org: "NPTEL", year: "Jul – Oct 2024" },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="blob blob-ochre b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 40 }}>
        <span className="section-eyebrow">// credentials</span>
        <h2 className="section-title">Certifi<em className="em-ochre">cations</em></h2>
      </motion.div>

      <div className="cert-wrap">
        {data.map((c, i) => (
          <motion.div key={i} className="cert-card glass"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <div className="cert-icon"><FaMedal size={18} /></div>
            <h3 className="cert-title">{c.title}</h3>
            <p className="cert-org">{c.org}</p>
            <span className="cert-year">{c.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}