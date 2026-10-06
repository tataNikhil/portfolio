# Nikhil Sai Tata · Portfolio

An "ask me anything" portfolio: visitors type a question, it gets "translated" into SQL, and the answer
shows up as a query result. Everything below the console is a normal scrollable page for recruiters.

Built with React + Vite. No UI libraries.

**In case you want to use it: **

## Run it

```bash
npm install      # first time only
npm run dev      # open the URL it prints (http://localhost:5173)
npm run build    # production build into dist/
```

## Update your resume (no code needed)

The resume lives at `public/resumes/resume.pdf`. To update it, **copy your new PDF over that file and
keep the same file name**, then redeploy (on Vercel/Netlify/Render, just push to GitHub). Visitors
download it as `Nikhil_Sai_Tata_Resume.pdf`.

## Update your photo

Replace `public/photo.jpg` with a new photo (keep the same file name). A head-and-shoulders photo
works best; it is shown as a circle, cropped from the upper-middle of the image.

## Editing content

All text lives in **`src/data.js`**: profile, headline, resume, stats, projects, experience, skills and
education. Edit it there; the console answers and the page sections both read from it.

| File | What it is |
| --- | --- |
| `src/data.js` | All your content |
| `src/engine.js` | Which keywords map to which answer (add words here if a question isn't understood) |
| `src/components/Console.jsx` | The query console |
| `src/components/Views.jsx` | How each answer is displayed |
| `src/index.css` | All styling (colors are at the top) |

## Live site

I deployed it in vercel: **https://nikhil-sai-tata.vercel.app** (Vercel project `nikhil-sai-tata`).

To publish changes (resume, photo, text), run this from this folder in Git Bash. 

```bash
npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
```
Hope you like it
