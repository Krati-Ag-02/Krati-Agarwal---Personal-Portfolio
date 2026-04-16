import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaCode,
  FaCuttlefish,
  FaServer,
   FaUserCheck,
  FaHeart,
  FaClipboardList
} from "react-icons/fa";
export default function Skills() {

  const skills = [
  {
    title: "Languages",
    items: [
      { name: "C", icon: <FaCuttlefish /> },
      { name: "C++", icon: <FaCuttlefish /> }
    ]
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaCss3Alt /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaServer /> },
      { name: "EJS", icon: <FaCode /> },
      { name: "React", icon: <FaReact /> },
      { name: "REST APIs", icon: <FaServer /> }
    ]
  },
  {
    title: "Cloud & Database",
    items: [
      { name: "Firebase", icon: <FaDatabase /> },
      { name: "DBMS", icon: <FaDatabase /> }
    ]
  },
  {
    title: "Core Fundamentals",
    items: [
      { name: "OOPS", icon: <FaCode /> },
      { name: "DSA", icon: <FaCode /> }
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "WordPress", icon: <FaTools /> }
    ]
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Adaptability", icon: <FaUserCheck /> },
    { name: "Patience", icon: <FaHeart /> },
    { name: "Organized", icon: <FaClipboardList /> }
    ]
  }
];
  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        SKILLS
      </motion.h2>

      <div className="grid">
        {skills.map((s,i)=>(
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{s.title}</h3>
            <div>
              {s.items.map((it)=>(
  <span key={it.name} className="tag">
    {it.icon && it.icon} {it.name}
  </span>
))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}