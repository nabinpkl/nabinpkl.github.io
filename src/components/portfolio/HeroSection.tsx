import { profile, quickFacts, strengths } from '../../data/portfolio';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy surface">
        <p className="eyebrow">Software Engineer</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title} focused on full-stack delivery, performance, and quality.</p>
        <p className="lead">{profile.summary}</p>
        <p className="hero-text">{profile.intro}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            View experience
          </a>
          <a className="button button-secondary" href="#skills">
            Explore skills
          </a>
        </div>
      </div>

      <aside className="hero-panel surface">
        <div>
          <p className="panel-label">Highlights</p>
          <div className="fact-grid">
            {quickFacts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="strength-list">
          <p className="panel-label">What I bring</p>
          <ul>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
