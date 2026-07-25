import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar, FaLinkedin, FaGithub } from "react-icons/fa";

const infoItems = [
  { icon: <FaEnvelope />, value: "kratiag322004@gmail.com", href: "mailto:kratiag322004@gmail.com" },
  { icon: <FaPhone />, value: "+91-8273905665", href: "tel:+918273905665" },
  { icon: <FaMapMarkerAlt />, value: "India", href: null },
  { icon: <FaStar />, value: "Open to opportunities", href: null },
];

const socials = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kratiagarwal03", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/krati-ag-02", label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="blob blob-sage b1"></div>
      <div className="blob blob-slate b2"></div>

      <motion.div className="contact-intro"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-eyebrow">// let's connect</span>
        <h2 className="section-title">Get in <em className="em-sage">touch</em></h2>
        <p>I'm actively looking for full-stack or frontend opportunities. If you have a role or just want to connect, my inbox is open.</p>
      </motion.div>

      <motion.div className="contact-desk glass"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="contact-notepad-wrap">
          <motion.div className="contact-note-main"
            initial={{ opacity: 0, y: 26, rotate: -1.8 }} whileInView={{ opacity: 1, y: 0, rotate: -1.8 }}
            viewport={{ once: true }}>
            <div className="washi-tape"></div>
            <svg className="note-heart h1" viewBox="0 0 24 24" fill="currentColor" width="22">
              <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.6 4 6.4 4c2 0 3.6 1.1 4.6 2.7C12 5.1 13.6 4 15.6 4c3.8 0 5.9 4 4.4 7.7C19.5 16.4 12 21 12 21z" />
            </svg>
            <svg className="note-heart h2" viewBox="0 0 24 24" fill="currentColor" width="15">
              <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.6 4 6.4 4c2 0 3.6 1.1 4.6 2.7C12 5.1 13.6 4 15.6 4c3.8 0 5.9 4 4.4 7.7C19.5 16.4 12 21 12 21z" />
            </svg>

            <h3 className="note-heading">I'd love to hear<br />from <span className="accent">you!</span></h3>
            <p className="note-text">
              Whether it's a project idea, an opportunity, or just a
              friendly hello — drop me a line and I'll get back to you soon.
            </p>
            <span className="note-tag"><span className="dot"></span>Usually replies within a day</span>

            <svg className="note-arrow" viewBox="0 0 70 46" fill="none">
              <path d="M2 8 C 30 4, 50 30, 66 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M56 18 L 67 24 L 58 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="note-arrow-label">say hi →</span>
          </motion.div>

          <motion.div className="contact-note-cluster"
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.12 }}>

            <div className="contact-sticky">
              <p className="sticky-text">Let's create<br />something<br />awesome!</p>
              <p className="sticky-smile">:)</p>
            </div>

            <div className="contact-note-info">
              <div className="washi-tape clay info-tape"></div>
              <div className="note-info-items">
                {infoItems.map((item, i) => (
                  <div key={i} className="note-info-item">
                    <span className="note-info-icon">{item.icon}</span>
                    {item.href
                      ? <a href={item.href} className="note-info-value">{item.value}</a>
                      : <span className="note-info-value">{item.value}</span>}
                  </div>
                ))}
              </div>
              <div className="note-info-divider"></div>
              <div className="note-info-socials">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="note-social" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="contact-actions-row">
        <a href="mailto:kratiag322004@gmail.com" className="btn btn-solid">Send a message</a>
        <a href="/Resume_Krati.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>

      <p className="contact-footer">Designed & built by Krati Agarwal · React · Deployed on Vercel</p>
      <p className="contact-signature">— Krati</p>
    </section>
  );
}