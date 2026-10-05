# 5. How to change content (step-by-step)

Every change follows the same 3 steps:

1. **Edit** a file (or replace a PDF/photo).
2. **Check** it on your computer (preview).
3. **Publish** it so the live site updates (file 06).

---

## 0. Before you start: opening the preview

The preview shows your local copy at `http://localhost:5173` and refreshes automatically when you
save a file.

**Option A: PowerShell**
1. Press **Start**, type **PowerShell**, open it.
2. Run:
   ```powershell
   cd D:\Essentials\Portfolio
   npm run dev
   ```
3. Open **http://localhost:5173** in your browser.
4. Keep that window open while editing. Press **Ctrl + C** in it to stop.

**Option B: Git Bash**
```bash
cd /d/Essentials/Portfolio
npm run dev
```
(In Git Bash use forward slashes. `D:\Essentials\...` does **not** work there.)

**Editing files:** open them in **VS Code** (recommended) or Notepad. In VS Code: *File → Open Folder →
`D:\Essentials\Portfolio`*.

### Rules when editing `src/data.js`

- Text goes inside quotes: `'like this'`.
- Keep the **commas** at the end of lines and between items.
- If your text contains an apostrophe, use the curly one (`’`) or write `\'`.
  - ✅ `'I’m open to roles'` ✅ `'I\'m open to roles'` ❌ `'I'm open to roles'`
- Lists use square brackets: `['React', 'Node.js', 'MySQL']`.
- After saving, look at the preview. If the page goes blank, you probably broke a quote or comma;
  press **Ctrl + Z** to undo and try again (see file 07).

---

## 1. Replace a resume

1. Export your new resume as PDF.
2. Copy it into `D:\Essentials\Portfolio\public\resumes\` and **rename it to exactly**:
   - `ai-engineer.pdf` for the AI Engineer resume, or
   - `software-engineer.pdf` for the Software Engineer resume.
   Replace the old file when Windows asks.
3. Preview: choose the role, click **Download … resume**, and check it's the new one.
4. **Publish** (file 06).

The file visitors download is named `Nikhil_Sai_Tata_AI_Engineer.pdf` /
`Nikhil_Sai_Tata_Software_Engineer.pdf`. To change those names, edit `resumeName` in `roles` in
`src/data.js`.

> Also: if something on the resume changes (numbers, skills, wording), update the website to match.
> Recruiters notice mismatches.

---

## 2. Replace your portrait (top of page)

1. Use a head-and-shoulders photo with a plain background, ideally at least 400 × 400 px.
2. Save it as `D:\Essentials\Portfolio\public\photo.jpg` (replace the old one).
3. Preview. If your head sits too high or low in the circle, open `src/index.css`, search for
   `object-position: 50% 38%` (in `.avatar`) and change the second number:
   - smaller (e.g. `30%`) → shows more of the top of the image,
   - bigger (e.g. `45%`) → shows more of the lower part (your head moves up).
4. **Publish.**

---

## 3. Replace an experience photo (Samsung / Google)

1. Make the photo web-sized (under ~200 KB, about 700 px wide). Easy ways: Windows **Photos → Resize**,
   or squoosh.app in a browser.
2. Save it over `public/samsung-campus.jpg` or `public/gsa-workshop.jpg`.
3. In `src/data.js`, find that experience's `photo: { … }` and update:
   - `width` and `height`: the new image's pixel size (right-click → Properties → Details),
   - `alt`: a short description of the photo (for screen readers),
   - `caption`: the text shown under it,
   - `focus` (optional): which part to keep when cropping, e.g. `'50% 40%'`.
4. Preview, then **publish.**

**Add a photo to an experience that has none** (e.g. Vodafone): copy a `photo: { … },` block from
Samsung into that entry, change `src` to your new file name (e.g. `'/vodafone.jpg'`) and put the
file in `public/`.

**Remove a photo:** delete the whole `photo: { … },` block from that entry.

---

## 4. Change your name, email, LinkedIn, GitHub, location

Edit `profile` at the top of `src/data.js`:

```js
export const profile = {
  name: 'Nikhil Sai Tata',
  ...
  location: 'Hyderabad, India',
  email: 'nikhiltata1245@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikhiltata206',
  github: 'https://github.com/tataNikhil',
  summary: '…',   // shown in the console's "Who is Nikhil?" answer
}
```

Also update these, which are typed directly in other files:

| Text | File | Search for |
| --- | --- | --- |
| Name in the top bar & big heading | `src/App.jsx` | `Nikhil Sai Tata` |
| Contact list labels like `linkedin.com/in/nikhiltata206` | `src/App.jsx` | `const contacts` |
| Browser tab title & link preview | `index.html` | `<title>` and `og:` lines |

---

## 5. Change the role headlines, summaries, focus lines

Edit `roles` in `src/data.js`:

| Field | Where it shows |
| --- | --- |
| `label` | Card title ("AI Engineer") and in buttons ("Download AI Engineer resume") |
| `focus` | Small grey line in the card ("LLMs · RAG · ML"). Keep it short so it fits. |
| `headline` | Blue line under your name |
| `tagline` | The summary paragraph under the headline |
| `projectOrder` | Which project appears first for this role (use project `id`s) |

The text "View this portfolio as" and "Summary, project order and resume are tailored for…" is in
`src/role.jsx`.

---

## 6. Change the highlight numbers (grey strip)

Edit `stats` in `src/data.js`. Each item:

```js
{ value: '149', label: 'REST endpoints shipped', note: 'KnowYC API' },
```

- `value` counts up from 0 if it contains a number (`'95%+'`, `'13,091'`, `'₹0'` all work).
- Keep **6 items** for the best layout (it shows 6 across on desktop, 3 on tablets, 2 on phones).

---

## 7. Edit a project

Find the project in `projects` in `src/data.js` (`id: 'knowyc'`, `'asksql'` or `'forgery'`):

| Field | What it is |
| --- | --- |
| `name`, `full` | Title and subtitle |
| `kind` | Small blue label above the title |
| `year` | Year (stored; not currently shown) |
| `blurb` | Description paragraph |
| `highlights` | Bullet points (a list of strings) |
| `metrics` | Big numbers, e.g. `['accuracy', '95%+']` |
| `stack` | Tech tags |
| `links` | Buttons, e.g. `{ label: 'Live site', href: 'https://knowyc.org' }`. Use `[]` for none. |
| `flow` | Short step chips shown only when a project has no illustration |

**Add a GitHub link to AskSQL:** change `links: [],` to
`links: [{ label: 'GitHub', href: 'https://github.com/…' }],`

## 8. Add a new project

1. In `src/data.js`, copy a whole project block `{ id: …, … },` and paste it inside `projects`.
2. Give it a **new unique `id`** (lowercase, no spaces, e.g. `'chatbot'`) and fill in the fields.
3. **Important:** add the new `id` to **both** `projectOrder` lists in `roles`, or it won't appear:
   ```js
   projectOrder: ['asksql', 'forgery', 'knowyc', 'chatbot'],
   ```
   (and never list an `id` that doesn't exist, or the page will go blank).
4. New projects have no custom illustration; they show the `flow` chips instead. That looks fine.
   A custom illustration can be added as a new SVG component in `src/components/Art.jsx` and
   registered in the `artFor` map at the bottom of that file, using the project's `id`.
5. *(Optional)* to make the console answer questions about it, add a topic to `intents` in
   `src/engine.js` with `id` equal to the project's `id`, and add that `id` next to
   `case 'knowyc':` in the `Result` switch in `src/components/Console.jsx`.

**Remove a project:** delete its block **and** its `id` from both `projectOrder` lists.

---

## 9. Edit experience

Edit `experience` in `src/data.js`. Each entry:

```js
{
  company: 'Samsung Innovation Campus',
  role: 'Coding & Programming Intern',
  period: 'Sep 2024 – Oct 2024',
  focus: 'Built AskSQL',                 // small blue pill next to the company
  photo: { … },                          // optional, see recipe 3
  points: [ 'bullet 1', 'bullet 2' ],
},
```

- **Add a job/internship:** copy an entry, paste it at the right place (list is newest-first or in
  the order you want), edit it.
- The round letter on the timeline is the first letter of `company` automatically.
- The console's "Where has Nikhil worked?" uses the same list.

---

## 10. Edit skills

Edit `skills` in `src/data.js`:

```js
{ table: 'backend', label: 'Backend', items: ['Node.js', 'Express.js', …] },
```

- Add/remove a skill: edit the `items` list.
- Add a new group: copy a line, give it a new `table` (any unique word) and `label`.
- Only list skills you can talk about in an interview.

---

## 11. Edit education

Edit `education.entries` in `src/data.js`:

```js
{
  school: 'Narayana Junior College',
  place: 'Hyderabad',
  degree: 'Intermediate (Class XII), MPC',
  period: '2020 – 2022',
  score: '95.6%',
  scoreLabel: 'Percentage',
},
```

`core` is the "Core coursework" tags list.

The quick fact **"B.Tech CS · CGPA 8.44"** in the hero is typed in `src/App.jsx` (search `CGPA`);
update it too if your CGPA changes.

## 12. Add a certification

Add to `education.certifications` in `src/data.js`:

```js
{
  name: 'Certificate name',
  issuer: 'Who issued it',
  date: 'Mon YYYY',
  detail: 'Score or grade',                   // optional
  url: 'https://link-to-certificate.pdf',     // optional → shows "View certificate ↗"
},
```

Example: to give the Postman certificate a link, add `url: 'https://…'` to its line.

---

## 13. Change hero / contact / footer wording

In `src/App.jsx`:

| Text | Search for |
| --- | --- |
| Status pill | `Open to AI` |
| Quick facts line (location · CGPA · LinkedIn · GitHub) | `className="facts"` |
| Section titles ("Selected projects", "Technical skills"…) | `<SectionHead` |
| "Production-grade work across…" | `intro=` |
| Contact heading and paragraph | `Let’s work together` |
| Footer | `className="footer"` |
| Top bar links | `const NAV` |

---

## 14. Change what the console understands

Open `src/engine.js`:

- Each topic has a `words` list. Add words to make more questions match, e.g. add `'internship'` to
  the **experience** topic.
- `suggestions` at the bottom = the question buttons under the console. The first one is typed
  automatically on page load.
- `sql` = the query shown for that topic (display only).

---

## 15. Change colours or fonts

Open `src/index.css`. At the top (`:root { … }`):

| Variable | Now | Used for |
| --- | --- | --- |
| `--accent` | `#1d4ed8` (navy-blue) | Buttons, links, headlines, highlights |
| `--accent-hover` | `#1e3a8a` | Button hover |
| `--accent-soft` | `#eef3ff` | Light-blue backgrounds (role box, pills) |
| `--text` | `#0f172a` | Main text |
| `--text-2` | `#334155` | Paragraph text |
| `--muted` | `#64748b` | Grey text |
| `--bg-alt` | `#f6f8fb` | Grey strips and panels |

Fonts are loaded in `index.html` (Google Fonts link) and set in `--sans` / `--mono`.

---

## 16. Check everything before publishing

In PowerShell or Git Bash, inside `D:\Essentials\Portfolio`:

```bash
npm run build
```

- `✓ built in …` means everything is OK.
- A red error tells you the file and line with a problem (usually a missing quote or comma).

Then **publish** (file 06).
