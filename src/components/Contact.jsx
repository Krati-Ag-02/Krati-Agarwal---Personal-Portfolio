import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <p className="section-eyebrow">Let's connect</p>
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <p style={{ color: "var(--text-soft)", marginTop: "16px", fontSize: "16px" }}>
          Open to paid full-stack or frontend roles — remote, Pune, Jaipur, Bangalore, Delhi or Gurgaon.
        </p>
      </motion.div>

      <motion.div
        className="card contact-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <p>
          <FaEnvelope />
          <strong>Email:</strong>&nbsp; kratiag322004@gmail.com
        </p>
        <p style={{ marginTop: "12px" }}>
          <FaPhone />
          <strong>Phone:</strong>&nbsp; +91-8273905665
        </p>

        <div className="contact-links" style={{ marginTop: "28px" }}>
          <a href="mailto:kratiag322004@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Send Email
          </a>
          <a
            href="https://linkedin.com/in/kratiagarwal03"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/krati-ag-02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>

    </section>
  );
}