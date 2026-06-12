import { motion } from "framer-motion";
import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";

export default function Interests() {
  const data = [
    {
      name: "Pencil Sketching",
      icon: <FaPencilAlt />,
      desc: "I sketch portraits and detailed illustrations as a way to slow down and focus.",
    },
    {
      name: "Oil Pastel Painting",
      icon: <FaPaintBrush />,
      desc: "Experimenting with color and texture through oil pastel artwork.",
    },
  ];

  return (
    <section id="interests" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Beyond code</p>
        <h2 className="section-title">Inter<span>ests</span></h2>
      </motion.div>

      <div className="grid">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="interest-item">
              {item.icon}
              {item.name}
            </div>
            <p style={{ fontSize: "15px", marginTop: "8px" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}