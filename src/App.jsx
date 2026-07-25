import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import SectionDecor from "./components/SectionDecor";

export default function App() {
  return (
    <div className="app-layout">
      <CustomCursor />

      <Navbar />

      <main id="main-content">
        <div className="section-decor-wrap">
          <Hero />
          <SectionDecor section="hero" />
        </div>

        <div className="section-decor-wrap">
          <About />
          <SectionDecor section="about" />
        </div>

        <div className="section-decor-wrap">
          <Experience />
          <SectionDecor section="experience" />
        </div>

        <div className="section-decor-wrap">
          <Projects />
          <SectionDecor section="projects" />
        </div>

        <div className="section-decor-wrap">
          <Skills />
          <SectionDecor section="skills" />
        </div>

        <div className="section-decor-wrap">
          <Education />
          <SectionDecor section="education" />
        </div>

        <div className="section-decor-wrap">
          <Certifications />
          <SectionDecor section="certifications" />
        </div>

        <div className="section-decor-wrap">
          <Interests />
          <SectionDecor section="interests" />
        </div>

        <div className="section-decor-wrap">
          <Contact />
          <SectionDecor section="contact" />
        </div>
      </main>
    </div>
  );
}