# 9. Design decisions

Why the site looks and reads the way it does.

## Goal

A professional, clean portfolio that presents me as one profile, **Full Stack AI Engineer**, with
one distinctive touch that ties back to my own work.

## Look and feel

- **Light theme, Inter font, navy-blue accent** that matches the headings on my resume.
- **Conventional layout and plain section titles**, so recruiters find what they need quickly.
- **The question console and the hand-drawn project illustrations** are the distinctive parts.
  Earlier versions tried a dark theme, brighter accents and more effects (film grain, 3D tilt,
  gradients); I dropped them because they distracted from the content.
- **Richness comes from content** (illustrations, clear structure, real numbers), not from effects.

## Content decisions

- **One positioning:** one headline, one summary and one resume, so the site reads as a single,
  coherent profile.
- **Skills match real work:** the backend and frontend skills come from the KnowYC stack, which I
  built and run in production.
- **Only claims that are on my resume:** numbers on the site match the resume, so there are no
  mismatches.
- **Phone number** is not shown on the page (it's inside the resume PDF only).
- **Neutral wording** in the console ("What has Nikhil built?") instead of he/his.

## Photos

| Photo | Notes |
| --- | --- |
| Portrait (`photo.jpg`) | Shown as a circle, cropped from the upper-middle |
| Samsung (`samsung-campus.jpg`) | Resized from 1.5 MB to 47 KB |
| Google Student Ambassador (`gsa-workshop.jpg`) | Resized to 81 KB, shown in the same frame as the Samsung photo |

## To do

- Confirm the stored project years in `data.js` (not currently displayed).
- Add a "View certificate" link for the Postman certificate.
