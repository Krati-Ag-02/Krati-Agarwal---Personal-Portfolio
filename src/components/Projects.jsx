import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
const projects = [
  {
    title: "CareerGenie (Full Stack)",
    desc: [
      "A full-stack career guidance platform focused on resume building and interview preparation.",
      "Developed backend using Node.js and Express with Firebase authentication integration.",
      "Designed modules for resume generation, user interaction, and career assistance workflows."
    ],
    tech: ["HTML", "CSS", "JS", "Node.js", "Express", "Firebase"],
    live: "https://github.com/Krati-Ag-02/CareerGenie/tree/main",
    github: "https://careergenie-9ja9.onrender.com",
    image: ""
  },
  {
    title: "Finance Dashboard",
    desc: [
      "An interactive dashboard UI designed to visualize financial data effectively.",
      "Focused on clean layout, responsiveness, and user-friendly data presentation.",
      "Implemented dynamic UI components using JavaScript."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Finance-Dashboard/",
    image: "/fd.png"
  },
  {
    title: "Color Memory Game",
    desc: [
      "A browser-based memory game that challenges users to remember color sequences.",
      "Improves logic-building and user interaction using JavaScript.",
      "Built with focus on smooth gameplay and responsive design.",
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Color-Memory-Challenge-Game/",
    image: "/colormem.png"
  },
  {
    title: "Institute of Digital Risk Website",
    desc: [
      "A responsive website developed for an institute to showcase its services and information.",
      "Focused on layout structuring and clean UI design.",
      "Ensured responsiveness across multiple screen sizes."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Institute-of-Digital-Risk-Website/",
    image: "/idr.png"
  },
  {
    title: "Spotify UI Clone",
    desc: [
      "A static clone of Spotify's UI focusing on layout and design replication.",
      "Practiced modern CSS styling and component structuring.",
      "Built to improve frontend design and responsiveness skills."
    ],
    tech: ["HTML", "CSS"],
    live: "https://krati-ag-02.github.io/spotify-UI/",
    image: "/spotify.png"
  },
  {
    title: "Get Jokes",
    desc: [
      "A fun API-based project that fetches and displays random jokes.",
      "Integrated external API using JavaScript fetch.",
      "Focused on asynchronous programming and UI updates."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-jokes/",
    image: "/joke.png"
  },
  {
    title: "Get Quotes",
    desc: [
      "A quotes generator that fetches motivational quotes using APIs.",
      "Implemented dynamic content rendering using JavaScript.",
      "Designed simple and clean UI for better readability."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-quotes/",
    image: "/quote.png"
  },
  {
    title: "Portfolio Website",
    desc: [
      "A personal portfolio website showcasing projects, skills, and experience.",
      "Built using React with focus on reusable components and clean structure.",
      "Designed to highlight creativity, responsiveness, and UI consistency."
    ],
    tech: ["React", "CSS", "HTML","JavaScript"],
    live: "https://krati-ag-02.github.io/Krati-Agarwal---Personal-Portfolio/",
    image: ""
  }
];

export default function Projects() {
  return (
    <section  id="projects" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            className="card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >

           {project.image ? (
  <img src={project.image} className="project-img" />
) : (
  <div className="project-placeholder">
    <FaCode size={28} />
  </div>
)}

            <h3>
              <FaCode style={{ marginRight: "8px" }} />
              {project.title}
            </h3>

            <div className="project-desc">
              {project.desc.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
                  Live
                </a>
              )}
              
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}