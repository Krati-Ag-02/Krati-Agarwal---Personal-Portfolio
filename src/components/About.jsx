import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        ABOUT ME
      </motion.h2>

      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}}>
        I am a Computer Science student with a strong interest in web development,
        focused on building clean, responsive, and user-friendly applications.
        I enjoy turning ideas into real projects using technologies like HTML, CSS,
        JavaScript, and Node.js.
      </motion.p>

      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3}}>
        I have worked on multiple projects ranging from frontend interfaces to
        full-stack applications such as a career guidance platform, where I focused
        on both functionality and user experience.
      </motion.p>

      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4}}>
        I am continuously improving my skills by learning modern technologies like
        React and REST APIs, and I am always looking for opportunities to grow as a developer.
      </motion.p>

    </section>
  );
}