import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

const data = [
  { title: "Leadership and Team Effectiveness", org: "NPTEL", year: "Jan – Apr 2025", href: "#" },
  { title: "Organizational Behaviour", org: "NPTEL", year: "Jul – Oct 2024", href: "#" },

];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="blob blob-ochre b1"></div>

      <div className="cert-gallery-top">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">// credentials</span>
          <h2 className="section-title">Certifi<em className="em-ochre">cations</em></h2>
        </motion.div>
      
      </div>

      <div className="cert-wrap">
        {data.map((c, i) => (
          <motion.div key={i} className="cert-card-gallery"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <span className="cert-org-tag">{c.org}</span>
            <h3 className="cert-title-gallery">{c.title}</h3>
            <span className="cert-year-gallery">{c.year}</span>
            {/* <a href={c.href} className="cert-view-link">View Certificate →</a> */}
            <div className="cert-ribbon"><FaCertificate size={16} /></div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}