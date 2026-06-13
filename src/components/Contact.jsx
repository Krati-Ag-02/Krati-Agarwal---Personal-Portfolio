import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  { icon:<FaEnvelope />, label:"Email", value:"kratiag322004@gmail.com", href:"mailto:kratiag322004@gmail.com" },
  { icon:<FaPhone />, label:"Phone", value:"+91-8273905665", href:"tel:+918273905665" },
  { icon:<FaMapMarkerAlt />, label:"Open to", value:"remote, Pune, Bangalore, Jaipur, or Gurgaon", href:null },
];

const actions = [
  { icon:<FaEnvelope />, label:"Send Email", href:"mailto:kratiag322004@gmail.com", primary:true },
  { icon:<FaLinkedin />, label:"LinkedIn", href:"https://www.linkedin.com/in/kratiagarwal03" },
  { icon:<FaGithub />, label:"GitHub", href:"https://github.com/krati-ag-02" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div className="section-header"
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} style={{ textAlign:"center" }}>
        <p className="section-eyebrow">// let's connect</p>
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <p className="contact-subtext">
          I'm actively seeking full-stack or frontend developer opportunities. If you have a role or just want to connect — my inbox is open.
        </p>
      </motion.div>

      <motion.div className="contact-box"
        initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ delay:0.12 }}>
        <div className="contact-items">
          {contactItems.map((item, i) => (
            <div key={i} className="contact-item">
              <span className="contact-item-icon">{item.icon}</span>
              <div>
                <p className="contact-item-label">{item.label}</p>
                {item.href
                  ? <a href={item.href} className="contact-item-value">{item.value}</a>
                  : <p className="contact-item-value">{item.value}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="contact-divider" />
        <div className="contact-actions">
          {actions.map((a, i) => (
            <a key={i} href={a.href} target="_blank" rel="noopener noreferrer"
              className={`btn${a.primary ? " btn-primary" : ""}`}>
              {a.icon} {a.label}
            </a>
          ))}
        </div>
      </motion.div>

      <p className="contact-footer">
        Designed & built by Krati Agarwal · React · Deployed on Vercel
      </p>
    </section>
  );
}