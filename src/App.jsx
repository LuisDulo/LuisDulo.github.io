import github from './data/github.json';
import { GITHUB, EMAIL, languageNotes, capstone, projects, experience, education, skills } from './content.js';

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
              <span className="lang-size"> · {formatSize(language.bytes)}</span>
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

function Projects() {
  return (
    <Section id="projects" label="More work" title="Other projects">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.name} className="project">
            <p className="mono">{project.kind}</p>
            <h3>{project.name}</h3>
            <p>{project.text}</p>
            <ul className="tags">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            {project.url && <a href={project.url}>Source code</a>}
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
          <p className="mono">{experience.org} · {experience.dates}</p>
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
          <a href="#languages">Languages</a>
          <a href="#capstone">Capstone</a>
          <a href="#projects">Projects</a>
          <a href="#background">Background</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <p className="eyebrow">Informatics and Computer Science, Strathmore University</p>
          <h1>Luis Enrique Okal Dulo</h1>
          <p className="hero-text">
            I build full-stack web and mobile software, from Django APIs and M-Pesa payments to React
            interfaces and applied machine learning.
          </p>
          <div className="actions">
            <a className="button" href={`mailto:${EMAIL}`}>Email me</a>
            <a className="button ghost" href={GITHUB}>GitHub</a>
          </div>
        </section>
        <Languages />
        <Capstone />
        <Projects />
        <Background />
      </main>
      <footer className="footer">
        <h2>Let's talk</h2>
        <p>Graduating July 2027. Outside code: basketball, pool and gaming.</p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </>
  );
}
