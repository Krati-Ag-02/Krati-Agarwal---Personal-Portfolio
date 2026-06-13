import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const data = [
  { title:"Leadership and Team Effectiveness", org:"NPTEL", year:"Jan – Apr 2025" },
  { title:"Organizational Behaviour", org:"NPTEL", year:"Jul – Oct 2024" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// credentials</p>
        <h2 className="section-title">Certifi<span>cations</span></h2>
      </motion.div>
      <div className="cert-grid">
        {data.map((c, i) => (
          <motion.div key={i} className="cert-card"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i * 0.1 }}>
            <div className="cert-icon"><FaMedal size={20} /></div>
            <div className="cert-info">
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-org">{c.org}</p>
            </div>
            <span className="cert-year">{c.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}