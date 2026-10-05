// A tiny keyword-based intent matcher. No network, no model: every question maps
// to a canned "SQL query" plus the view that renders its result.

const intents = [
  {
    id: 'destroy',
    words: ['drop', 'delete', 'truncate', 'rm -rf', 'destroy'],
    sql: "DROP TABLE nikhil; -- blocked",
    weight: 5,
  },
  {
    id: 'greet',
    words: ['hello', 'hi', 'hey', 'yo', 'namaste', 'sup'],
    sql: "SELECT greeting FROM manners WHERE polite = TRUE;",
    exact: true,
  },
  {
    id: 'help',
    words: ['help', 'what can', 'commands', 'options'],
    sql: "SELECT question FROM supported_queries;",
    exact: true,
  },
  {
    id: 'knowyc',
    words: ['knowyc', 'know your college', 'college platform', 'housing', 'marketplace', 'student platform'],
    sql: "SELECT * FROM projects WHERE slug = 'knowyc';",
    weight: 3,
  },
  {
    id: 'asksql',
    words: ['asksql', 'ask sql', 'nl to sql', 'nl2sql', 'text to sql', 'bedrock', 'natural language'],
    sql: "SELECT * FROM projects WHERE slug = 'asksql';",
    weight: 3,
  },
  {
    id: 'forgery',
    words: ['forgery', 'forensic', 'document', 'alteration', 'tamper', 'computer vision', 'ela'],
    sql: "SELECT * FROM projects WHERE slug = 'document-forensics';",
    weight: 3,
  },
  {
    id: 'hire',
    words: ['hire', 'why', 'should we', 'strength', 'highlight', 'best', 'impact', 'achievement', 'numbers', 'key'],
    sql: 'SELECT metric, value FROM achievements\nORDER BY impact DESC LIMIT 6;',
  },
  {
    id: 'projects',
    words: ['project', 'built', 'build', 'made', 'make', 'portfolio', 'work on', 'apps', 'shipped'],
    sql: 'SELECT name, kind, stack, impact\nFROM projects ORDER BY impact DESC;',
  },
  {
    id: 'experience',
    words: ['experience', 'worked', 'intern', 'job', 'samsung', 'vodafone', 'company', 'companies', 'career', 'roles'],
    sql: 'SELECT company, role, period, highlights\nFROM experience ORDER BY start_date DESC;',
  },
  {
    id: 'skills',
    words: ['skill', 'stack', 'tech', 'know', 'language', 'tools', 'framework', 'node', 'react', 'python', 'aws', 'express'],
    sql: 'SELECT category, GROUP_CONCAT(skill)\nFROM skills GROUP BY category;',
  },
  {
    id: 'education',
    words: ['education', 'degree', 'certification', 'certificate', 'certified', 'postman', 'nptel', 'iot', 'internet of things', 'cgpa', 'gpa', 'university', 'study', 'studied', 'graduate', 'b.tech', 'btech'],
    sql: "SELECT degree, school, cgpa FROM education\nWHERE person = 'nikhil';",
  },
  {
    id: 'leadership',
    words: ['leader', 'google', 'ambassador', 'workshop', 'teach', 'community'],
    sql: "SELECT * FROM experience WHERE company = 'Google';",
    weight: 2,
  },
  {
    id: 'resume',
    words: ['resume', 'cv', 'pdf', 'download'],
    sql: "SELECT file FROM documents WHERE type = 'resume';",
    weight: 2,
  },
  {
    id: 'contact',
    words: ['contact', 'touch', 'reach', 'email', 'mail', 'linkedin', 'github', 'talk', 'connect', 'call'],
    sql: 'SELECT channel, handle FROM contact\nWHERE public = TRUE;',
    weight: 2,
  },
  {
    id: 'about',
    words: ['who', 'about', 'nikhil', 'yourself', 'intro', 'summary', 'bio', 'tata'],
    sql: "SELECT name, title, location, summary\nFROM people WHERE handle = 'nikhiltata206';",
  },
]

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function resolve(question) {
  const q = ` ${question.toLowerCase().trim()} `
  let best = null
  let bestScore = 0
  for (const intent of intents) {
    let score = 0
    for (const w of intent.words) {
      const hit = intent.exact
        ? new RegExp(`(^|[^a-z])${escape(w)}([^a-z]|$)`).test(q)
        : q.includes(w)
      if (hit) score += intent.weight ?? 1
    }
    if (score > bestScore) {
      best = intent
      bestScore = score
    }
  }
  if (!best) {
    return {
      id: 'unknown',
      sql: `SELECT * FROM knowledge\nWHERE topic LIKE '%${question.slice(0, 24).replace(/'/g, "''")}%';`,
    }
  }
  return { id: best.id, sql: best.sql }
}

export const suggestions = [
  'Who is Nikhil?',
  'What has Nikhil built?',
  'Where has Nikhil worked?',
  'What is the tech stack?',
  'What are the key achievements?',
  'How can I get in touch?',
]
