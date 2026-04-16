import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-name"
          >
            KRATI AGARWAL
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-role"
          >
            Frontend Developer • Aspiring Web Developer
          </motion.h2>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build modern, responsive and visually appealing web applications
            focused on performance and user experience.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className="btn">
              View Work
            </a>

            <a href="/Resume_Krati.pdf" className="btn">
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src="/profile.jpg" alt="profile" />
        </motion.div>

      </div>

    </section>
  );
}