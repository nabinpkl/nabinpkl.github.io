import { skillGroups } from '../../data/portfolio';
import { SectionTitle } from './SectionTitle';

export function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies and engineering habits"
        text="A practical mix of product engineering, backend systems, frontend delivery, and testing discipline."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="surface section-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
