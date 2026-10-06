import { useEffect } from 'react'
import Console from './components/Console.jsx'
import { useActiveSection } from './components/Effects.jsx'
import {
  EducationView, ExperienceView, ProjectCard, SkillsView, StatsView,
} from './components/Views.jsx'
import { profile, projects, resume } from './data.js'

const NAV = [
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]
const NAV_IDS = NAV.map(([id]) => id)

function SectionHead({ label, title, intro }) {
  return (
    <header className="section-head">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </header>
  )
}

// Fades sections in as they scroll into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (list) => list.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const YEAR = new Date().getFullYear()

export default function App() {
  const active = useActiveSection(NAV_IDS)
  useReveal()

  const contacts = [
    ['Email', profile.email, `mailto:${profile.email}`],
    ['LinkedIn', 'linkedin.com/in/nikhiltata206', profile.linkedin],
    ['GitHub', 'github.com/tataNikhil', profile.github],
    ['Resume', 'PDF', resume.href, resume.name],
  ]

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="logo" aria-label="Nikhil Sai Tata, back to top">
            <span className="logo-mark" aria-hidden="true">NT</span>
            <span className="logo-text">Nikhil Sai Tata</span>
          </a>
          <nav className="nav" aria-label="Sections">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <a className="btn small" href={resume.href} download={resume.name}>Resume</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="pill"><i className="dot" /> Open to Full Stack AI Engineer roles · Graduating 2026</p>
            <div className="identity">
              <img className="avatar" src="/photo.jpg" alt="Portrait of Nikhil Sai Tata" width="120" height="120" />
              <h1>Nikhil Sai Tata</h1>
            </div>
            <p className="headline">{profile.headline}</p>
            <p className="tagline">{profile.tagline}</p>
            <div className="cta">
              <a className="btn" href="#projects">View projects</a>
              <a className="btn ghost" href={resume.href} download={resume.name}>
                Download resume
              </a>
            </div>
            <ul className="facts">
              <li>{profile.location}</li>
              <li>B.Tech CS · CGPA 8.44</li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="console-frame">
            <Console />
          </div>
        </section>

        <section className="band reveal" aria-label="Highlights">
          <div className="band-inner">
            <StatsView />
          </div>
        </section>

        <section className="section reveal" id="projects">
          <SectionHead label="Projects" title="Selected projects"
            intro="Products built end to end, from the model and the database to the API and the interface." />
          <div className="projects">
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} total={projects.length} />)}
          </div>
        </section>

        <section className="section reveal" id="experience">
          <SectionHead label="Experience" title="Work experience & leadership" />
          <ExperienceView tracked />
        </section>

        <section className="section reveal" id="skills">
          <SectionHead label="Skills" title="Technical skills" />
          <SkillsView />
        </section>

        <section className="section reveal" id="education">
          <SectionHead label="Education" title="Education & certifications" />
          <EducationView />
        </section>

        <section className="section reveal" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>Let’s work together</h2>
              <p className="intro">
                I’m open to full-time Full Stack AI Engineer roles. The quickest way to reach me is by email.
              </p>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
            <ul className="contact-list">
              {contacts.map(([label, handle, href, dl]) => (
                <li key={label}>
                  <a href={href} download={dl}
                    target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span className="cc-label">{label}</span>
                    <span className="cc-handle">{handle}</span>
                    <span className="cc-arrow" aria-hidden="true">{dl ? '↓' : '→'}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-row">
          <span>© {YEAR} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  )
}
