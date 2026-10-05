// Hand-drawn SVG illustrations for each project. Pure markup + CSS animation.

function Pin({ x, y, color, label, delay = 0 }) {
  const w = label ? label.length * 6.4 + 18 : 0
  return (
    <g transform={`translate(${x} ${y})`}>
    <g className="pin" style={{ '--d': `${delay}s` }}>
      <path d="M0 0 C-6-8-9-12-9-17 a9 9 0 0 1 18 0 c0 5-3 9-9 17z" fill={color} />
      <circle cy="-17" r="3.4" fill="#0b0c0f" />
      {label && (
        <g transform="translate(14 -30)">
          <rect width={w} height="20" rx="10" className="pin-label" />
          <text x="9" y="13.5" className="t">{label}</text>
        </g>
      )}
    </g>
    </g>
  )
}

export function MapArt() {
  return (
    <svg viewBox="0 0 480 320" className="art art-map" role="img"
      aria-label="Illustration: a campus map with rooms, items and places pinned within a search radius">
      <defs>
        <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7fd1bd" stopOpacity=".2" />
          <stop offset="1" stopColor="#7fd1bd" stopOpacity="0" />
        </radialGradient>
        <pattern id="map-blocks" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,.045)" />
        </pattern>
      </defs>
      <rect width="480" height="320" fill="url(#map-blocks)" />
      <path d="M-10 292 C100 268 180 312 300 287 S440 262 490 276" className="river" />
      <path d="M-10 232 C120 200 200 262 490 150" className="road" />
      <path d="M150 -10 L212 330" className="road" />
      <path d="M-10 78 L490 112" className="road thin" />
      <path d="M332 -10 C300 120 382 200 360 330" className="road thin" />
      <path d="M40 -10 L90 330" className="road thin" />

      <circle cx="240" cy="168" r="150" fill="url(#map-glow)" />
      <circle cx="240" cy="168" r="112" className="radius" />
      <circle cx="240" cy="168" r="62" className="radius r2" />
      <circle cx="240" cy="168" r="14" className="pulse" />
      <circle cx="240" cy="168" r="10" fill="#7fd1bd" />
      <path d="M233 168 l7-4 7 4-7 4z M236 170v3c2 2 6 2 8 0v-3" fill="none" stroke="#0b0c0f" strokeWidth="1.6" strokeLinejoin="round" />

      <Pin x={152} y={118} color="#93b4e8" label="PG · ₹8,500" delay={0.1} />
      <Pin x={334} y={128} color="#93b4e8" label="Cycle · ₹2,000" delay={0.3} />
      <Pin x={306} y={242} color="#b7c0cc" label="Café · 400 m" delay={0.5} />
      <Pin x={176} y={226} color="#93b4e8" label="2BHK · 1.2 km" delay={0.7} />
      <Pin x={392} y={206} color="#c7a6e0" delay={0.9} />
      <Pin x={92} y={170} color="#93b4e8" delay={1.1} />

      <g transform="translate(18 18)" className="float-card">
        <rect width="178" height="68" rx="12" />
        <text x="14" y="24" className="t strong">Rooms near campus</text>
        <text x="14" y="42" className="t dim">within 1.2 km · verified</text>
        <rect x="14" y="52" width="150" height="4" rx="2" fill="rgba(255,255,255,.1)" />
        <rect x="14" y="52" width="62" height="4" rx="2" fill="#7fd1bd" />
        <circle cx="76" cy="54" r="5.5" fill="#f3f0e8" />
      </g>
    </svg>
  )
}

export function PipelineArt() {
  const bars = [62, 88, 46, 74, 34]
  return (
    <svg viewBox="0 0 480 320" className="art art-pipe" role="img"
      aria-label="Illustration: a plain-English question passes through schema retrieval and an LLM, becomes SQL, and returns a chart">
      <defs>
        <linearGradient id="pipe-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fd1bd" />
          <stop offset=".5" stopColor="#93b4e8" />
          <stop offset="1" stopColor="#93b4e8" />
        </linearGradient>
        <linearGradient id="pipe-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#93b4e8" stopOpacity=".35" />
          <stop offset="1" stopColor="#7fd1bd" />
        </linearGradient>
      </defs>

      <path d="M168 92 C200 92 196 160 214 160" className="wire" />
      <path d="M248 72 L248 124" className="wire" />
      <path d="M284 160 C306 160 304 84 326 84" className="wire" />
      <path d="M392 150 L392 186" className="wire" />

      <g transform="translate(20 50)">
        <text y="-10" className="t dim">question</text>
        <rect width="148" height="78" rx="14" className="bubble" />
        <text x="14" y="28" className="t strong">“Top 5 cities by</text>
        <text x="14" y="46" className="t strong">revenue in Q3?”</text>
        <text x="14" y="66" className="t dim">plain English</text>
      </g>

      <g transform="translate(206 22)">
        <text x="42" y="-6" textAnchor="middle" className="t dim">schema RAG</text>
        {Array.from({ length: 18 }, (_, i) => (
          <circle key={i} cx={(i % 6) * 15 + 4} cy={Math.floor(i / 6) * 15 + 6} r="3.2"
            className={[2, 7, 9, 14].includes(i) ? 'vec on' : 'vec'} style={{ '--d': `${(i % 6) * 0.15}s` }} />
        ))}
      </g>

      <g transform="translate(212 124)">
        <rect width="72" height="72" rx="18" fill="#0e1116" stroke="url(#pipe-grad)" strokeWidth="1.5" className="llm" />
        <text x="36" y="40" textAnchor="middle" className="serif-t">LLM</text>
        <text x="36" y="58" textAnchor="middle" className="t dim small">Bedrock</text>
      </g>

      <g transform="translate(326 40)">
        <rect width="134" height="110" rx="12" className="code" />
        <rect x="14" y="18" width="38" height="7" rx="3.5" fill="#c7a6e0" />
        <rect x="58" y="18" width="52" height="7" rx="3.5" fill="#cfd3dc" opacity=".55" />
        <rect x="14" y="34" width="30" height="7" rx="3.5" fill="#c7a6e0" />
        <rect x="50" y="34" width="44" height="7" rx="3.5" fill="#cfd3dc" opacity=".55" />
        <rect x="14" y="50" width="34" height="7" rx="3.5" fill="#c7a6e0" />
        <rect x="54" y="50" width="62" height="7" rx="3.5" fill="#7fd1bd" opacity=".85" />
        <rect x="14" y="66" width="56" height="7" rx="3.5" fill="#c7a6e0" />
        <rect x="76" y="66" width="28" height="7" rx="3.5" fill="#cfd3dc" opacity=".55" />
        <rect x="14" y="82" width="26" height="7" rx="3.5" fill="#c7a6e0" />
        <rect x="46" y="82" width="12" height="7" rx="3.5" fill="#93b4e8" />
        <text x="14" y="104" className="t dim small">SELECT … LIMIT 5;</text>
      </g>

      <g transform="translate(326 186)">
        <rect width="134" height="112" rx="12" className="code" />
        {bars.map((h, i) => (
          <rect key={i} x={16 + i * 22} y={94 - h} width="14" height={h} rx="4"
            fill="url(#pipe-bar)" className="bar" style={{ '--d': `${0.2 + i * 0.12}s` }} />
        ))}
        <line x1="12" x2="122" y1="95" y2="95" stroke="rgba(255,255,255,.12)" />
        <text x="67" y="-8" textAnchor="middle" className="t dim">answer · 5 rows</text>
      </g>

      <g transform="translate(20 214)">
        <rect width="168" height="70" rx="14" className="float-card-r" />
        <text x="14" y="28" className="t dim">accuracy</text>
        <text x="14" y="56" className="serif-t big">95%+</text>
        <text x="96" y="56" className="t dim small">100+ queries</text>
      </g>
    </svg>
  )
}

export function ForensicArt() {
  return (
    <svg viewBox="0 0 480 320" className="art art-doc" role="img"
      aria-label="Illustration: a document being scanned, with an altered region highlighted by a heatmap and a 'tampered' verdict">
      <defs>
        <radialGradient id="doc-heat" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ff5a3c" stopOpacity=".95" />
          <stop offset=".35" stopColor="#ffb547" stopOpacity=".6" />
          <stop offset=".7" stopColor="#7fd1bd" stopOpacity=".18" />
          <stop offset="1" stopColor="#7fd1bd" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="doc-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fd1bd" stopOpacity="0" />
          <stop offset=".85" stopColor="#7fd1bd" stopOpacity=".28" />
          <stop offset="1" stopColor="#7fd1bd" stopOpacity=".9" />
        </linearGradient>
        <clipPath id="doc-page"><rect x="120" y="22" width="208" height="278" rx="10" /></clipPath>
      </defs>

      <g transform="translate(20 46)">
        <text y="-10" className="t dim">ELA output</text>
        <rect width="82" height="104" rx="10" className="code" />
        {Array.from({ length: 48 }, (_, i) => {
          const x = (i % 6) * 12 + 7
          const y = Math.floor(i / 6) * 12 + 6
          const hot = [26, 27, 32, 33].includes(i)
          return <rect key={i} x={x} y={y} width="9" height="9" rx="2"
            fill={hot ? '#ff7a59' : '#f3f0e8'} opacity={hot ? 0.95 : ((i * 37) % 10) / 70 + 0.04} />
        })}
      </g>

      <rect x="120" y="22" width="208" height="278" rx="10" className="page" />
      <g clipPath="url(#doc-page)">
        <rect x="140" y="44" width="84" height="10" rx="3" fill="#f3f0e8" opacity=".75" />
        <rect x="140" y="62" width="120" height="5" rx="2.5" className="ln" />
        <circle cx="296" cy="56" r="14" fill="none" stroke="#93b4e8" strokeOpacity=".6" strokeDasharray="3 3" />
        {[90, 102, 114, 126].map((y, i) => (
          <rect key={y} x="140" y={y} width={[168, 150, 160, 120][i]} height="5" rx="2.5" className="ln" />
        ))}
        <rect x="140" y="148" width="168" height="62" rx="6" fill="none" stroke="rgba(255,255,255,.1)" />
        {[160, 176, 192].map((y) => (
          <g key={y}>
            <rect x="150" y={y} width="70" height="5" rx="2.5" className="ln" />
            <rect x="256" y={y} width="40" height="5" rx="2.5" className="ln" />
          </g>
        ))}
        <ellipse cx="276" cy="186" rx="46" ry="26" fill="url(#doc-heat)" className="heat" />
        <rect x="238" y="166" width="68" height="38" rx="5" className="bbox" />
        {[228, 240].map((y, i) => (
          <rect key={y} x="140" y={y} width={[150, 110][i]} height="5" rx="2.5" className="ln" />
        ))}
        <path d="M146 278 c10-16 16 6 24-6 s10-10 16 2 12-8 22 0" fill="none" stroke="#f3f0e8" strokeOpacity=".55" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="120" y="-40" width="208" height="46" fill="url(#doc-beam)" className="beam" />
      </g>
      <text x="238" y="160" className="t warn small">altered region</text>

      <g transform="translate(346 70)">
        <rect width="118" height="164" rx="14" className="float-card-r" />
        <text x="14" y="26" className="t dim">verdict</text>
        <text x="14" y="54" className="serif-t warn-t">Tampered</text>
        <text x="14" y="82" className="t dim small">Random Forest</text>
        <rect x="14" y="88" width="90" height="5" rx="2.5" fill="rgba(255,255,255,.08)" />
        <rect x="14" y="88" width="85.5" height="5" rx="2.5" fill="#7fd1bd" className="grow" />
        <text x="14" y="112" className="t dim small">SVM</text>
        <rect x="14" y="118" width="90" height="5" rx="2.5" fill="rgba(255,255,255,.08)" />
        <rect x="14" y="118" width="82.8" height="5" rx="2.5" fill="#93b4e8" className="grow" />
        <text x="14" y="146" className="t small">95% · 92%</text>
      </g>
    </svg>
  )
}

export const artFor = { knowyc: MapArt, asksql: PipelineArt, forgery: ForensicArt }
