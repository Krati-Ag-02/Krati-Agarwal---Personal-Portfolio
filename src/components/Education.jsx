import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const data = [
  { title:"B.Tech – Computer Science", place:"JECRC University, Jaipur", duration:"2022 – 2026", score:"80%" },
  { title:"Senior Secondary (XII)", place:"SRGMSS School, Agra", duration:"2022", score:"79%" },
  { title:"Secondary (X)", place:"SRGMSS School, Agra", duration:"2020", score:"85%" },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// academic background</p>
        <h2 className="section-title">Educa<span>tion</span></h2>
      </motion.div>
      <div className="edu-list">
        {data.map((e, i) => (
          <motion.div key={i} className="edu-row"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i * 0.1 }}>
            <div className="edu-icon-wrap"><FaGraduationCap size={18} /></div>
            <div className="edu-info">
              <h3 className="edu-title">{e.title}</h3>
              <p className="edu-place">{e.place}</p>
            </div>
            <div className="edu-right">
              <span className="edu-score">{e.score}</span>
              <span className="edu-year">{e.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}