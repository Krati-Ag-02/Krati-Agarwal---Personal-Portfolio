import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        CONTACT
      </motion.h2>

      <motion.div
        className="card contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p><strong><FaEnvelope />   Email:</strong> kratiag322004@gmail.com</p>
        <p><strong><FaPhone />  Phone:</strong>  +91-8273905665</p>
        <a href="mailto:kratiag322004@gmail.com" className="btn">
          Send Email
        </a>
        
      </motion.div>

    </section>
  );
}