import { motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "CareerGenie",
    subtitle: "AI Career Platform",
    origin: "Personal project",
    desc: "Interview prep, resume analysis, and career guidance, with LLM APIs for real-time question generation and answer evaluation.",
    story: {
      context: "Wanted to go beyond a single API call and build a real feature around an LLM — question generation, evaluation, and a full UI around it.",
      built: "Full-stack app with React, Node.js, Express, and Firebase — resume analysis, mock interview flow, and LLM-based answer evaluation, deployed on Render.",
      next: "Add basic usage tracking to see which parts people actually use, and tighten the evaluation prompts based on real feedback.",
    },
    tech: ["React", "Node.js", "Express", "Firebase", "LLM APIs"],
    live: "https://careergenie-frontend.onrender.com/",
    image: "/cg.png",
    accent: "sage",
  },
  {
    title: "Planara",
    subtitle: "Productivity App",
    origin: "Hiring assignment, expanded",
    desc: "Kanban board, calendar, habit tracker, goals, and a Pomodoro timer, with real-time sync via Firebase.",
    story: {
      context: "Started as a company's take-home assignment: build a basic task manager.",
      built: "Took it past the brief — drag-and-drop Kanban, calendar view, habit tracking, goals, and a Pomodoro timer, all synced through Firebase Auth and Firestore.",
      next: "Add offline support and conflict handling for the real-time sync.",
    },
    tech: ["React", "CSS", "Firebase"],
    live: "https://planara-six.vercel.app/",
    image: "/planara.png",
    accent: "clay",
  },
  {
    title: "Funhouse",
    subtitle: "Mini-Games Hub",
    origin: "Practice project",
    desc: "11 mini-games in one hub, with Firebase Authentication and Storage for accounts and data persistence.",
    story: {
      context: "Built to practice shipping a full app end-to-end — game logic, auth, and cloud storage together, not one isolated feature.",
      built: "React front end for 11 games, Firebase Auth + Storage for accounts and saved progress, Grok API for a couple of in-game smart features, deployed on Firebase Hosting.",
      next: "It's a skills showcase more than a product. If extended, I'd focus on one game deeply instead of keeping all 11 shallow.",
    },
    tech: ["React", "Firebase Auth", "Firebase Storage", "Grok API"],
    live: "https://funhouse-f84b4.web.app/",
    image: "/funhouse.png",
    accent: "slate",
  },
  {
    title: "Finance Dashboard",
    subtitle: "Financial Analytics",
    origin: "Hiring assignment",
    desc: "Cashflow visualizations, category spend tracking, income/expense filtering, and dark/light themes.",
    story: {
      context: "Built as a company's hiring assignment centered on data visualization.",
      built: "Dashboard with Recharts-based cashflow charts, category spend tracking, dynamic filtering, and a theme toggle.",
      next: "Wire it up to a real data source instead of static sample data.",
    },
    tech: ["React", "Recharts", "CSS"],
    live: "https://finance-dashboard-two-flax.vercel.app/",
    image: "/fd.png",
    accent: "ochre",
  },
  {
    title: "SparkVerse",
    subtitle: "API Content Hub",
    origin: "API practice, combined",
    desc: "Pulls quotes, jokes, riddles, and trivia from multiple external APIs into one interface, with bookmarking and sharing.",
    story: {
      context: "Grew out of practicing REST API integration — several small exercises combined into one app instead of left scattered.",
      built: "Single interface fetching from multiple external APIs, with bookmarking and content sharing.",
      next: "Add caching so repeat visits don't re-fetch everything.",
    },
    tech: ["React", "REST APIs", "CSS"],
    live: "https://sparkverse-plum.vercel.app/",
    image: "/Sparkverse.png",
    accent: "sage",
  },
  {
    title: "Chromatic",
    subtitle: "Memory Game App",
    origin: "Learning project, refined",
    desc: "A color sequence memory game with sound effects, multiple modes, score tracking, and a colorblind mode.",
    story: {
      context: "Started as a classic Simon-style memory exercise while learning game-state logic in React.",
      built: "Multiple game modes (Classic, Reverse, Speed Rush), round/streak tracking, sound, and a colorblind-friendly mode.",
      next: "Add a persistent leaderboard instead of resetting scores per session.",
    },
    tech: ["React", "JavaScript", "CSS"],
    live: "https://chromatic-delta-seven.vercel.app/",
    image: "/Chromatic.png",
    accent: "clay",
  },
  {
    title: "BizBucks Landing Page",
    subtitle: "React UI",
    origin: "Hiring assignment",
    desc: "SaaS-style landing page built from a design brief as part of a company's interview process.",
    story: {
      context: "Built during a company's hiring process, translating a given design brief into a working responsive UI.",
      built: "Full responsive landing page in React matching the provided design brief.",
      next: "Scoped as a UI translation exercise — the deliverable was the UI itself.",
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
        <p className="section-note">// hover a card — it opens sideways to the story behind it</p>
      </motion.div>

      <div className="project-list">
        {projects.map((p, i) => {
          const alignRight = i % 2 === 1;
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={p.title}
              className={`prow${alignRight ? " right" : ""}${isOpen ? " open" : ""}`}
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.3) }}
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
            >
              <div className={`ptile glass`}>
                <img className="swatch" src={p.image} alt={p.title} loading={i < 2 ? "eager" : "lazy"} />
                <div className="cap">
                  <div className="top-row">
                    <span className="sub">{p.subtitle}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="tags">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="live-link"
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

              <div className={`pdrawer glass`}>
                <div className="pdrawer-inner">
                  <span className={`origin chip-fill-${p.accent}`}>{p.origin}</span>
                  <div className="story-row"><b>Context</b><p>{p.story.context}</p></div>
                  <div className="story-row"><b>Built</b><p>{p.story.built}</p></div>
                  <div className="story-row"><b>Next</b><p>{p.story.next}</p></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}