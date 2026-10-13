import { useState } from "react";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

const navLinks = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar section-wrap">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span>
            Bryant Arsen Rionardy <span className="brand-muted"> / portfolio</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer section-wrap">
        <span>Bryant Arsen Rionardy</span>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
