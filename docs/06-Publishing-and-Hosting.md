# 6. Publishing and hosting

## Where it's hosted

| | |
| --- | --- |
| Host | **Vercel** (free "Hobby" plan) |
| Account | `nikhiltata1245-8377` (log in at https://vercel.com) |
| Project | `nikhil-sai-tata` |
| Live address | https://nikhil-sai-tata.vercel.app |
| HTTPS | Automatic |
| Cost | ₹0 |

Your local folder is linked to that project through the hidden `.vercel` folder inside
`D:\Essentials\Portfolio`. Don't delete it.

## Publishing changes (do this after every change)

Editing files only changes **your computer's copy**. To update the live site:

### Using Git Bash (recommended)

Right-click inside `D:\Essentials\Portfolio` → **Open Git Bash here**, then run:

```bash
npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
```

### Using PowerShell

```powershell
cd D:\Essentials\Portfolio
$env:npm_config_cache="D:/npm-cache"; $env:TMP="D:/tmp"; $env:TEMP="D:/tmp"
npx -y vercel@latest deploy --prod --yes --global-config D:/vercel-config
```

### What success looks like

```
Production      https://nikhil-sai-tata-xxxxxx-portfolio-a3ea.vercel.app
Aliased         https://nikhil-sai-tata.vercel.app
```

It takes about 30–60 seconds. Then open https://nikhil-sai-tata.vercel.app and press
**Ctrl + Shift + R** (hard refresh) to see the update. Resumes and photos may need a hard refresh too.

### Why the extra settings?

Your **C: drive is full**, so the command tells npm and Vercel to keep their downloads
(`D:\npm-cache`, `D:\tmp`) and your login (`D:\vercel-config`) on the D: drive. If you free up space
on C: later, the plain command `npx vercel deploy --prod` will also work (after a one-time
`npx vercel login`).

## If you're asked to log in again

```bash
npm_config_cache=D:/npm-cache TMP=D:/tmp TEMP=D:/tmp npx -y vercel@latest login --global-config D:/vercel-config
```

It shows a link with a code. Open it, sign in to Vercel, and approve. Then publish again.

## Undo a bad publish

1. Go to https://vercel.com → project **nikhil-sai-tata** → **Deployments**.
2. Find the last good one → **⋯** → **Promote to Production** (or "Instant Rollback").

## Optional: your own domain (e.g. nikhilsaitata.com)

1. Buy the domain (GoDaddy, Namecheap, Hostinger, Cloudflare; about ₹800–1,000 per year for `.com`).
2. Vercel → project → **Settings → Domains → Add** → type the domain.
3. Vercel shows 1–2 DNS records. Add them in your domain provider's DNS settings.
4. Wait 5 minutes to a few hours. HTTPS is set up automatically.
5. Update the `og:url` and `og:image` lines in `index.html` to the new domain, then publish.

## Optional: automatic publishing with GitHub

Instead of running the publish command, you can make every change go live automatically:

1. Create a GitHub repository (for example `portfolio`) and push this folder to it.
   `.env.local` and `.vercel` are already excluded by `.gitignore`, so they won't be uploaded.
2. Vercel → project → **Settings → Git → Connect Git Repository** → choose the repository.
3. From then on, every `git push` to the `main` branch publishes automatically.

## Privacy reminder

Everything in `public/` is public: the resume PDF (which includes your **phone number**) and the
three photos. If you ever want the phone number off the website, upload a resume version without it.
