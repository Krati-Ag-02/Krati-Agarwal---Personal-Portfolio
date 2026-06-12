import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge-dot" />
            Open to paid opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Krati <em>Agarwal</em>
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Full Stack Developer &nbsp;·&nbsp; React &nbsp;·&nbsp; Node.js &nbsp;·&nbsp; Firebase
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
          >
            I build scalable, responsive web apps — from clean frontend interfaces
            to full-stack products with real users. Currently shipping features at
            Vrutsa Solutions.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="/Resume_Krati.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a href="#contact" className="btn">Contact Me</a>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/my.jpeg" alt="Krati Agarwal" />
        </motion.div>

      </div>
    </section>
  );
}