import SectionTitle from "../components/SectionTitle.jsx";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML & CSS", "Flutter UI"],
  },
  { title: "Backend", 
    skills: ["Node.js", "NestJS", "REST APIs"] 
  },
  {
    title: "Database",
    skills: ["MySQL"]
  },
  {
    title: "Language",
    skills: ["English", "Mandarin (HSK 4)"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Figma basics", "Vite", "Prisma"],
  },
];

export default function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionTitle
        eyebrow="WHAT I WORK WITH"
        title="Skills & tools"
        description="A growing toolkit for building responsive interfaces and practical software."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
