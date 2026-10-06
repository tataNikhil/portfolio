# 7. Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| **Preview page is blank/white after editing `data.js`** | A missing quote, comma or bracket, or an apostrophe inside `'…'` | Press Ctrl + Z in the editor until it works again. Check the PowerShell/Git Bash window running `npm run dev`; it names the file and line. Run `npm run build` to see the error clearly. |
| **`cd: D:EssentialsPortfolio: No such file or directory`** | Backslashes in Git Bash | Use `cd /d/Essentials/Portfolio` in Git Bash, or use PowerShell with `cd D:\Essentials\Portfolio`. |
| **`npm error nospc` / "insufficient space"** | C: drive is full | Use the publish command with the `D:/npm-cache` settings (file 06), and free space on C:. |
| **`localhost:5173` won't load** | Preview isn't running | Start it with `npm run dev` (file 05, step 0). |
| **Port 5173 is in use** | Another preview is already running | Use the address Vite prints (e.g. `5174`), or close the old window. |
| **Live site doesn't show a change** | Not published, or browser cache | Publish (file 06), then hard refresh with **Ctrl + Shift + R**. |
| **Old resume still downloads on the live site** | Browser cached the PDF | Hard refresh, or open the site in an Incognito window. |
| **Vercel says "Logged out" / asks to log in** | Login expired | Run the login command in file 06. |
| **`npm run dev` says "vite is not recognized"** | Libraries missing (`node_modules` deleted) | Run `npm install` once (with C: full, first run `$env:npm_config_cache="D:/npm-cache"` in PowerShell). |
| **Photo looks stretched or badly cropped** | Wrong `width`/`height` in `data.js`, or `focus` | Update `width`/`height` to the real pixel size; adjust `focus` (file 05, recipe 3). |
| **Console doesn't understand a question** | No matching keyword | Add words to that topic's `words` list in `src/engine.js`. |

## Useful commands (run inside `D:\Essentials\Portfolio`)

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local preview at http://localhost:5173 |
| `npm run build` | Check for errors and build the production files into `dist/` |
| `npm run preview` | Preview the built `dist/` version locally |
| `npm run lint` | Check the code for mistakes |
| `npm install` | Re-download libraries (only needed if `node_modules` is missing) |

## Still stuck?

Undo your last edit (Ctrl + Z), save, and run `npm run build` again. The error message names the
file and line number; compare that line with a similar working line nearby.
