# 4. How it works

## The big picture

```
data.js (your content)
   │
   ├──► App.jsx (page layout) ──► Views.jsx (cards, timeline, skills…) ──► Art.jsx (illustrations)
   │
   └──► Console.jsx (question box) ──► engine.js (understands the question) ──► Views.jsx (answer)
```

All content comes from **one file, `src/data.js`**. Both the page sections and the console answers
read from it, so if you change something there, it changes everywhere.

When you run `npm run build`, Vite turns all of this into plain HTML/CSS/JS files in `dist/`.
Vercel builds the same thing on its servers when you publish.

## The question console (`src/components/Console.jsx` + `src/engine.js`)

1. On load it types "Who is Nikhil?" by itself so it is never empty.
2. When a question is asked, `engine.js` lowercases it and checks it against keyword lists, e.g.
   - **projects**: "project", "built", "build", "made"…
   - **experience**: "experience", "worked", "intern", "samsung", "vodafone"…
   - **skills**: "skill", "stack", "tech", "react", "python", "aws"…
   - **education**: "education", "degree", "cgpa", "certification", "nptel"…
   - **contact**: "contact", "touch", "reach", "email", "linkedin"…
   - specific projects: "knowyc", "asksql", "forgery"…
   - "drop", "delete", "truncate" → a "read-only console" message
3. The topic with the most keyword hits wins. Each topic has a fixed SQL query to display.
4. The console shows "parsing intent…", types the SQL, then shows the answer using the same
   components as the page (project card, timeline, skill groups, education list…).
5. If nothing matches, it shows the suggestion buttons.

It only keeps the last 8 questions, and it respects "reduce motion" (no typing animation).

## Animations (all subtle, all switch off with "reduce motion")

| Effect | Where | How |
| --- | --- | --- |
| Fade-in on scroll | Each section | `useReveal` in `App.jsx` adds the class `in` when a section enters the screen |
| Number count-up | Highlights strip | `CountUp` in `Effects.jsx` (keeps symbols like `%`, `+`, `₹`, `,`) |
| Progress line | Experience timeline | `useScrollProgress` in `Effects.jsx` |
| Active link | Top bar | `useActiveSection` in `Effects.jsx` |
| Illustration motion | Project pictures | CSS: dashed "data flow" lines, scanning beam, pulsing campus marker |

## Photos and experience images

- The portrait (`photo.jpg`) is shown as a 120 px circle (84 px on phones), cropped from the
  upper-middle (`object-position: 50% 38%` in `index.css`).
- Experience photos are shown in a **640:700 frame** (210 × 230 px on desktop). The Google photo is
  taller, so it's cropped using `focus: '50% 42%'` (from the top: 0% = top, 100% = bottom).
- Photos are hidden inside console answers to keep them compact.

## Link previews

`index.html` contains "Open Graph" tags so that sharing the link on LinkedIn/WhatsApp shows your name,
"Full Stack AI Engineer", a description and your portrait (`https://nikhil-sai-tata.vercel.app/photo.jpg`).
