import { motion } from "framer-motion";

const categories = [
  { title: "Frontend", color: "var(--sage)", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "EJS"] },
  { title: "Backend", color: "var(--clay)", items: ["Node.js", "Express.js", "REST APIs", "Firebase", "DBMS"] },
  { title: "Design & tools", color: "var(--slate)", items: ["Figma", "Git", "GitHub", "Vercel", "Render"] },
  { title: "Languages", color: "var(--ochre)", items: ["C", "C++", "JavaScript"] },
  { title: "Core CS", color: "var(--sage)", items: ["OOPs", "DSA"] },
  { title: "Soft skills", color: "var(--clay)", items: ["Adaptability", "Patience", "Organised"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="blob blob-ochre b1"></div>

      <motion.div className="section-header"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 56 }}>
        <span className="section-eyebrow">// what I work with</span>
        <h2 className="section-title">My <em className="em-ochre">skills</em></h2>
      </motion.div>

      <div className="skills-wrap">
        {categories.map((cat, i) => (
          <motion.div key={cat.title} className="skill-group glass"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <div className="skill-group-label">
              <span className="dot" style={{ background: cat.color }}></span>
              {cat.title}
            </div>
            <div className="skill-chips">
              {cat.items.map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}