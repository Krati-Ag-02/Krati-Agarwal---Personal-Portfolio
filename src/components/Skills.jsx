import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase, FaCode,
  FaCuttlefish, FaServer, FaUserCheck, FaHeart,
  FaClipboardList, FaFigma, FaCloud
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiVercel, SiRender } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      eyebrow: "01",
      title: "Frontend",
      color: "var(--accent)",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaCss3Alt /> },
        { name: "EJS", icon: <FaCode /> },
      ],
    },
    {
      eyebrow: "02",
      title: "Backend",
      color: "var(--green)",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "DBMS", icon: <FaDatabase /> },
      ],
    },
    {
      eyebrow: "03",
      title: "Design & Tools",
      color: "var(--purple)",
      items: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
      ],
    },
    {
      eyebrow: "04",
      title: "Languages",
      color: "var(--pink)",
      items: [
        { name: "C", icon: <FaCuttlefish /> },
        { name: "C++", icon: <FaCuttlefish /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      eyebrow: "05",
      title: "Core CS",
      color: "var(--accent)",
      items: [
        { name: "OOPs", icon: <FaCode /> },
        { name: "DSA", icon: <FaCode /> },
      ],
    },
    {
      eyebrow: "06",
      title: "Soft Skills",
      color: "var(--green)",
      items: [
        { name: "Adaptability", icon: <FaUserCheck /> },
        { name: "Patience", icon: <FaHeart /> },
        { name: "Organized", icon: <FaClipboardList /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">What I work with</p>
        <h2 className="section-title">My <span>Skills</span></h2>
      </motion.div>

      <div className="grid">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
              <span style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: cat.color,
                opacity: 0.6
              }}>
                {cat.eyebrow}
              </span>
              <h3 style={{ fontFamily: "DM Serif Display, serif", fontSize: "20px" }}>{cat.title}</h3>
            </div>

            <div className="tags-wrap">
              {cat.items.map((item) => (
                <span className="tag" key={item.name}>
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}