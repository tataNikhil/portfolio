# Portfolio website: complete guide

Everything about your portfolio website: what it is, how it's built, and how to change and republish it.

## Quick facts

| | |
| --- | --- |
| **Live site** | https://nikhil-sai-tata.vercel.app |
| **AI Engineer view** | https://nikhil-sai-tata.vercel.app/?role=ai |
| **Software Engineer view** | https://nikhil-sai-tata.vercel.app/?role=software |
| **Code folder** | `D:\Essentials\Portfolio` |
| **Hosting** | Vercel (free plan), project name `nikhil-sai-tata`, account `nikhiltata1245-8377` |
| **Built with** | React 19 + Vite 8, plain CSS, no backend, no database |
| **Monthly cost** | ₹0 |
| **Created** | 5 October 2026 |

## Read in this order

| # | File | What you'll learn |
| --- | --- | --- |
| 1 | [01-Overview.md](01-Overview.md) | What the site is, every section, and the two-role idea |
| 2 | [02-Tech-Stack.md](02-Tech-Stack.md) | Every technology used and why |
| 3 | [03-Files-and-Folders.md](03-Files-and-Folders.md) | What every file in the project does |
| 4 | [04-How-It-Works.md](04-How-It-Works.md) | How the role switch, the question console and the animations work |
| 5 | [05-How-To-Change-Content.md](05-How-To-Change-Content.md) | **Step-by-step recipes for changing anything** (resume, photo, text, projects, skills…) |
| 6 | [06-Publishing-and-Hosting.md](06-Publishing-and-Hosting.md) | How to put your changes online, plus domains and GitHub |
| 7 | [07-Troubleshooting.md](07-Troubleshooting.md) | What to do when something goes wrong |
| 8 | [08-Interview-Talking-Points.md](08-Interview-Talking-Points.md) | How to explain this project in an interview |
| 9 | [09-History-and-Decisions.md](09-History-and-Decisions.md) | Why the site looks the way it does |

## The 3 things you'll do most often

1. **Replace a resume:** copy the new PDF over `D:\Essentials\Portfolio\public\resumes\ai-engineer.pdf` or
   `software-engineer.pdf` (same name), then **publish** (file 06).
2. **Change some text:** edit `D:\Essentials\Portfolio\src\data.js`, check it locally, then **publish**.
3. **Publish:** open Git Bash in `D:\Essentials\Portfolio` and run:
   ```bash
   npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
   ```

> Nothing changes on the live site until you publish. Editing files only changes your computer's copy.

## Never share

- The file `D:\Essentials\Portfolio\.env.local` (it contains a private Vercel access key).
- The folder `D:\vercel-config` (it holds your Vercel login).
