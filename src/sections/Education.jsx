import SectionTitle from "../components/SectionTitle.jsx";
import TimelineItem from "../components/TimelineItem.jsx";

export default function Education() {
  return (
    <section className="section-wrap section-block" id="education">
      <SectionTitle
        eyebrow="LEARNING & GROWTH"
        title="Education"
        description="My academic foundation and the things I'm learning along the way."
      />
      <div className="timeline education-timeline">
        <TimelineItem
          date="2024 - Present"
          title="Computer Science Major Student"
          organization="BINUS University"
          description="Currently pursuing a bachelor's degree in Computer Science at BINUS University."
        />
        <TimelineItem
          date="2021 — 2024"
          title="Science High School Student"
          organization="SMA Harapan Bangsa"
        />
      </div>
    </section>
  );
}
