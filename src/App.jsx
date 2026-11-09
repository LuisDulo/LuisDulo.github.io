import github from './data/github.json';
import { GITHUB, EMAIL, languageNotes, about, capstone, recent, projects, experience, education, skills } from './content.js';

function CodeIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
    </svg>
  );
}

function SourceLink({ href }) {
  return <a className="source" href={href}><CodeIcon />Source code</a>;
}

const formatShare = (share) => (share < 1 ? `${share.toFixed(2)}%` : `${share.toFixed(1)}%`);
const formatSize = (bytes) => (bytes >= 1000 ? `${Math.round(bytes / 1000)} KB` : `${bytes} B`);

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="About me" title="Hi, I'm Luis">
      <div className="about">
        <div className="about-text">
          {about.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <dl className="facts">
            {about.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="about-photo">
          <img src={about.photo.src} width={about.photo.width} height={about.photo.height}
            alt="Luis Okal Dulo at the Isuzu East Africa offices" loading="lazy" />
          <figcaption>{about.photo.caption}</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Languages() {
  const top = github.languages[0]?.bytes || 1;
  return (
    <Section id="languages" label="Measured from code" title="Languages">
      <p className="lede">
        Share of code across my {github.repoCount} public repositories, excluding forks. This list is
        generated from the GitHub API each time the site deploys.
      </p>
      <ul className="langs">
        {github.languages.map((language) => (
          <li key={language.name} className="lang" title={`${language.name}: ${language.bytes.toLocaleString()} bytes`}>
            <span className="lang-name">{language.name}</span>
            <span className="lang-track" aria-hidden="true">
              <span className="lang-bar" style={{ width: `${(language.bytes / top) * 100}%` }} />
            </span>
            <span className="lang-value">{formatShare(language.share)}</span>
            <span className="lang-note">
              {languageNotes[language.name] || `Used in ${language.repos.join(', ')}`}
              <span className="lang-size"> | {formatSize(language.bytes)}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="note">
        Size shows how much code exists, not how skilled I am in a language. Also on my CV: C++, with no
        public repository yet. Last measured {github.generatedAt}.
      </p>
    </Section>
  );
}

function Capstone() {
  return (
    <Section id="capstone" label="Featured project" title="Smart School Feeding">
      <p className="lede">{capstone.summary}</p>
      <ul className="meta">{capstone.meta.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="parts">
        {capstone.parts.map(([name, stack, text]) => (
          <div key={name} className="part">
            <h3>{name}</h3>
            <p className="mono">{stack}</p>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="results">
        {capstone.results.map((result) => (
          <article key={result.title} className="result">
            <h3>{result.title}</h3>
            <p className="figure">{result.figure}</p>
            <p className="mono">{result.unit}</p>
            <p>{result.text}</p>
          </article>
        ))}
      </div>
      <p className="note">{capstone.caveat}</p>
      <a className="button" href={capstone.url}>View the code</a>
    </Section>
  );
}

function Recent() {
  return (
    <Section id="recent" label="Built since the capstone" title="Recent projects">
      <p className="lede">
        Each one has its own repository, planned in sprints on a public board, with every change made
        through an issue and a pull request.
      </p>
      <div className="recent">
        {recent.map((project) => (
          <article key={project.name} className="recent-card">
            <p className="mono">{project.kind}</p>
            <h3>{project.name}</h3>
            <p className="figure">{project.figure}</p>
            <p className="mono">{project.unit}</p>
            <p className="recent-text">{project.text}</p>
            <p className="recent-detail">{project.detail}</p>
            <ul className="tags">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <SourceLink href={project.url} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Earlier work" title="Coursework and early projects">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.name} className="project">
            <p className="mono">{project.kind}</p>
            <h3>{project.name}</h3>
            <p>{project.text}</p>
            <ul className="tags">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            {project.url && <SourceLink href={project.url} />}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Background() {
  return (
    <Section id="background" label="Background" title="Experience and education">
      <div className="split">
        <div>
          <h3>{experience.role}</h3>
          <p className="mono">{experience.org} | {experience.dates}</p>
          <ul className="points">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
        <dl className="education">
          {education.map(([school, award, dates]) => (
            <div key={school}>
              <dt>{school}</dt>
              <dd>{award}</dd>
              <dd className="mono">{dates}</dd>
            </div>
          ))}
        </dl>
      </div>
      <h3 className="skills-title">Skills</h3>
      <dl className="skills">
        {skills.map(([area, items]) => (
          <div key={area}>
            <dt>{area}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">Luis Okal</a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#languages">Languages</a>
          <a href="#capstone">Capstone</a>
          <a href="#recent">Projects</a>
          <a href="#background">Background</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Informatics and Computer Science, Strathmore University</p>
            <h1>Luis Enrique Okal Dulo</h1>
            <p className="hero-text">
              I build full-stack web and mobile software, from Django APIs and M-Pesa payments to React
              interfaces, data pipelines and applied machine learning, and I review it for security.
            </p>
            <div className="actions">
              <a className="button" href={`mailto:${EMAIL}`}>Email me</a>
              <a className="button ghost" href={GITHUB}>GitHub</a>
            </div>
          </div>
          <img className="avatar" src="/images/luis-profile.webp" width="560" height="560" alt="Portrait of Luis Okal Dulo" />
        </section>
        <About />
        <Languages />
        <Capstone />
        <Recent />
        <Projects />
        <Background />
      </main>
      <footer className="footer">
        <h2>Let's talk</h2>
        <p>Questions about a project, or a role you think I'd fit? Email me.</p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </>
  );
}
