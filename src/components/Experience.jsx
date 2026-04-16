import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
export default function Experience() {

  const data = [
    {
      role: "Counselling Trainee",
      company: "LawSikho (Addictive Learning)",
      duration: "Feb 2026 – Mar 2026",
      points: [
        "Interacted with students through calls and understood their requirements",
        "Improved communication and interpersonal skills through real conversations",
        "Handled follow-ups and maintained basic CRM updates"
      ]
    }
  ];

  return (
    <section id="experience" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        EXPERIENCE
      </motion.h2>

      <div className="grid">
        {data.map((exp,i)=>(
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>
  <FaBriefcase style={{ marginRight: "8px" }} />
  {exp.role}
</h3>
            <p>{exp.company} • {exp.duration}</p>

            <ul>
              {exp.points.map((p,j)=>(
                <li key={j}>{p}</li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>

    </section>
  );
}