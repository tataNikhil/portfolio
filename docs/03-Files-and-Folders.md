# 3. Files and folders

Project folder: `D:\Essentials\Portfolio`

```
Portfolio/
├── index.html              Page title, link-preview text/image, fonts
├── package.json            Project name, commands (dev/build/lint), library versions
├── package-lock.json       Exact library versions (don't edit by hand)
├── vite.config.js          Vite settings (React plugin). Rarely touched.
├── .oxlintrc.json          Linter settings
├── .gitignore              Files Git should ignore
├── .env.local              ⚠ PRIVATE Vercel key, created by Vercel. Never share or upload.
├── .vercel/                Links this folder to the Vercel project. Don't delete.
├── README.md               Short developer notes
├── public/                 Files served exactly as they are
│   ├── favicon.svg         Browser-tab icon ("NT")
│   ├── photo.jpg           Your round portrait at the top
│   ├── samsung-campus.jpg  Photo in the Samsung internship entry
│   ├── gsa-workshop.jpg    Photo in the Google Student Ambassador entry
│   └── resumes/
│       └── resume.pdf              Resume
├── src/                    The source code
│   ├── data.js             ★ ALL YOUR CONTENT (text, numbers, projects, skills, education…)
│   ├── App.jsx             Page layout: top bar, hero, sections, contact, footer
│   ├── engine.js           The console's "brain": which words map to which answer
│   ├── index.css           ALL the styling (colours, fonts, spacing, mobile layout)
│   ├── main.jsx            Starts the React app (never needs changing)
│   └── components/
│       ├── Console.jsx     The "Ask about my work" console
│       ├── Views.jsx       How each piece of content is displayed (projects, timeline, skills…)
│       ├── Art.jsx         The three project illustrations (SVG drawings)
│       └── Effects.jsx     Small helpers: number count-up, scroll progress, active section
├── node_modules/           Downloaded libraries (auto-created by `npm install`; never edit)
└── dist/                   Built website (auto-created by `npm run build`; never edit)
```

## Which file do I open?

| I want to change… | Open |
| --- | --- |
| Any text, number, project, skill, school, certificate, link, email | `src/data.js` |
| A resume | replace the PDF in `public/resumes/` |
| A photo | replace the JPG in `public/` (and see file 05 for sizes) |
| The status pill, hero facts line, contact paragraph, footer, section titles | `src/App.jsx` |
| What words the console understands | `src/engine.js` |
| Colours, fonts, spacing, sizes | `src/index.css` |
| Browser tab title / link-preview text and image | `index.html` |
| Project illustrations | `src/components/Art.jsx` (advanced) |

## Other folders outside the project

| Folder | What it is |
| --- | --- |
| `D:\vercel-config` | Your Vercel login for the command line. Private. |
| `D:\npm-cache`, `D:\tmp` | Download cache and temp files used when publishing, because C: is full. Safe to delete; they'll be re-created. |
