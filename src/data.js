export const profile = {
  name: 'Nikhil Sai Tata',
  first: 'Nikhil',
  title: 'Full Stack AI Engineer',
  headline: 'Full Stack AI Engineer · LLM-powered products, built end to end',
  tagline:
    'I build AI products from model to interface: LLM and RAG pipelines on AWS Bedrock, the Node.js and Express APIs that serve them, and the React front ends and MySQL schemas that put them in front of real users.',
  location: 'Hyderabad, India',
  email: 'nikhiltata1245@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikhiltata206',
  github: 'https://github.com/tataNikhil',
  summary:
    'Computer Science graduate (B.Tech, 2026) working where AI meets full-stack engineering. I turn natural language into SQL with LLMs, ship REST APIs with Node.js and Express, and design relational schemas that stay fast and secure. I care about systems that are secure, explainable and cheap to run.',
}

// One resume, served from public/resumes/. To update it, replace the PDF and keep the same file name.
export const resume = {
  href: '/resumes/resume.pdf',
  name: 'Nikhil_Sai_Tata_Resume.pdf',
}

export const stats = [
  { value: '149', label: 'REST endpoints shipped', note: 'KnowYC API' },
  { value: '29', label: 'table normalized MySQL schema', note: 'KnowYC database' },
  { value: '95%+', label: 'NL→SQL accuracy', note: 'AskSQL, 100+ queries' },
  { value: '500+', label: 'students trained in GenAI', note: 'Google Student Ambassador' },
  { value: '13,091', label: 'colleges searchable in ~30ms', note: 'KnowYC directory' },
  { value: '₹0', label: 'monthly hosting cost', note: 'Render + Aiven + Brevo' },
]

export const projects = [
  {
    id: 'asksql',
    name: 'AskSQL',
    full: 'Natural language to SQL with LLMs',
    kind: 'AI · Samsung Innovation Campus',
    year: '2024',
    blurb:
      'Lets non-technical users query live business data in plain English. An LLM on AWS Bedrock writes the SQL, a retrieval layer helps it understand the schema, and Lambda runs everything end to end.',
    highlights: [
      'NL→SQL generation using foundation models on Amazon Bedrock',
      'Semantic schema retrieval with Titan Text Embeddings v2 + Bedrock Knowledge Base',
      'AWS Lambda + Amazon RDS for end-to-end generation, execution and real-time answers',
      'Prompt engineering + few-shot learning: 95%+ success on 100+ advanced aggregation queries',
    ],
    metrics: [
      ['accuracy', '95%+'],
      ['queries tested', '100+'],
    ],
    stack: ['Amazon Bedrock', 'LLMs', 'Titan Embeddings', 'RAG', 'Lambda', 'RDS', 'Python'],
    links: [],
    flow: ['Question', 'Schema RAG', 'LLM → SQL', 'RDS → Answer'],
  },
  {
    id: 'knowyc',
    name: 'KnowYC',
    full: 'Know Your College: verified student community platform',
    kind: 'Full-stack · Live in production',
    year: '2026',
    blurb:
      'Each college becomes its own private community. Verified students find rooms near campus, buy and sell used items, share admin-approved notes, and ask seniors questions, with all content isolated per college.',
    highlights: [
      '149 REST endpoints over a normalized 29-table MySQL schema with 19 versioned migrations',
      'Session auth in HttpOnly cookies, bcrypt, email OTP, Google Sign-In (OIDC), RBAC and per-college data isolation',
      'Secure upload pipeline: magic-byte checks, PDF/DOCX text extraction, admin moderation, GPS metadata stripping',
      'Geospatial search with ST_Distance_Sphere + Leaflet (100 m to 5 km radius) and a 13,091-college directory',
      'Deployed to production at knowyc.org on Render with TLS-secured Aiven MySQL and Brevo email, at zero hosting cost',
    ],
    metrics: [
      ['endpoints', '149'],
      ['tables', '29'],
      ['pages', '52'],
    ],
    stack: ['React 19', 'Node.js', 'Express 5', 'MySQL 8', 'Zod', 'Leaflet', 'Render', 'Aiven'],
    links: [{ label: 'Live site', href: 'https://knowyc.org' }],
    flow: ['React SPA', 'Express API', 'MySQL 8', 'Brevo · Render'],
  },
  {
    id: 'forgery',
    name: 'Document Forensics',
    full: 'Automated detection of document alterations',
    kind: 'Computer Vision · ML',
    year: '2025',
    blurb:
      'Upload a PDF or image and find out whether it has been tampered with. Error Level Analysis and forensic features feed ML classifiers, and the UI highlights the suspected edited regions.',
    highlights: [
      'Full-stack Django platform for automated authenticity checks on PDFs and images',
      'Error Level Analysis (ELA) + image preprocessing feature pipeline',
      '95% detection accuracy with Random Forest, 92% with SVM',
      'Interactive UI that visualizes tampered regions and forensic insights',
    ],
    metrics: [
      ['RF accuracy', '95%'],
      ['SVM accuracy', '92%'],
    ],
    stack: ['Python', 'Django', 'OpenCV', 'Scikit-learn', 'ELA'],
    links: [{ label: 'GitHub', href: 'https://github.com/tataNikhil' }],
    flow: ['Upload', 'ELA + features', 'RF / SVM', 'Heatmap report'],
  },
]

export const experience = [
  {
    company: 'Samsung Innovation Campus',
    role: 'Coding & Programming Intern',
    period: 'Sep 2024 – Oct 2024',
    focus: 'Built AskSQL',
    photo: {
      src: '/samsung-campus.jpg',
      width: 640,
      height: 700,
      alt: 'Nikhil Sai Tata at Samsung Innovation Campus',
      caption: 'At Samsung Innovation Campus, 2024',
    },
    points: [
      'Architected an AI-powered NL→SQL system on AWS Bedrock so non-technical users could query live business data.',
      'Built semantic schema retrieval with Titan Text Embeddings v2 and Bedrock Knowledge Base.',
      'Wired AWS Lambda, Amazon RDS and conversational workflows into an end-to-end pipeline.',
      'Reached a 95%+ success rate on 100+ advanced aggregation queries through prompt engineering and few-shot learning.',
    ],
  },
  {
    company: 'Vodafone Idea (AICTE)',
    role: 'Data Analyst Intern',
    period: 'Oct 2024 – Nov 2024',
    focus: '2+ lakh records',
    points: [
      'Cleaned, validated and analyzed 200,000+ structured records in Python.',
      'Built analysis and visualization workflows that surfaced seasonal agricultural yield patterns.',
      'Ran EDA and statistical trend analysis to support field research and reporting.',
      'Automated cleaning and reporting with Pandas, NumPy and Matplotlib.',
    ],
  },
  {
    company: 'Google',
    role: 'Google Student Ambassador',
    period: 'Aug 2025 – Dec 2025',
    focus: '500+ students',
    photo: {
      src: '/gsa-workshop.jpg',
      width: 697,
      height: 1000,
      alt: 'Nikhil Sai Tata at a Google Student Ambassador event, with Gemini on a laptop',
      focus: '50% 42%',
      caption: 'Google Student Ambassador event, 2025',
    },
    points: [
      'Led campus-wide Generative AI initiatives: 4 workshops for 500+ students.',
      'Hands-on training in Gemini, prompt engineering and practical AI productivity.',
    ],
  },
]

export const skills = [
  { table: 'ai_ml', label: 'AI & Machine Learning', items: ['LLM apps', 'RAG', 'LangChain', 'Amazon Bedrock', 'Bedrock Agents', 'OpenAI / Groq APIs', 'Ollama', 'Hugging Face', 'PyTorch', 'Scikit-learn', 'Few-shot prompting', 'NLP'] },
  { table: 'backend', label: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'REST API design', 'Zod validation', 'Session auth / OAuth 2.0 / OIDC', 'RBAC', 'File uploads (Multer)'] },
  { table: 'frontend', label: 'Frontend', items: ['React 19', 'React Router', 'Vite', 'JavaScript (ES2023)', 'HTML5', 'CSS3', 'Leaflet maps', 'Accessibility'] },
  { table: 'data', label: 'Data & Databases', items: ['MySQL', 'SQL & schema design', 'Migrations', 'Geospatial queries', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'] },
  { table: 'cloud_devops', label: 'Cloud & DevOps', items: ['AWS Lambda', 'S3', 'ECS', 'RDS', 'IAM', 'OpenSearch', 'CloudWatch', 'VPC', 'Docker', 'Terraform', 'Jenkins', 'Render', 'Aiven'] },
  { table: 'quality', label: 'Tools & Practices', items: ['Postman', 'API testing', 'Unit & integration testing', 'OWASP Top 10', 'Git & GitHub', 'Linux', 'n8n'] },
  { table: 'languages', label: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'C++'] },
]

export const education = {
  entries: [
    {
      school: 'Bharath Institute of Higher Education and Research',
      place: 'Chennai',
      degree: 'B.Tech, Computer Science',
      period: '2022 – 2026',
      score: '8.44',
      scoreLabel: 'CGPA / 10',
    },
    {
      school: 'Narayana Junior College',
      place: 'Hyderabad',
      degree: 'Intermediate (Class XII), MPC',
      period: '2020 – 2022',
      score: '95.6%',
      scoreLabel: 'Percentage',
    },
    {
      school: 'Ideal High School',
      place: 'Suryapet',
      degree: 'SSC (Class X)',
      period: '2020',
      score: '10',
      scoreLabel: 'CGPA / 10',
    },
  ],
  core: ['Operating Systems', 'DBMS', 'Data Structures & Algorithms', 'Computer Networks'],
  certifications: [
    {
      name: 'Introduction to Internet of Things',
      issuer: 'NPTEL · IIT Kharagpur',
      date: 'Jan – Apr 2025',
      detail: 'Elite · 78% · 12-week course',
      url: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs44/Course/NPTEL25CS44S24330473204365027.pdf',
    },
    { name: 'Postman API Fundamentals Student Expert', issuer: 'Postman', date: 'Oct 2025' },
  ],
}
