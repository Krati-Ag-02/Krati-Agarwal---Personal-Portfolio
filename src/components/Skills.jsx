import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode, FaCuttlefish, FaServer, FaUserCheck, FaHeart, FaClipboardList, FaFigma } from "react-icons/fa";
import { SiExpress, SiFirebase, SiVercel, SiRender } from "react-icons/si";

const categories = [
  { num:"01", title:"Frontend", accent:"var(--accent)", items:[
    { name:"HTML5", icon:<FaHtml5 /> }, { name:"CSS3", icon:<FaCss3Alt /> },
    { name:"JavaScript", icon:<FaJs /> }, { name:"React", icon:<FaReact /> },
    { name:"Bootstrap", icon:<FaCss3Alt /> }, { name:"EJS", icon:<FaCode /> },
  ]},
  { num:"02", title:"Backend", accent:"var(--green)", items:[
    { name:"Node.js", icon:<FaNodeJs /> }, { name:"Express.js", icon:<SiExpress /> },
    { name:"REST APIs", icon:<FaServer /> }, { name:"Firebase", icon:<SiFirebase /> },
    { name:"DBMS", icon:<FaDatabase /> },
  ]},
  { num:"03", title:"Design & Tools", accent:"var(--purple)", items:[
    { name:"Figma", icon:<FaFigma /> }, { name:"Git", icon:<FaGitAlt /> },
    { name:"GitHub", icon:<FaGithub /> }, { name:"Vercel", icon:<SiVercel /> },
    { name:"Render", icon:<SiRender /> },
  ]},
  { num:"04", title:"Languages", accent:"var(--pink)", items:[
    { name:"C", icon:<FaCuttlefish /> }, { name:"C++", icon:<FaCuttlefish /> },
    { name:"JavaScript", icon:<FaJs /> },
  ]},
  { num:"05", title:"Core CS", accent:"var(--accent)", items:[
    { name:"OOPs", icon:<FaCode /> }, { name:"DSA", icon:<FaCode /> },
  ]},
  { num:"06", title:"Soft Skills", accent:"var(--green)", items:[
    { name:"Adaptability", icon:<FaUserCheck /> },
    { name:"Patience", icon:<FaHeart /> },
    { name:"Organised", icon:<FaClipboardList /> },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// what I work with</p>
        <h2 className="section-title">My <span>Skills</span></h2>
      </motion.div>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div key={i} className="skill-card"
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i * 0.07 }}>
            <div className="skill-card-header">
              <span className="skill-num" style={{ color:cat.accent }}>{cat.num}</span>
              <h3 className="skill-title">{cat.title}</h3>
              <div className="skill-line" style={{ background:cat.accent }} />
            </div>
            <div className="tags-wrap">
              {cat.items.map((item) => (
                <span className="tag" key={item.name}>{item.icon} {item.name}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}