import { useCallback, useEffect, useRef, useState } from 'react'
import { resolve, suggestions } from '../engine.js'
import {
  AboutView, Chips, ContactView, EducationView, ExperienceView,
  ProjectsTable, ProjectView, ResumeView, SkillsView, StatsView,
} from './Views.jsx'

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const KEYWORDS = /\b(SELECT|FROM|WHERE|ORDER|BY|GROUP|DESC|ASC|LIMIT|LIKE|AND|OR|TRUE|FALSE|DROP|TABLE|GROUP_CONCAT|SHOW|TABLES|IN|INSERT|INTO|VALUES)\b/

export function Sql({ text }) {
  const parts = text.split(/('[^']*'?|--.*$|\b[A-Z_]+\b|\d+)/m)
  return (
    <code className="sql">
      {parts.map((p, i) => {
        if (!p) return null
        let cls
        if (p.startsWith('--')) cls = 'cm'
        else if (p.startsWith("'")) cls = 'str'
        else if (/^\d+$/.test(p)) cls = 'num'
        else if (KEYWORDS.test(p) && p === p.toUpperCase()) cls = 'kw'
        return cls ? <span key={i} className={cls}>{p}</span> : p
      })}
    </code>
  )
}

function Result({ id, onAsk }) {
  switch (id) {
    case 'about': return <AboutView />
    case 'hire': return <StatsView />
    case 'projects': return <ProjectsTable onAsk={onAsk} />
    case 'knowyc':
    case 'asksql':
    case 'forgery': return <ProjectView id={id} />
    case 'experience': return <ExperienceView />
    case 'leadership': return <ExperienceView only="Google" />
    case 'skills': return <SkillsView />
    case 'education': return <EducationView />
    case 'contact': return <ContactView />
    case 'resume': return <ResumeView />
    case 'greet':
      return (
        <div className="note">
          <p>Hello. This console answers questions about Nikhil’s background and work. Try one of these:</p>
          <Chips onAsk={onAsk} />
        </div>
      )
    case 'destroy':
      return (
        <div className="note warn">
          <p><b>ERROR 1142:</b> This console is read-only. Write and delete queries are blocked by a guardrail,
            the same safeguard used in AskSQL.</p>
          <Chips items={['What are the key achievements?']} onAsk={onAsk} />
        </div>
      )
    case 'help':
    default:
      return (
        <div className="note">
          <p>{id === 'help' ? 'Supported questions:' : 'No exact match, but here’s what I can answer:'}</p>
          <Chips onAsk={onAsk} />
        </div>
      )
  }
}

const rowsFor = { projects: 3, experience: 3, skills: 7, contact: 4, hire: 6, resume: 2 }

function Entry({ entry, onAsk, onGrow }) {
  const fast = reduceMotion()
  const [phase, setPhase] = useState(fast ? 'done' : 'think')
  const [typed, setTyped] = useState(fast ? entry.sql.length : 0)
  const [ms] = useState(() => 8 + Math.floor(Math.random() * 30))

  useEffect(() => {
    if (phase === 'think') {
      const t = setTimeout(() => setPhase('sql'), 550)
      return () => clearTimeout(t)
    }
    if (phase === 'sql') {
      if (typed >= entry.sql.length) {
        const t = setTimeout(() => setPhase('done'), 180)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyped((n) => n + 2), 14)
      return () => clearTimeout(t)
    }
  }, [phase, typed, entry.sql.length])

  // Re-align the log each time this entry grows (SQL appears, result appears).
  useEffect(() => { onGrow?.() }, [phase, onGrow])

  const rows = rowsFor[entry.intent] ?? 1
  const blocked = entry.intent === 'destroy'

  return (
    <div className="entry">
      <div className="q"><span className="prompt">ask&gt;</span> {entry.question}</div>
      <div className={`trace${phase === 'think' ? ' live' : ''}`}>
        {phase === 'think'
          ? <>parsing intent<span className="ell" /></>
          : <>intent: <b>{entry.intent}</b> · schema retrieved · generated SQL</>}
      </div>
      {phase !== 'think' && (
        <pre className="sqlbox">
          <Sql text={entry.sql.slice(0, typed)} />
          {phase === 'sql' && <span className="caret" />}
        </pre>
      )}
      {phase === 'done' && (
        <>
          <div className={`status${blocked ? ' bad' : ''}`}>
            {blocked ? '✕ query rejected by guardrail' : `✓ ${rows} row${rows > 1 ? 's' : ''} in set (${(ms / 1000).toFixed(3)}s)`}
          </div>
          <div className="result"><Result id={entry.intent} onAsk={onAsk} /></div>
        </>
      )}
    </div>
  )
}

export default function Console() {
  const [entries, setEntries] = useState([])
  const [value, setValue] = useState('')
  const demo = useRef(true)
  const logRef = useRef(null)
  const nextId = useRef(0)

  const ask = (question) => {
    const q = question.trim()
    if (!q) return
    const { id, sql } = resolve(q)
    const entry = { key: nextId.current++, question: q, intent: id, sql }
    setEntries((prev) => [...prev.slice(-7), entry])
    setValue('')
  }

  // Types a first question into the prompt so the console never starts empty.
  useEffect(() => {
    const first = 'Who is Nikhil?'
    if (reduceMotion()) {
      ask(first)
      demo.current = false
      return
    }
    let i = 0
    let t = setTimeout(function tick() {
      if (!demo.current) return
      i++
      setValue(first.slice(0, i))
      if (i < first.length) t = setTimeout(tick, 55)
      else t = setTimeout(() => { if (demo.current) ask(first); demo.current = false }, 350)
    }, 700)
    return () => clearTimeout(t)
  }, [])

  // Keep the newest entry's question pinned near the top of the log.
  const alignLatest = useCallback(() => {
    const log = logRef.current
    const last = log?.lastElementChild
    if (last) log.scrollTo({ top: last.offsetTop - 12, behavior: reduceMotion() ? 'auto' : 'smooth' })
  }, [])

  return (
    <section className="console" aria-label="Ask about Nikhil">
      <div className="console-bar">
        <span className="console-title">Ask about my work</span>
        <span className="conn">natural-language → SQL demo</span>
      </div>

      <div className="log" ref={logRef} aria-live="polite">
        {entries.length === 0 && (
          <div className="empty">
            <p>Ask anything about Nikhil in plain English.</p>
            <p className="muted">It gets translated to SQL and run against a career database.</p>
          </div>
        )}
        {entries.map((e, i) => (
          <Entry key={e.key} entry={e} onAsk={ask} onGrow={i === entries.length - 1 ? alignLatest : undefined} />
        ))}
      </div>

      <form
        className="askbar"
        onSubmit={(ev) => { ev.preventDefault(); demo.current = false; ask(value) }}
      >
        <span className="prompt" aria-hidden="true">ask&gt;</span>
        <label className="sr-only" htmlFor="ask-input">Ask a question about Nikhil</label>
        <input
          id="ask-input"
          value={value}
          onChange={(e) => { demo.current = false; setValue(e.target.value) }}
          placeholder="e.g. what has Nikhil built?"
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit" className="run" aria-label="Run query">Run ↵</button>
      </form>
      <div className="console-chips">
        <Chips items={suggestions.slice(1)} onAsk={(q) => { demo.current = false; ask(q) }} />
      </div>
    </section>
  )
}
