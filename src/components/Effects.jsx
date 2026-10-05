import { useCallback, useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs `onEnter` once, the first time the element scrolls into view.
export function useInView(ref, onEnter, margin = '0px 0px -15% 0px') {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return onEnter()
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { onEnter(); io.disconnect() }
    }, { rootMargin: margin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, onEnter, margin])
}

// Counts the number inside a value like "13,091", "95%+" or "₹0" up from zero.
const NUMERIC = /^(\D*)([\d,]+)(.*)$/

export function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(() => {
    const m = value.match(NUMERIC)
    return m ? `${m[1]}0${m[3]}` : value
  })

  const run = useCallback(() => {
    const m = value.match(NUMERIC)
    if (!m || prefersReducedMotion()) return setShown(value)
    const target = Number(m[2].replace(/,/g, ''))
    const fmt = (n) => (m[2].includes(',') ? n.toLocaleString('en-US') : String(n))
    const t0 = performance.now()
    const step = (t) => {
      const k = Math.min(1, (t - t0) / duration)
      setShown(`${m[1]}${fmt(Math.round(target * (1 - Math.pow(1 - k, 4))))}${m[3]}`)
      if (k < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [value, duration])
  useInView(ref, run)

  return <span ref={ref} aria-label={value}>{shown}</span>
}

// Which section id is currently in the middle of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

// Exposes how far the element has been scrolled through as --p (0 to 1).
export function useScrollProgress(ref, enabled = true) {
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    let raf = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / r.height))
      el.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref, enabled])
}
