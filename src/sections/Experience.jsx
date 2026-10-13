import SectionTitle from "../components/SectionTitle.jsx";
import TimelineItem from "../components/TimelineItem.jsx";

export default function Experience() {
  return (
    <section className="section-wrap section-block" id="experience">
      <SectionTitle
        eyebrow="MY EXPERIENCE"
        title="Experience"
        description="My working experience so far."
      />
      <div className="timeline">
        <TimelineItem
          date="2026 - PRESENT"
          title="Software Laboratory Assistant"
          organization="BINUS University"
          description="A part-time software laboratory assitant incharge of teaching students."
        />
        <TimelineItem
          date="2024"
          title="E-Sport PIC in SHB Cup"
          organization="Sekolah Harapan Bangsa"
          description="PIC incharge of E-Sport tournament for SHB Cup."
        />
      </div>
    </section>
  );
}
