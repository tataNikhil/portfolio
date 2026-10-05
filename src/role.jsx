import { createContext, useContext, useEffect, useState } from 'react'
import { roles } from './data.js'

const RoleContext = createContext(null)

// Initial role comes from the link (?role=software) so a specific version can be
// shared with a recruiter, then from the visitor's last choice, then defaults to AI.
function initialRole() {
  const fromUrl = new URLSearchParams(window.location.search).get('role')
  if (fromUrl in roles) return fromUrl
  try {
    const saved = localStorage.getItem('role')
    if (saved in roles) return saved
  } catch { /* storage unavailable */ }
  return 'ai'
}

export function RoleProvider({ children }) {
  const [role, setRole] = useState(initialRole)

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('role', role)
    window.history.replaceState(null, '', url)
    try { localStorage.setItem('role', role) } catch { /* storage unavailable */ }
  }, [role])

  return (
    <RoleContext.Provider value={{ role, setRole, current: roles[role] }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => useContext(RoleContext)

const ICONS = {
  ai: (
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  ),
  software: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
}

// Two large option cards that tailor the page (headline, project order, resume) to a role.
export function RoleSwitch() {
  const { role, setRole, current } = useRole()
  return (
    <div className="role-picker">
      <p className="role-picker-label" id="role-picker-label">View this portfolio as</p>
      <div className="role-options" role="radiogroup" aria-labelledby="role-picker-label">
        {Object.entries(roles).map(([key, r]) => {
          const on = role === key
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={on}
              className={`role-option${on ? ' on' : ''}`}
              onClick={() => setRole(key)}
            >
              <svg className="role-icon" viewBox="0 0 24 24" aria-hidden="true">{ICONS[key]}</svg>
              <span className="role-text">
                <b>{r.label}</b>
                <small>{r.focus}</small>
              </span>
              <span className="role-check" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" /></svg>
              </span>
            </button>
          )
        })}
      </div>
      <p className="role-note" aria-live="polite">
        Summary, project order and resume are tailored for <b>{current.label}</b> roles.
      </p>
    </div>
  )
}
