import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaExchangeAlt, FaRobot, FaChartBar, FaCloud, FaCode, FaPaperclip,
} from "react-icons/fa";
import { SiExpress, SiFirebase } from "react-icons/si";

const techIconMap = {
  "React": FaReact, "Node.js": FaNodeJs, "Express": SiExpress, "Firebase": SiFirebase,
  "Firebase Auth": SiFirebase, "Firebase Storage": SiFirebase,
  "LLM APIs": FaRobot, "Grok API": FaRobot, "REST APIs": FaExchangeAlt,
  "Recharts": FaChartBar, "CSS": FaCss3Alt, "JavaScript": FaJs, "JS": FaJs,
  "HTML5": FaHtml5, "Git": FaGitAlt, "GitHub": FaGithub,
};

export const projects = [
 {
  title: "CareerGenie",
  subtitle: "AI Career Platform",
  origin: "Personal Project • College Major Project",

  desc: "An AI-powered career platform offering resume analysis, interview preparation, and personalized career guidance in one place.",

  about:
    "CareerGenie is designed as a one-stop platform to support users throughout their job preparation journey. It combines AI-powered resume analysis, role-specific interview preparation, and career guidance to help users understand their current skill level and identify the gaps needed to reach their target role. Resume analysis provides ATS scoring along with detailed improvement suggestions, while the interview module generates role-based questions and evaluates responses in real time using LLM APIs. The goal was to create a practical product that brings multiple career tools together into a single seamless experience.",

  story: {
    context:
      "I built CareerGenie as a personal project, which later became my college major project. The idea came from exploring different career tools and realizing that resume reviews, interview preparation, and career guidance were scattered across multiple platforms. I wanted to combine them into a single AI-powered experience.",

    built:
      "Developed a full-stack application using React, Node.js, Express, Firebase, and LLM APIs. Implemented AI-driven resume analysis, personalized career recommendations, role-based interview question generation, and real-time answer evaluation within an intuitive user interface."
  },
    tech: ["React", "Node.js", "Express", "Firebase", "LLM APIs"],
    live: "https://careergenie-frontend.onrender.com/",
    image: "/cg.png",
    accent: "sage",
  },
  {
  title: "Planara",
  subtitle: "Productivity App",
  origin: "Hiring Assignment • Expanded Independently",

  desc:
    "A productivity workspace featuring task management, habit tracking, goals, calendar scheduling, and Pomodoro sessions with Firebase sync.",

  about:
    "Planara began as a simple task management assignment but evolved into a complete productivity application. Along with Kanban task management, it includes calendar scheduling, habit tracking, goal management, and a built-in Pomodoro timer to help users stay organized. Firebase Authentication and Firestore provide secure login and real-time synchronization across the application.",

  story: {
    context:
      "The original hiring assignment only required building a basic task manager. Instead of stopping there, I decided to expand it into a more complete productivity platform by adding features people would actually use every day.",

    built:
      "Built the application using React, CSS, Firebase Authentication, and Firestore. Added drag-and-drop Kanban boards, calendar scheduling, habit tracking, goals, Pomodoro timer, authentication, and real-time data synchronization."
  },
    tech: ["React", "CSS", "Firebase"],
    live: "https://planara-six.vercel.app/",
    image: "/planara.png",
    accent: "clay",
  },
  {
    title: "FunHouse",
  subtitle: "Mini-Games Hub",
  origin: "Personal Project",

  desc:
    "A collection of 11 interactive mini-games featuring authentication, cloud storage, and engaging gameplay experiences.",

  about:
    "FunHouse is a collection of eleven browser-based mini-games built to explore different game mechanics while creating something enjoyable to use. Instead of focusing on a single game, the project showcases a variety of gameplay styles combined into one platform. Firebase Authentication and Storage handle user accounts and saved progress, while the project also experiments with API integration for selected game features.",

  story: {
    context:
      "I wanted to build something purely for fun while improving my understanding of game logic, state management, and user interaction. Rather than creating another utility application, I chose to build a platform that demonstrates both creativity and technical skills.",

    built:
      "Developed the platform using React with Firebase Authentication and Storage for user accounts and persistence. Implemented eleven different games, integrated Grok API features where appropriate, and deployed the application using Firebase Hosting."
  },
    tech: ["React", "Firebase Auth", "Firebase Storage", "Grok API"],
    live: "https://funhouse-f84b4.web.app/",
    image: "/funhouse.png",
    accent: "slate",
  },
  {
    title: "Finance Dashboard",
  subtitle: "Financial Analytics",
  origin: "Hiring Assignment • Enhanced Independently",

  desc:
    "An interactive finance dashboard with analytics, cash flow visualization, spending insights, and customizable themes.",

  about:
    "The dashboard transforms financial data into clear and interactive visualizations. Users can monitor income, expenses, category-wise spending, and overall cash flow through dynamic charts and filtering options. Originally a simple assignment, it was expanded with additional analytics and UI improvements to create a more complete financial dashboard experience.",

  story: {
    context:
      "The hiring assignment initially required only a simple interface for displaying income and expense information. I extended the project by adding richer visualizations and making the dashboard feel closer to a production-ready analytics tool.",

    built:
      "Built the application using React and Recharts with interactive cash flow charts, spending analytics, category filtering, responsive layouts, and dark/light theme support."
  },
    tech: ["React", "Recharts", "CSS"],
    live: "https://finance-dashboard-two-flax.vercel.app/",
    image: "/fd.png",
    accent: "ochre",
  },
  {
    title: "SparkVerse",
  subtitle: "API Content Hub",
  origin: "Personal earning Project",

  desc:
    "A unified content platform that brings together quotes, jokes, riddles, trivia, and more through multiple external APIs.",

  about:
    "SparkVerse combines several small API practice projects into a single polished application. Instead of demonstrating individual API integrations separately, it presents multiple content categories through one consistent interface. Features like bookmarking and sharing create an experience that feels like a complete product rather than isolated API demonstrations.",

  story: {
    context:
      "While learning REST API integration, I built several small practice projects. Rather than leaving them separate, I decided to merge them into one application that better showcases my frontend development and API integration skills.",

    built:
      "Developed the application using React and multiple REST APIs with a redesigned interface, bookmarking functionality, content sharing, and responsive layouts."
  },
    tech: ["React", "REST APIs", "CSS"],
    live: "https://sparkverse-plum.vercel.app/",
    image: "/Sparkverse.png",
    accent: "sage",
  },
  {
     title: "Chromatic",
  subtitle: "Memory Game",

  origin: "Learning project • Expanded Independently",

  desc:
    "A modern memory game inspired by Simon, featuring multiple game modes, sound effects, score tracking, and accessibility options.",

  about:
    "Chromatic started as a classic Simon-style memory game created while learning React state management. It gradually evolved into a richer experience with multiple gameplay modes, score tracking, sound effects, streaks, and a colorblind-friendly mode. The project focuses on combining engaging gameplay with accessible design.",

  story: {
    context:
      "The project began as a simple learning exercise to understand game state and React logic. As I became more comfortable with the implementation, I continued improving the gameplay by introducing new mechanics and accessibility features.",

    built:
      "Built the game using React and JavaScript with Classic, Reverse, and Speed Rush modes, score tracking, streak system, sound effects, responsive UI, and colorblind accessibility support."
  },
    tech: ["React", "JavaScript", "CSS"],
    live: "https://chromatic-delta-seven.vercel.app/",
    image: "/Chromatic.png",
    accent: "clay",
  },
  {
    title: "BizBucks Landing Page",
  subtitle: "React UI",

  origin: "Hiring Assignment",

  desc:
    "A responsive SaaS landing page developed from a design brief with attention to layout, responsiveness, and UI consistency.",

  about:
    "BizBucks is a responsive landing page built from a provided design brief during a company's hiring process. The focus was on accurately translating the design into clean, responsive React components while maintaining consistent spacing, typography, and visual hierarchy across different screen sizes.",

  story: {
    context:
      "The project was completed as part of a hiring process where the goal was to convert a provided UI design into a fully responsive web page while maintaining design accuracy.",

    built:
      "Developed the landing page using React and CSS with responsive layouts, reusable components, and close adherence to the original design specifications."
  },
    tech: ["React", "CSS", "JS"],
    live: "https://biz-bucks-landing-page.vercel.app/",
    image: "/bb.png",
    accent: "slate",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects">
      <div className="blob blob-slate b1"></div>
      <div className="blob blob-clay b2"></div>

      <motion.div className="projects-intro"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-eyebrow">// what I've built</span>
        <h2 className="section-title">My <em className="em-slate">projects</em></h2>
        
      </motion.div>

      <div className="project-list">
        {projects.map((p, i) => {
          const alignRight = i % 2 === 1;
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={p.title}
              className={`prow${alignRight ? " right" : ""}${isOpen ? " open" : ""}`}
              style={{ "--proj-color": `var(--${p.accent})`, "--proj-color-deep": `var(--${p.accent}-deep)` }}
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.3) }}
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
            >
              <div className="ptile">
                <span className="folder-tab-shape"></span>
                <span className="clip-scrap"></span>
                <FaPaperclip className="paperclip" size={22} />
                <div className="device-frame">
                  <div className="device-bar">
                    <span className="device-dot red"></span>
                    <span className="device-dot yellow"></span>
                    <span className="device-dot green"></span>
                  </div>
                  <img className="swatch" src={p.image} alt={p.title} loading={i < 2 ? "eager" : "lazy"} />
                </div>
                <div className="cap">
                  <div className="top-row">
                    <span className="sub">{p.subtitle}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="tags">
                    {p.tech.map((t) => {
                      const Icon = techIconMap[t] || FaCode;
                      return <span key={t}><Icon size={11} />{t}</span>;
                    })}
                  </div>
                 {p.live && (
  <a href={p.live} target="_blank" rel="noopener noreferrer" className="live-link btn-sm"
    style={{ "--btn-accent": `var(--${p.accent})` }}
    onClick={(e) => e.stopPropagation()}>
    View live ↗
  </a>
)}
                </div>
              </div>

              <div className="prow-mark">
                <span className="prow-line"></span>
                <span className={`prow-num text-${p.accent}`}>{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className="pdrawer">
                <div className="pdrawer-inner">
                  <span className={`origin chip-fill-${p.accent}`}>{p.origin}</span>
                  <div className="story-row"><b>About</b><p>{p.desc}</p></div>
                  <div className="story-row"><b>Context</b><p>{p.story.context}</p></div>
                  <div className="story-row"><b>Built</b><p>{p.story.built}</p></div>
                
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}