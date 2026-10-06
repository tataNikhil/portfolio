# 1. Overview

## What is it?

My personal portfolio website. It presents me as a **Full Stack AI Engineer**: I build LLM-powered
products end to end, from RAG pipelines on AWS to the APIs, databases and React front ends that ship
them.

It is a clean, single-page site with one distinctive feature: an **"Ask about my work" console** where
visitors type a question in plain English and see it turned into a SQL query and an answer. It's a nod
to my AskSQL project.

The site has one headline, one summary and one resume (`public/resumes/resume.pdf`, downloaded as
`Nikhil_Sai_Tata_Resume.pdf`).

## Every section, top to bottom

| Section | What it shows |
| --- | --- |
| **Top bar** | "NT" logo + name, links (Projects, Experience, Skills, Education, Contact) and a blue **Resume** button. The link for the current section turns blue. On phones the links sit in a scrollable row. |
| **Hero (top)** | Status pill ("Open to Full Stack AI Engineer roles · Graduating 2026"), round portrait, name, headline, summary, **View projects** and **Download resume** buttons, quick facts (location, CGPA, LinkedIn, GitHub). On the right: the question console. |
| **Highlights strip** | Six numbers that count up when they appear: 149 REST endpoints, 29-table schema, 95%+ NL→SQL accuracy, 500+ students trained, 13,091 colleges, ₹0 hosting. |
| **Selected projects** | AskSQL, KnowYC and Document Forensics. Each has a custom illustration, description, key numbers, bullet points, tech tags and links (KnowYC → knowyc.org, Forensics → GitHub). |
| **Work experience & leadership** | Samsung Innovation Campus (with photo), Vodafone Idea, Google Student Ambassador (with photo). A blue line fills in on scroll. |
| **Technical skills** | Seven groups: AI & ML, Backend, Frontend, Data & Databases, Cloud & DevOps, Tools & Practices, Languages. |
| **Education & certifications** | B.Tech (CGPA 8.44), Intermediate (95.6%), SSC (CGPA 10), core coursework, NPTEL IoT certificate (with link) and Postman Student Expert. |
| **Contact** | "Let's work together" card with an **Email me** button and links to Email, LinkedIn, GitHub and the resume. |
| **Footer** | © year, name, location. |

## The question console

Visitors can type questions or click the suggestion buttons:

- "Who is Nikhil?"
- "What has Nikhil built?"
- "Where has Nikhil worked?"
- "What is the tech stack?"
- "What are the key achievements?"
- "How can I get in touch?"

Each answer shows a short "thinking" line, a SQL query typed out, and then the answer (cards, a table,
the timeline, and so on). Typing something like "drop table" shows a polite "read-only" message.

No real AI model or database is involved. It is a small keyword matcher running in the visitor's
browser (see file 04), which keeps it instant, free and impossible to break.

## Works on

Desktop, tablet and phone, with no sideways scrolling at phone width (about 390 px). It respects the
"reduce motion" accessibility setting (animations switch off).
