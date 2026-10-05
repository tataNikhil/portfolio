# 2. Tech stack

| Part | Technology | Version | What it does here | Why |
| --- | --- | --- | --- | --- |
| UI | **React** | 19.2 | Builds the page out of components (console, project cards, timeline…) | Widely used, on your resume, easy to explain in interviews |
| Build tool | **Vite** | 8.3 | Runs the local preview (`npm run dev`) and makes the optimised production files (`npm run build`) | Very fast; the modern standard for React |
| Language | **JavaScript (ES2023) + JSX** | – | All logic | Same language as your KnowYC frontend |
| Styling | **Plain CSS** with CSS variables | – | One file: `src/index.css` | Full control, nothing extra to learn, small |
| Fonts | **Inter** (text), **JetBrains Mono** (code in the console) | Google Fonts | Clean, professional typography | Free, widely used |
| Illustrations | **Hand-written SVG** | – | The three project pictures, drawn in code | Sharp at any size, tiny, no image files |
| Linting | **oxlint** | 1.8x | Finds code mistakes (`npm run lint`) | Very fast |
| Runtime (your PC only) | **Node.js** | 22 | Needed only to run Vite/npm on your computer | Visitors never need it |
| Hosting | **Vercel** | free plan | Serves the site worldwide over HTTPS | Free, made for React/Vite sites |

## What it deliberately does NOT use

| Not used | Why |
| --- | --- |
| A backend / server | Nothing needs saving or secret logic; a static site is faster, free and safer |
| A database | All content lives in one file (`src/data.js`) |
| A real AI model | The console only needs to recognise a few kinds of question; a keyword matcher does that instantly and costs nothing |
| Tailwind / UI libraries | Plain CSS keeps the code small and fully under your control |
| TypeScript | Kept simple; JavaScript matches your other projects |

## Browser features used

- **IntersectionObserver:** fades sections in as you scroll, and highlights the current section in
  the top bar.
- **URL parameters + `history.replaceState`:** keeps `?role=ai` / `?role=software` in the address bar.
- **localStorage:** remembers the visitor's last role choice (optional; the site works without it).
- **requestAnimationFrame:** the number count-up animation and the experience progress line.

## Size

The whole site is about **265 KB of JavaScript (83 KB compressed)** plus CSS, three photos
(13 KB, 47 KB, 81 KB) and two resume PDFs (about 60 KB each).
