import { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import { projects as projectData } from "../data/projects.js";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const trackRef = useRef(null);
  const projects = projectData.map((project, index) => ({
    ...project,
    index: index + 1,
  }));
  const scrollProjects = (direction) => {
    if (trackRef.current)
      trackRef.current.scrollBy({ left: direction * 340, behavior: "smooth" });
  };
  return (
    <section className="section-wrap section-block" id="projects">
      <div className="projects-heading-row">
        <SectionTitle
          eyebrow="SELECTED WORK"
          title="Projects that I've built"
          description="A few things I've worked on while learning, experimenting, and building."
        />
        <div className="scroll-controls">
          <button
            onClick={() => scrollProjects(-1)}
            aria-label="Scroll projects left"
          >
            ←
          </button>
          <button
            onClick={() => scrollProjects(1)}
            aria-label="Scroll projects right"
          >
            →
          </button>
        </div>
      </div>
      <div className="project-track" ref={trackRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>
      <p className="scroll-hint">
        <span>←</span> Scroll to explore more projects <span>→</span>
      </p>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
