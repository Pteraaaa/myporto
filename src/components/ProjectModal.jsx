import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close" onClick={onClose} aria-label="Close project details">×</button>
      <p className="eyebrow">PROJECT DETAILS</p>
      <h2 id="modal-title">{project.name}</h2>
      <p className="project-category">{project.category}</p>
      <p className="modal-description">{project.details}</p>
      <h3 className="modal-subtitle">Technologies</h3>
      <div className="tag-list">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
      <p className="modal-hint"><a href={project.link}>Repository</a></p>
    </section>
  </div>;
}
