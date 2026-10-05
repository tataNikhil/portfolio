# Nikhil Sai Tata · Portfolio

An "ask me anything" portfolio: visitors type a question, it gets "translated" into SQL, and the answer
shows up as a query result. Everything below the console is a normal scrollable page for recruiters.

Built with React + Vite. No UI libraries.

## Run it

```bash
npm install      # first time only
npm run dev      # open the URL it prints (http://localhost:5173)
npm run build    # production build into dist/
```

## Update your resumes (no code needed)

You have two resumes, one per role. They live here:

| Role | File to replace |
| --- | --- |
| AI Engineer | `public/resumes/ai-engineer.pdf` |
| Software Engineer | `public/resumes/software-engineer.pdf` |

To update one: **copy your new PDF over the old file and keep the same file name.** Then redeploy
(on Vercel/Netlify/Render, just push to GitHub). Visitors download it as
`Nikhil_Sai_Tata_AI_Engineer.pdf` / `Nikhil_Sai_Tata_Software_Engineer.pdf`.

## Update your photo

Replace `public/photo.jpg` with a new photo (keep the same file name). A head-and-shoulders photo
works best; it is shown as a circle, cropped from the upper-middle of the image.

## Sharing the right version with a recruiter

The "AI Engineer / Software Engineer" switch changes the headline, which project is shown first, and
which resume is downloaded. The choice is saved in the link, so you can send:

- `https://your-site/?role=ai` for AI / ML roles
- `https://your-site/?role=software` for software / full-stack roles

## Editing content

All text lives in **`src/data.js`**: profile, the two roles, stats, projects, experience, skills and
education. Edit it there; the console answers and the page sections both read from it.

| File | What it is |
| --- | --- |
| `src/data.js` | All your content |
| `src/engine.js` | Which keywords map to which answer (add words here if a question isn't understood) |
| `src/role.jsx` | The AI / Software switch |
| `src/components/Console.jsx` | The query console |
| `src/components/Views.jsx` | How each answer is displayed |
| `src/index.css` | All styling (colors are at the top) |

## Live site

**https://nikhil-sai-tata.vercel.app** (Vercel project `nikhil-sai-tata`).

To publish changes (resume, photo, text), run this from this folder in Git Bash. The extra settings
keep Vercel's files on the D: drive because C: is full:

```bash
npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
```

## Deploy for free (alternative: via GitHub)

Push this folder to a GitHub repo, then import it on **Vercel** or **Netlify** (framework: Vite,
build command `npm run build`, output folder `dist`). Every push redeploys automatically.
