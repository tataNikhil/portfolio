# Portfolio website: my notes

How my portfolio site is built, and how I change and republish it.

## Quick facts

| | |
| --- | --- |
| **Live site** | https://nikhil-sai-tata.vercel.app |
| **Code folder** | `D:\Essentials\Portfolio` |
| **Hosting** | Vercel (free plan), project name `nikhil-sai-tata` |
| **Built with** | React 19 + Vite 8, plain CSS, no backend, no database |
| **Monthly cost** | ₹0 |
| **Created** | October 2026 |

## Contents

| # | File | What's in it |
| --- | --- | --- |
| 1 | [01-Overview.md](01-Overview.md) | What the site is and every section on it |
| 2 | [02-Tech-Stack.md](02-Tech-Stack.md) | The technologies I used and why |
| 3 | [03-Files-and-Folders.md](03-Files-and-Folders.md) | What every file in the project does |
| 4 | [04-How-It-Works.md](04-How-It-Works.md) | How the question console and the animations work |
| 5 | [05-How-To-Change-Content.md](05-How-To-Change-Content.md) | Step-by-step recipes for changing content (resume, photos, text, projects, skills…) |
| 6 | [06-Publishing-and-Hosting.md](06-Publishing-and-Hosting.md) | How I publish changes, plus domains and GitHub |
| 7 | [07-Troubleshooting.md](07-Troubleshooting.md) | Fixes for common problems |
| 8 | [08-Interview-Talking-Points.md](08-Interview-Talking-Points.md) | How I explain this project in interviews |
| 9 | [09-Design-Decisions.md](09-Design-Decisions.md) | Why the site looks and reads the way it does |

## Most common tasks

1. **Replace the resume:** copy the new PDF over `D:\Essentials\Portfolio\public\resumes\resume.pdf`
   (same name), then publish (file 06).
2. **Change some text:** edit `src/data.js`, check it locally, then publish.
3. **Publish:** open Git Bash in `D:\Essentials\Portfolio` and run:
   ```bash
   npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
   ```

> Nothing changes on the live site until it's published. Editing files only changes the local copy.

## Keep private

- `.env.local` (contains a private Vercel access key; already excluded by `.gitignore`).
- `D:\vercel-config` (holds the Vercel login).
