import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CareerGenie",
    subtitle: "AI Career Platform",
    desc: [
      "AI-powered platform for interview prep, resume analysis, and career guidance.",
      "Integrated LLM APIs to generate interview questions and evaluate answers in real time.",
      "Built full-stack with React, Node.js, Express, Firebase. Deployed on Render.",
    ],
    tech: ["React", "Node.js", "Express", "Firebase", "LLM APIs"],
    live: "https://careergenie-frontend.onrender.com/",
    image: "/cg.png",
    featured: true,
  },
  {
    title: "Full-Stack Task Manager",
    subtitle: "Productivity App",
    desc: [
      "Task management app with add, delete, priority selection, due dates, and categories.",
      "Theme-based UI with multiple visual styles and smooth user interactions.",
      "REST API integrated with React frontend. Deployed live.",
    ],
    tech: ["React", "Node.js", "Express", "CSS"],
    live: "https://task-manager-1-6zus.onrender.com/",
    image: "/tm.png",
    featured: true,
  },
  {
    title: "BizBucks Landing Page",
    subtitle: "React UI",
    desc: [
      "Responsive landing page with reusable components and clean modern UI.",
      "Structured layout for maintainability. Deployed on Vercel.",
    ],
    tech: ["React", "CSS", "JS"],
    live: "https://biz-bucks-landing-page.vercel.app/",
    image: "/bb.png",
  },
  {
    title: "Finance Dashboard",
    subtitle: "Data UI",
    desc: [
      "Interactive dashboard to visualize financial data with clean layout and responsiveness.",
      "Dynamic UI components using JavaScript.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Finance-Dashboard/",
    image: "/fd.png",
  },
  {
    title: "Institute of Digital Risk",
    subtitle: "Business Website",
    desc: [
      "Responsive website for an institute showcasing services and information.",
      "Focused on layout structuring and clean UI across screen sizes.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Institute-of-Digital-Risk-Website/",
    image: "/idr.png",
  },
  {
    title: "Spotify UI Clone",
    subtitle: "Frontend Practice",
    desc: [
      "Static clone of Spotify's UI layout for frontend design and responsiveness practice.",
    ],
    tech: ["HTML", "CSS"],
    live: "https://krati-ag-02.github.io/spotify-UI/",
    image: "/spotify.png",
  },
  {
    title: "Color Memory Game",
    subtitle: "Browser Game",
    desc: [
      "Memory game that challenges users to remember color sequences.",
      "Built with focus on smooth gameplay and responsive design.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Color-Memory-Challenge-Game/",
    image: "/colormem.png",
  },
  {
    title: "Get Jokes",
    subtitle: "API Project",
    desc: [
      "Fetches and displays random jokes using an external API with async JavaScript.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-jokes/",
    image: "/joke.png",
  },
  {
    title: "Get Quotes",
    subtitle: "API Project",
    desc: [
      "Motivational quotes generator using API fetch and dynamic content rendering.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-quotes/",
    image: "/quote.png",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">What I've built</p>
        <h2 className="section-title">My <span>Projects</span></h2>
      </motion.div>

      {/* FEATURED — 2 col wide */}
      <div className="grid-2" style={{ marginBottom: "20px" }}>
        {featured.map((project, index) => (
          <motion.div
            className="card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {project.image ? (
              <img src={project.image} className="project-img" alt={project.title} />
            ) : (
              <div className="project-placeholder"><FaCode size={28} /></div>
            )}

            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--accent)", marginBottom: "4px", letterSpacing: "1px" }}>
                FEATURED · {project.subtitle}
              </p>
              <h3><FaCode />{project.title}</h3>
            </div>

            <div className="project-desc">
              {project.desc.map((line, i) => (
                <p key={i}>▹ {line}</p>
              ))}
            </div>

            <div className="tags-wrap">
              {project.tech.map((t, i) => (
                <span className="tag" key={i}>{t}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* REST — 3 col grid */}
      <div className="grid">
        {rest.map((project, index) => (
          <motion.div
            className="card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
          >
            {project.image ? (
              <img src={project.image} className="project-img" alt={project.title} />
            ) : (
              <div className="project-placeholder"><FaCode size={22} /></div>
            )}

            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>
                {project.subtitle}
              </p>
              <h3 style={{ fontSize: "18px" }}><FaCode />{project.title}</h3>
            </div>

            <div className="project-desc">
              {project.desc.map((line, i) => (
                <p key={i}>▹ {line}</p>
              ))}
            </div>

            <div className="tags-wrap">
              {project.tech.map((t, i) => (
                <span className="tag" key={i}>{t}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
                  <FaExternalLinkAlt size={11} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}