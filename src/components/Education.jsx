import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
export default function Education() {

  const data = [
    {
      title: "B.Tech in Computer Science",
      place: "JECRC University, Jaipur",
      duration: "2022 – 2026",
      score: "77%"
    },
    {
      title: "Senior Secondary Education",
      place: "SRGMSS School, Agra",
      duration: "2022",
      score: "79%"
    },
    {
      title: "Secondary Education",
      place: "SRGMSS School, Agra",
      duration: "2020",
      score: "85%"
    }
  ];

  return (
    <section id="education" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        EDUCATION
      </motion.h2>

      <div className="grid">
        {data.map((e,i)=>(
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>
  <FaGraduationCap style={{ marginRight: "8px" }} />
  {e.title}
</h3>
            <p>{e.place}</p>
            <p>{e.duration}</p>
            <p>{e.score}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}