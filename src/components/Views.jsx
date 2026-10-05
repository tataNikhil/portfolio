import { profile, roles, stats, projects, experience, skills, education } from '../data.js'
import { useRole } from '../role.jsx'
import { suggestions } from '../engine.js'
import { useRef } from 'react'
import { artFor } from './Art.jsx'
import { CountUp, useScrollProgress } from './Effects.jsx'

export function Chips({ items = suggestions, onAsk }) {
  return (
    <div className="chips">
      {items.map((s) => (
        <button key={s} type="button" className="chip" onClick={() => onAsk?.(s)}>
          {s}
        </button>
      ))}
    </div>
  )
}

export function AboutView() {
  return (
    <div className="about">
      <div className="kv">
        <span>name</span><b>{profile.name}</b>
        <span>title</span><b className="hl">{profile.title}</b>
        <span>location</span><b>{profile.location}</b>
        <span>status</span><b><i className="dot" /> open to roles · 2026 graduate</b>
      </div>
      <p>{profile.summary}</p>
    </div>
  )
}

export function StatsView() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong><CountUp value={s.value} /></strong>
          <span>{s.label}</span>
          <small>{s.note}</small>
        </div>
      ))}
    </div>
  )
}

export function ProjectsTable({ onAsk }) {
  return (
    <div className="table-wrap">
      <table className="rtable">
        <thead>
          <tr><th>name</th><th>kind</th><th>stack</th><th /></tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} onClick={() => onAsk?.(`Tell me about ${p.name}`)}>
              <td><b>{p.name}</b></td>
              <td>{p.kind}</td>
              <td className="muted">{p.stack.slice(0, 4).join(', ')}…</td>
              <td className="go">open →</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="hint">Click a row to run a detail query.</p>
    </div>
  )
}

function Flow({ steps }) {
  return (
    <ol className="flow" aria-label="How it works">
      {steps.map((s, i) => (
        <li key={s} style={{ '--i': i }}>{s}</li>
      ))}
    </ol>
  )
}

export function ProjectCard({ project: p, index, total, art = true }) {
  const Art = art && artFor[p.id]
  const pad = (n) => String(n).padStart(2, '0')
  return (
    <article className={`project${Art ? ' with-art' : ''}`} id={`project-${p.id}`}>
      {Art && <div className="tilt"><Art /></div>}
      <div className="project-body">
        <div className="project-top">
          <span className="kind">{p.kind}</span>
          {index != null && <span className="idx">{pad(index + 1)} / {pad(total)}</span>}
        </div>
        <h3>{p.name}</h3>
        <p className="full">{p.full}</p>
        <p className="blurb">{p.blurb}</p>
        {!Art && <Flow steps={p.flow} />}
        <div className="metrics">
          {p.metrics.map(([k, v]) => (
            <div key={k}><strong>{v}</strong><span>{k}</span></div>
          ))}
        </div>
        <ul className="highlights">
          {p.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <footer>
          <ul className="tags">
            {p.stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {p.links.map((l) => (
            <a key={l.href} className="btn small" href={l.href} target="_blank" rel="noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </footer>
      </div>
    </article>
  )
}

export function ProjectView({ id }) {
  return <ProjectCard project={projects.find((p) => p.id === id)} />
}

function Timeline({ rows, tracked }) {
  const ref = useRef(null)
  useScrollProgress(ref, tracked)
  return (
    <ol className={`timeline${tracked ? ' tracked' : ''}`} ref={ref}>
      {rows.map((e) => (
        <li key={e.company} className={e.photo ? 'has-photo' : undefined}>
          <span className="mono-badge" aria-hidden="true">{e.company[0]}</span>
          <div className="when">{e.period}</div>
          <div className="what">
            <h3>{e.role}</h3>
            <p className="org">{e.company} <em>{e.focus}</em></p>
            <ul>
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
          {e.photo && (
            <figure className="exp-photo">
              <img src={e.photo.src} alt={e.photo.alt} width={e.photo.width} height={e.photo.height} loading="lazy"
                style={e.photo.focus ? { objectPosition: e.photo.focus } : undefined} />
              <figcaption>{e.photo.caption}</figcaption>
            </figure>
          )}
        </li>
      ))}
    </ol>
  )
}

export function ExperienceView({ only, tracked = false }) {
  const rows = only ? experience.filter((e) => e.company === only) : experience
  return <Timeline rows={rows} tracked={tracked} />
}

export function SkillsView() {
  return (
    <div className="skills">
      {skills.map((g) => (
        <div className="skill-group" key={g.table}>
          <h3>{g.label}</h3>
          <ul className="tags">
            {g.items.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function EducationView() {
  return (
    <div className="edu">
      <ol className="edu-list">
        {education.entries.map((e) => (
          <li key={e.school}>
            <div className="edu-main">
              <h3>{e.degree}</h3>
              <p>{e.school}, {e.place}</p>
            </div>
            <span className="edu-period">{e.period}</span>
            <div className="edu-score">
              <strong>{e.score}</strong>
              <span>{e.scoreLabel}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="edu-extra">
        <div>
          <h4>Core coursework</h4>
          <ul className="tags">
            {education.core.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <h4>Certifications</h4>
          <ul className="certs">
            {education.certifications.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.issuer} · {c.date}</span>
                {c.detail && <span>{c.detail}</span>}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer">View certificate <span aria-hidden="true">↗</span></a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ContactView() {
  const { current } = useRole()
  const rows = [
    ['email', profile.email, `mailto:${profile.email}`],
    ['linkedin', 'in/nikhiltata206', profile.linkedin],
    ['github', 'tataNikhil', profile.github],
    ['resume', current.resumeName, current.resume],
  ]
  return (
    <div className="table-wrap">
      <table className="rtable contact-table">
        <thead><tr><th>channel</th><th>handle</th></tr></thead>
        <tbody>
          {rows.map(([c, h, href]) => (
            <tr key={c}>
              <td>{c}</td>
              <td>
                <a href={href} target={c === 'email' ? undefined : '_blank'} rel="noreferrer"
                  download={c === 'resume' ? current.resumeName : undefined}>
                  {h}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ResumeView() {
  return (
    <div className="resumes">
      {Object.entries(roles).map(([key, r]) => (
        <div className="resume-row" key={key}>
          <span className="file-icon" aria-hidden="true">PDF</span>
          <div>
            <b>{r.label} resume</b>
            <p className="muted">{r.resumeName}</p>
          </div>
          <a className="btn small" href={r.resume} download={r.resumeName}>Download</a>
        </div>
      ))}
    </div>
  )
}
