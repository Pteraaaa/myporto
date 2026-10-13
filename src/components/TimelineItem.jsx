export default function TimelineItem({
  date,
  title,
  organization,
  description,
}) {
  return (
    <article className="timeline-item">
      <span className="timeline-dot" />
      <p className="timeline-date">{date}</p>
      <h3>{title}</h3>
      <p className="timeline-organization">{organization}</p>
      <p className="timeline-description">{description}</p>
    </article>
  );
}
