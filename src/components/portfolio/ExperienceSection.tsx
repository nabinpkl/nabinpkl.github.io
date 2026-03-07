import { experience } from '../../data/portfolio';
import { SectionTitle } from './SectionTitle';

export function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <SectionTitle
        eyebrow="Experience"
        title="Industry work across product, platform, and backend systems"
        text="Most of my recent work has centered on full-stack product delivery, testing, performance, and services that need to scale cleanly."
      />

      <div className="timeline">
        {experience.map((item) => (
          <article className="surface timeline-card" key={`${item.role}-${item.period}`}>
            <div className="timeline-head">
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">
                  {item.company} · {item.location}
                </p>
              </div>
              <span className="timeline-period">{item.period}</span>
            </div>
            <p className="timeline-summary">{item.summary}</p>
            <ul className="bullet-list">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
