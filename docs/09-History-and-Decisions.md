# 9. History and decisions (5 October 2026)

How the site reached its current form, and why. Useful if you wonder "why is it like this?".

## Goal

An innovative but **professional and clean** portfolio positioning Nikhil as a single profile:
**Full Stack AI Engineer**.

## Design iterations

| # | Version | Outcome |
| --- | --- | --- |
| 1 | Dark "query console" theme, bright lime accent, big serif name | Concept liked; look too unusual |
| 2 | "Richer": film grain, spinning badge, rainbow gradients, 3D tilt, scrolling skills strip, jokey console messages | Too flashy: "it has to be professional" |
| 3 | Same dark theme, toned down: one muted teal accent, formal wording | Still felt "weird" |
| 4 | **Current:** light theme, Inter font, navy-blue accent like the resume headings, plain section titles, conventional layout. The console and project illustrations are kept as the distinctive touch. | ✅ Accepted |

**Lesson:** richness should come from content (illustrations, clear structure, real numbers), not
effects.

## Content decisions

- **One positioning (6 October 2026):** the earlier AI Engineer / Software Engineer switch was removed
  so recruiters see one coherent profile, Full Stack AI Engineer, with one resume (the Software
  Engineer resume, served as `resume.pdf`).
- **Skills added beyond the original resume:** Node.js, Express.js and the rest of the KnowYC stack,
  because you actually used them.
- **Test-count claims removed** (405 tests, 357 API + 48 Playwright, WCAG/axe-core) to match the
  updated resumes, which no longer mention them.
- **AskSQL model wording:** "Anthropic Claude" ("Haiku 4.5" removed).
- **KnowYC link:** https://knowyc.org.
- **Phone number** not shown on the page (it's still inside the resume PDF).
- **Neutral wording about you** in the console ("What has Nikhil built?") instead of he/his.

## Photos

| Photo | Notes |
| --- | --- |
| Portrait (`photo.jpg`) | From `D:\Essentials\PSPhoto.jpg`, shown as a circle, nudged up to reduce space above the head |
| Samsung (`samsung-campus.jpg`) | From `D:\Essentials\IMG_20241025_001347.jpg`, resized 1.5 MB → 47 KB |
| Google Student Ambassador (`gsa-workshop.jpg`) | Final choice: the solo photo with the Gemini laptop (`WhatsApp Image 2026-10-05 at 20.43.25.jpeg`), resized to 81 KB, shown in the same frame as the Samsung photo |

## Source files

| What | Original location |
| --- | --- |
| Resume | `D:\Essentials\NIkhil_Resume.pdf` |
| KnowYC documentation | `D:\temp trash\proj-Doc` |
| NPTEL certificate | https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs44/Course/NPTEL25CS44S24330473204365027.pdf |

## Open items

- **Project years:** Document Forensics is stored as 2025 and KnowYC as 2026. These were guesses, and
  the years aren't currently displayed. Confirm or correct them in `data.js`.
- **Postman certificate link:** no "View certificate" link yet (needs the URL).
- **C: drive is full:** free up space (turning off hibernation with `powercfg /h off` in an
  administrator Command Prompt frees about 6.3 GB).
