export default function ProjectCard({ project, onClick }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onClick(project)}
      aria-label={`View details for ${project.name}`}
    >
      <div className="project-art">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
        />
      </div>
      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <p className="project-summary">{project.description}</p>
        <div className="tag-list">
          {project.tech.slice(0, 3).map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
