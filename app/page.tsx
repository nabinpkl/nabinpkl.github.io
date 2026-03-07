type FocusArea = {
  title: string;
  text: string;
};

const focusAreas: FocusArea[] = [
  {
    title: 'Frontend systems',
    text: 'Building interfaces that feel fast, readable, and easy to maintain as projects grow.',
  },
  {
    title: 'Product-minded delivery',
    text: 'Turning rough ideas into shipped features with clear trade-offs and a practical scope.',
  },
  {
    title: 'Developer experience',
    text: 'Improving workflows with better structure, tooling, and automation where it actually helps.',
  },
];

const stack: string[] = ['Next.js', 'React', 'TypeScript', 'CSS', 'Static export', 'GitHub Pages'];

const notes: string[] = [
  'Uses the App Router.',
  'Builds as a static site for GitHub Pages deployment.',
  'Keeps the existing manifest, icons, robots file, and custom domain.',
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · Next.js</p>
          <h1>Nabin Pokhrel</h1>
          <p className="lead">
            This site now runs on Next.js with a static export setup, making it easy to keep the
            portfolio modern while staying compatible with GitHub Pages.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#focus">
              Explore the site
            </a>
            <a className="button button-secondary" href="#setup">
              Deployment notes
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <span className="panel-label">Current setup</span>
          <ul>
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section-grid" id="focus">
        {focusAreas.map((item) => (
          <article className="card" key={item.title}>
            <p className="card-kicker">Focus</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="content-row">
        <article className="card wide-card">
          <p className="card-kicker">Why Next.js</p>
          <h2>Structured for growth</h2>
          <p>
            The project now has a proper application layout, metadata handling, global styling, and
            a build pipeline that can grow into a fuller portfolio without needing another reset.
          </p>
          <div className="chip-row">
            {stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="card" id="setup">
          <p className="card-kicker">Deployment</p>
          <h2>Ready for static hosting</h2>
          <p>
            Running <strong>next build</strong> generates the export in the <strong>out</strong>{' '}
            directory, which works well for GitHub Pages deployments and keeps the custom domain in
            place.
          </p>
        </article>
      </section>
    </main>
  );
}