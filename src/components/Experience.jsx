import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const data = [
  {
    role: "Full Stack Intern",
    company: "Vrutsa Solutions",
    location: "Remote",
    duration: "May 2026 – Present",
    active: true,
    type: "Tech",
    points: [
      "Building responsive, reusable React components used in a live production application.",
      "Shipping frontend features and resolving bugs in a real codebase with daily active users.",
      "Collaborating via Git — clean commits, pull requests, and code reviews with the team.",
    ],
  },
  {
    role: "Counselling Trainee",
    company: "LawSikho (Addictive Learning)",
    location: "Remote",
    duration: "Feb 2026 – Mar 2026",
    active: false,
    type: "EdTech",
    points: [
      "Guided prospective students through career programs and assessed individual profiles.",
      "Managed CRM follow-ups and mentorship scheduling in a target-driven environment.",
      "Built strong communication skills through high-volume client conversations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// where I've worked</p>
        <h2 className="section-title">Experi<span>ence</span></h2>
      </motion.div>

      <div className="exp-list">
        {data.map((exp, i) => (
          <motion.div key={i} className="exp-card"
            initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ delay:i * 0.12 }}>
            <div className="exp-dot" />
            <div className="exp-body">
              <div className="exp-top">
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap", marginBottom:"6px" }}>
                    <h3 className="exp-role">{exp.role}</h3>
                    {exp.active && <span className="badge-live">● Live</span>}
                    <span className="badge-type">{exp.type}</span>
                  </div>
                  <p className="exp-company">
                    <FaBriefcase size={10} /> {exp.company}
                    &nbsp;&nbsp;
                    <FaMapMarkerAlt size={10} /> {exp.location}
                  </p>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <ul className="exp-points">
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}