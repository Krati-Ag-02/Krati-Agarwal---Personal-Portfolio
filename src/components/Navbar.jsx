import { motion } from "framer-motion";
export default function Navbar() {

  const links = ["about","education","certifications","experience","projects","skills","interests","contact"];

  return (
    <nav className="navbar">
  <ul className="nav-links">
        {links.map((l,i)=>(
          <li key={i}>
            <a href={`#${l}`} >
              {l.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}