export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> COMPUTER SCIENCE STUDENT
        </p>
        <h1>
          Bryant 
          <br />
          <span>Arsen Rionardy</span>
        </h1>
        <p className="hero-description">
          Hi, I'm <strong>Bryant Arsen Rionardy</strong> — a computer science
          student at BINUS University. I'm interested in web development and frontend development.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work
          </a>
          <a className="text-link" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="profile-photo"
          src="/images/profile.JPG"
          alt="Profile photo placeholder"
        />
      </div>
    </section>
  );
}
