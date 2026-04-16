import { motion } from "framer-motion";
import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";
export default function Interests() {

  const data = [
  { name: "Pencil Sketching", icon: <FaPencilAlt /> },
  { name: "Oil Pastel Painting", icon: <FaPaintBrush /> }
];

  return (
    <section id="interests" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        INTERESTS
      </motion.h2>

      <div className="grid">
        {data.map((i,index)=>(
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="interest-item">
  {i.icon} {i.name}
</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}