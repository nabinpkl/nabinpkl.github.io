import { education, profile } from '../../data/portfolio';
import { SectionTitle } from './SectionTitle';

export function EducationSection() {
  return (
    <section className="content-section content-grid-2" id="education">
      <div>
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
          text="Recent postgraduate study added current full-stack practice to a software engineering foundation in computer engineering."
        />

        <div className="stack-list">
          {education.map((item) => (
            <article className="surface section-card compact-card" key={`${item.degree}-${item.period}`}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span className="meta-text">{item.period}</span>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          eyebrow="Language"
          title="Communication"
          text="Clear written and verbal communication for distributed teams, technical discussions, and cross-functional delivery."
        />

        <article className="surface section-card compact-card">
          <h3>{profile.language}</h3>
          <p>Comfortable working in engineering-focused teams with documentation, reviews, and async collaboration.</p>
        </article>
      </div>
    </section>
  );
}
