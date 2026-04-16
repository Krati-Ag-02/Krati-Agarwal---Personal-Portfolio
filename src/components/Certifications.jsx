import { motion } from "framer-motion";
export default function Certifications() {

  const data = [
    {
      title: "Leadership and Team Effectiveness",
      org: "NPTEL",
      year: "Jan 2025 – Apr 2025"
    },
    {
      title: "Organizational Behaviour",
      org: "NPTEL",
      year: "July 2024 – October 2024"
    }
  ];

  return (
    <section id="certifications" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        CERTIFICATIONS
      </motion.h2>

      <div className="grid">
        {data.map((c,i)=>(
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{c.title}</h3>
            <p>{c.org}</p>
            <p>{c.year}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}