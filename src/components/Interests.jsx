import { motion } from "framer-motion";
import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";

const data = [
  {
    icon: <FaPencilAlt size={22} />, name: "Pencil sketching",
    desc: "I sketch portraits and detailed illustrations — it trains my eye for visual detail, which directly shapes how I think about UI design.",
    color: "sage",
  },
  {
    icon: <FaPaintBrush size={22} />, name: "Oil pastel painting",
    desc: "Working with colour, light, and texture through oil pastels. It's where I experiment with aesthetics freely, away from a screen.",
    color: "clay",
  },
];

export default function Interests() {
  return (
    <section id="interests">
      <div className="blob blob-clay b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 56 }}>
        <span className="section-eyebrow">// beyond the screen</span>
        <h2 className="section-title">My <em className="em-clay">interests</em></h2>
      </motion.div>

      <div className="interests-wrap">
        {data.map((item, i) => (
          <motion.div key={i} className="interest-card glass"
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <div className={`interest-icon chip-fill-${item.color}`}>{item.icon}</div>
            <h3 className="interest-name">{item.name}</h3>
            <p className="interest-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}