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
    github: "https://careergenie-9ja9.onrender.com"
  },
  {
    title: "Finance Dashboard",
    desc: [
      "An interactive dashboard UI designed to visualize financial data effectively.",
      "Focused on clean layout, responsiveness, and user-friendly data presentation.",
      "Implemented dynamic UI components using JavaScript."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Finance-Dashboard/"
  },
  {
    title: "Color Memory Game",
    desc: [
      "A browser-based memory game that challenges users to remember color sequences.",
      "Improves logic-building and user interaction using JavaScript.",
      "Built with focus on smooth gameplay and responsive design."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Color-Memory-Challenge-Game/"
  },
  {
    title: "Institute of Digital Risk Website",
    desc: [
      "A responsive website developed for an institute to showcase its services and information.",
      "Focused on layout structuring and clean UI design.",
      "Ensured responsiveness across multiple screen sizes."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/Institute-of-Digital-Risk-Website/"
  },
  {
    title: "Spotify UI Clone",
    desc: [
      "A static clone of Spotify’s UI focusing on layout and design replication.",
      "Practiced modern CSS styling and component structuring.",
      "Built to improve frontend design and responsiveness skills."
    ],
    tech: ["HTML", "CSS"],
    live: "https://krati-ag-02.github.io/spotify-UI/"
  },
  {
    title: "Get Jokes",
    desc: [
      "A fun API-based project that fetches and displays random jokes.",
      "Integrated external API using JavaScript fetch.",
      "Focused on asynchronous programming and UI updates."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-jokes/"
  },
  {
    title: "Get Quotes",
    desc: [
      "A quotes generator that fetches motivational quotes using APIs.",
      "Implemented dynamic content rendering using JavaScript.",
      "Designed simple and clean UI for better readability."
    ],
    tech: ["HTML", "CSS", "JS"],
    live: "https://krati-ag-02.github.io/get-quotes/"
  },
  {
    title: "Portfolio Website",
    desc: [
      "A personal portfolio website showcasing projects, skills, and experience.",
      "Built using React with focus on reusable components and clean structure.",
      "Designed to highlight creativity, responsiveness, and UI consistency."
    ],
    tech: ["React", "CSS", "HTML","JavaScript"],
    live: "https://krati-ag-02.github.io/Krati-Agarwal---Personal-Portfolio/"
  }
];

export default function Projects() {
  return (
    <section className="section fade-up">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-2">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            {project.desc.map((line, i) => (
              <p key={i}>• {line}</p>
            ))}

            <div >
              {project.tech.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>

            <div >
              {project.live && <button className="btn">Live</button>}
              {project.github && (
                <button className="btn" >
                  GitHub
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}