import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "CareerGenie",
    subtitle: "AI Career Platform",
    desc: "AI-powered platform for interview prep, resume analysis, and career guidance. Integrated LLM APIs for real-time question generation and answer evaluation. Built full-stack with React, Node.js, Express, Firebase.",
    tech: ["React", "Node.js", "Express", "Firebase", "LLM APIs"],
    live: "https://careergenie-frontend.onrender.com/",
    image: "/cg.png",
    featured: true,
    color: "var(--accent)",
  },
  {
    title: "Full-Stack Task Manager",
    subtitle: "Productivity App",
    desc: "Complete task management app with priorities, due dates, categories, and theme switcher. REST API backend with React frontend, deployed live on Render.",
    tech: ["React", "Node.js", "Express", "CSS"],
    live: "https://task-manager-1-6zus.onrender.com/",
    image: "/tm.png",
    featured: true,
    color: "var(--green)",
  },
  {
    title: "BizBucks Landing Page",
    subtitle: "React UI",
    desc: "Responsive SaaS-style landing page with reusable components, clean layout and modern design. Deployed on Vercel.",
    tech: ["React", "CSS", "JS"],
    live: "https://biz-bucks-landing-page.vercel.app/",
    image: "/bb.png",
  },
  {
    title: "Finance Dashboard",
    subtitle: "Data Visualization",
    desc: "Interactive dashboard with dynamic UI components for visualizing financial data. Focused on responsiveness and clean layout.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Finance-Dashboard/",
    image: "/fd.png",
  },
  {
    title: "Institute of Digital Risk",
    subtitle: "Business Website",
    desc: "Multi-section responsive website for a professional institute with clean layout and structured UI across screen sizes.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Institute-of-Digital-Risk-Website/",
    image: "/idr.png",
  },
  {
    title: "Spotify UI Clone",
    subtitle: "Frontend Clone",
    desc: "Pixel-accurate Spotify UI clone to practice layout replication, CSS techniques and responsive design.",
    tech: ["HTML", "CSS"],
    live: "https://krati-ag-02.github.io/spotify-UI/",
    image: "/spotify.png",
  },
  {
    title: "Color Memory Game",
    subtitle: "Browser Game",
    desc: "Colour sequence memory game built with vanilla JS. Focused on smooth gameplay and responsive design.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Color-Memory-Challenge-Game/",
    image: "/colormem.png",
  },
  {
    title: "Get Jokes",
    subtitle: "API Integration",
    desc: "Random joke generator using asynchronous JavaScript fetch from an external API.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-jokes/",
    image: "/joke.png",
  },
  {
    title: "Get Quotes",
    subtitle: "API Integration",
    desc: "Motivational quotes fetcher with dynamic content rendering and minimal, clean UI.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-quotes/",
    image: "/quote.png",
  },
];

function FeaturedCard({ project, index }) {
  return (
    <motion.div className="project-featured-card"
      initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ delay:index * 0.1 }}
      style={{ "--card-accent": project.color }}>
      <div className="pf-image">
        {project.image
          ? <img src={project.image} alt={project.title} />
          : <div className="project-placeholder"><FaCode size={32} /></div>}
        <div className="pf-image-overlay" />
      </div>
      <div className="pf-content">
        <p className="pf-eyebrow">Featured · {project.subtitle}</p>
        <h3 className="pf-title">{project.title}</h3>
        <p className="pf-desc">{project.desc}</p>
        <div className="tags-wrap" style={{ marginTop:"auto", paddingTop:"12px" }}>
          {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary pf-btn">
            <FaExternalLinkAlt size={11} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function SmallCard({ project, index }) {
  return (
    <motion.div className="project-small-card"
      initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ delay:index * 0.07 }}>
      {project.image
        ? <img src={project.image} className="project-img" alt={project.title} />
        : <div className="project-placeholder"><FaCode size={20} /></div>}
      <p className="proj-subtitle">{project.subtitle}</p>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.desc}</p>
      <div className="tags-wrap">
        {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn proj-btn">
          <FaExternalLinkAlt size={11} /> Live
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="section-eyebrow">// what I've built</p>
        <h2 className="section-title">My <span>Projects</span></h2>
      </motion.div>
      <div className="featured-grid">
        {featured.map((p, i) => <FeaturedCard key={p.title} project={p} index={i} />)}
      </div>
      <div className="proj-divider"><span>More Projects</span></div>
      <div className="small-grid">
        {rest.map((p, i) => <SmallCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}