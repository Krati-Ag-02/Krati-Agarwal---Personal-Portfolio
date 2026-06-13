import { motion } from "framer-motion";
import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";

const data = [
  {
    icon: <FaPencilAlt size={28} />, name: "Pencil Sketching",
    desc: "I sketch portraits and detailed illustrations — it trains my eye for visual detail, which directly shapes how I think about UI design.",
    color: "var(--accent)",
  },
  {
    icon: <FaPaintBrush size={28} />, name: "Oil Pastel Painting",
    desc: "Working with colour, light and texture through oil pastels. It's where I experiment with aesthetics freely, away from a screen.",
    color: "var(--pink)",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// beyond the screen</p>
        <h2 className="section-title">Inter<span>ests</span></h2>
      </motion.div>
      <div className="interests-grid">
        {data.map((item, i) => (
          <motion.div key={i} className="interest-card"
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i * 0.12 }}
            style={{ "--ic": item.color }}>
            <div className="interest-icon-wrap">{item.icon}</div>
            <h3 className="interest-name">{item.name}</h3>
            <p className="interest-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}