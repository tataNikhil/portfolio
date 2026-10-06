# 8. Interview talking points

## 30-second version

"My portfolio is a React and Vite single-page app with plain CSS, hosted on Vercel for free. It
presents me as a Full Stack AI Engineer: I build LLM and ML systems and the full-stack products that
put them in front of users. It also has a small 'ask about my work' console inspired by my AskSQL
project: visitors type a question, see a SQL query, and get an answer. That console runs entirely in
the browser as a keyword-based intent matcher, so it's instant and costs nothing."

## Likely questions

**Why React + Vite and not plain HTML?**
Components let the page sections and the console answers reuse the same building blocks (project
card, timeline, skills), and all content lives in one data file. Vite gives instant reloads and an
optimised production build.

**Is the console real AI?**
No, and I say so honestly. It's a deterministic intent matcher: it scores the question against
keyword lists per topic and renders a pre-defined SQL query and the matching component. For a
portfolio that's the right trade-off: instant, free, and nothing to break or abuse. AskSQL itself is
the real LLM version (foundation models on Amazon Bedrock, with RAG over the schema).

**How did you handle performance?**
No UI framework, plain CSS, SVG illustrations instead of large images, photos resized for the web
(13–81 KB), images lazy-loaded below the fold, and IntersectionObserver for scroll effects instead of
scroll listeners where possible.

**Accessibility?**
Semantic headings and landmarks, a "skip to content" link, alt text on photos, visible focus
outlines, `aria-live` on the console log, and every animation disabled under
`prefers-reduced-motion`.

**How is it deployed?**
Vercel builds the Vite project and serves it as static files over a CDN with HTTPS. Deploys are one
command; it can also be connected to GitHub for automatic deploys on every push.

**What would you add next?**
A custom domain, GitHub-based CI deploys, and possibly a real LLM-backed console (a small serverless
function calling an LLM with the portfolio data as context), with rate limiting.
