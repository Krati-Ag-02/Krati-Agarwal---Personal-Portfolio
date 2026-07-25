import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCode,
  FaNodeJs, FaDatabase, FaExchangeAlt,
  FaFigma, FaGitAlt, FaGithub, FaCloud,
  FaProjectDiagram, FaLayerGroup,
  FaSyncAlt, FaHourglassHalf, FaClipboardList,
  FaServer, FaPencilRuler, FaUserFriends,
} from "react-icons/fa";
import { SiExpress, SiFirebase, SiVercel, SiCplusplus } from "react-icons/si";

const iconMap = {
  "HTML5": FaHtml5, "CSS3": FaCss3Alt, "JavaScript": FaJs, "React": FaReact,
  "Bootstrap": FaBootstrap, "EJS": FaCode,
  "Node.js": FaNodeJs, "Express.js": SiExpress, "REST APIs": FaExchangeAlt,
  "Firebase": SiFirebase, "DBMS": FaDatabase,
  "Figma": FaFigma, "Git": FaGitAlt, "GitHub": FaGithub, "Vercel": SiVercel, "Render": FaCloud,
  "C": FaCode, "C++": SiCplusplus,
  "OOPs": FaLayerGroup, "DSA": FaProjectDiagram,
  "Adaptability": FaSyncAlt, "Patience": FaHourglassHalf, "Organised": FaClipboardList,
};

// hub icon per category — left null where no icon felt certain enough to be "correct"
// rather than guess; those hubs render as a plain colored circle instead.
const categories = [
  { title: "Frontend", color: "var(--sage)", hubIcon: FaCode, items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "EJS"] },
  { title: "Backend", color: "var(--clay)", hubIcon: FaServer, items: ["Node.js", "Express.js", "REST APIs", "Firebase", "DBMS"] },
  { title: "Design & tools", color: "var(--slate)", hubIcon: FaPencilRuler, items: ["Figma", "Git", "GitHub", "Vercel", "Render"] },
  { title: "Languages", color: "var(--ochre)", hubIcon: null, items: ["C", "C++", "JavaScript"] },
  { title: "Core CS", color: "var(--sage)", hubIcon: null, items: ["OOPs", "DSA"] },
  { title: "Soft skills", color: "var(--clay)", hubIcon: FaUserFriends, items: ["Adaptability", "Patience", "Organised"] },
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
        {categories.map((cat, i) => {
          const HubIcon = cat.hubIcon;
          const mid = Math.ceil(cat.items.length / 2);
          const leftItems = cat.items.slice(0, mid);
          const rightItems = cat.items.slice(mid);

          return (
            <motion.div key={cat.title} className="skill-node-card glass"
              style={{ "--cat-color": cat.color }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}>

              <div className="skill-node-title">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                {cat.title}
              </div>

              <div className="skill-node-body">
                <div className="skill-node-col left">
                  {leftItems.map((item) => {
                    const Icon = iconMap[item] || FaCode;
                    return (
                      <span key={item} className="skill-node-item">
                        <Icon size={12} />
                        {item}
                      </span>
                    );
                  })}
                </div>

                <div className="skill-node-hub-col">
                  <div className="skill-node-hub">
                    {HubIcon ? <HubIcon size={18} /> : null}
                  </div>
                </div>

                <div className="skill-node-col right">
                  {rightItems.map((item) => {
                    const Icon = iconMap[item] || FaCode;
                    return (
                      <span key={item} className="skill-node-item">
                        <Icon size={12} />
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}