export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  subtitle: string;
  description: string;
  technologies: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  layoutVariant: 'text-left' | 'visual-left' | 'full-width' | 'asymmetric-split';
  metrics?: { label: string; value: string }[];
}

export interface Capability {
  number: string;
  title: string;
  subtitle: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  number: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  number: string;
  period: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "SAKTHIMURUGAN V",
  displayName: "SAKTHI",
  brandName: "SAKTHI™",
  title: "WEB DEVELOPER",
  specialties: ["WEB DEVELOPMENT", "AI / MACHINE LEARNING", "FULL-STACK DEVELOPMENT", "CREATIVE TECHNOLOGY"],
  positioning: "I build websites and tools that do their job well — and are nice to use.",
  subTagline: "I'm a B.Tech IT student who builds websites, small tools, and the occasional ML model. Most of what I know came from breaking things and fixing them.",
  status: "OPEN TO OPPORTUNITIES",
  location: "INDIA",
  region: "Tamil Nadu, India",
  coordinates: "11.1271° N, 78.6569° E",
  timezone: "IST (UTC+05:30)",
  email: "sakthimurugan2501@gmail.com",
  github: "https://github.com/sakthi-design",
  linkedin: "https://www.linkedin.com/in/sakthimurugan-v-456629311",
};

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    subtitle: "Frontend & small full-stack apps",
    skills: ["React", "TypeScript", "HTML5", "CSS3 / Tailwind CSS", "Responsive Design", "REST Integration"],
    description: "Most of my work is here — React apps, clean layouts, forms and dashboards that hold up on a phone as well as a laptop. I care about pages that load fast and don't confuse people.",
  },
  {
    number: "02",
    title: "BACKEND & PYTHON",
    subtitle: "APIs and server-side logic",
    skills: ["Python", "Django", "FastAPI", "REST APIs", "Authentication", "MySQL / PostgreSQL"],
    description: "I write the server side of my own projects: FastAPI or Django endpoints, a database schema that makes sense, and the boring but important parts like auth and validation.",
  },
  {
    number: "03",
    title: "AI & MACHINE LEARNING",
    subtitle: "Coursework models, applied to real data",
    skills: ["Scikit-Learn", "PyTorch", "NLP", "Computer Vision", "OpenCV", "Pandas"],
    description: "I train models for my projects — a burnout risk classifier, an animal image classifier — and I've learned that the hard part is the data, not the model. Still learning, but the models run.",
  },
  {
    number: "04",
    title: "DATABASES",
    subtitle: "SQL first, some Mongo",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Schema Design", "Query Basics"],
    description: "Comfortable designing tables and relations, writing queries that don't fall over, and knowing when a spreadsheet is honestly the better tool.",
  },
  {
    number: "05",
    title: "TOOLS I USE DAILY",
    subtitle: "The usual kit",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Linux / PowerShell", "Vercel"],
    description: "Git for version control, Postman for poking at APIs, Vercel for deploying side projects. Nothing exotic — just tools that stay out of the way.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-employee-burnout",
    number: "01",
    title: "EMPLOYEE BURNOUT RISK PREDICTOR",
    category: "MACHINE LEARNING / FULL STACK",
    year: "2025",
    subtitle: "Predicting burnout risk from work-pattern data",
    description: "A machine learning model that estimates burnout risk from work-pattern data, with a dashboard for exploring the results.",
    technologies: ["Python", "Scikit-Learn", "React", "FastAPI", "PostgreSQL"],
    overview: "I kept reading about burnout in software teams and wondered if the signals show up earlier than annual HR surveys catch them. So I built a small end-to-end version: a dataset of work-pattern features, a Scikit-Learn model behind a FastAPI endpoint, and a React dashboard to explore predictions. It's a student project, not a clinical tool — but the pipeline is real, end to end.",
    problem: "Companies mostly find out someone is burned out when they quit. Annual surveys are too late and too coarse to catch the slow build-up.",
    solution: "I trained a classifier on work-pattern features (hours, meeting load, after-hours activity) to flag rising risk earlier. FastAPI serves the predictions; React draws the charts. Everything is aggregated — no individual surveillance.",
    features: [
      "Risk score from work-pattern features, not personal content",
      "FastAPI endpoint serving predictions in a small fraction of a second",
      "React dashboard with trends and cohort-level views",
      "Aggregated numbers only — the model never sees messages or identities",
    ],
    metrics: [
      { label: "Model", value: "Scikit-Learn Classifier" },
      { label: "Status", value: "Working Prototype" },
      { label: "Scope", value: "Demo Data" },
    ],
    liveDemoUrl: "https://github.com/sakthimurugan-v",
    githubUrl: "https://github.com/sakthimurugan-v",
    layoutVariant: "text-left",
  },
  {
    id: "animal-classification",
    number: "02",
    title: "ANIMAL IMAGE CLASSIFIER",
    category: "MACHINE LEARNING / COMPUTER VISION",
    year: "2025",
    subtitle: "Sorting camera-trap photos automatically",
    description: "A computer vision model that sorts camera-trap photos by species, built for a biodiversity coursework project.",
    technologies: ["Python", "PyTorch", "Django", "OpenCV", "React"],
    overview: "A friend doing wildlife coursework was drowning in camera-trap photos that all had to be labeled by hand. This started as a way to help: upload a photo, get the likely species back with a confidence score. The model handles the common species well and gets visibly confused by bad lighting — I'd rather say that than pretend otherwise.",
    problem: "Camera traps produce thousands of photos and someone has to click through all of them. Most shots are empty grass or a blurry tail.",
    solution: "An OpenCV preprocessing pass (resize, contrast normalization, basic denoise) followed by a CNN classifier. Django handles uploads and stores predictions; a simple React page shows results with the top-5 guesses.",
    features: [
      "Upload a photo, get species predictions with confidence scores",
      "Top-5 breakdown so near-misses are visible, not hidden",
      "Preprocessing pipeline tuned for outdoor lighting variance",
      "Prediction history stored for later review",
    ],
    metrics: [
      { label: "Model", value: "CNN (PyTorch)" },
      { label: "Status", value: "Working Prototype" },
      { label: "Known Limit", value: "Low-light Accuracy" },
    ],
    liveDemoUrl: "https://github.com/sakthimurugan-v",
    githubUrl: "https://github.com/sakthimurugan-v",
    layoutVariant: "visual-left",
  },
  {
    id: "ai-blog-bot",
    number: "03",
    title: "AI BLOG BOT",
    category: "AI / CONTENT / FULL STACK",
    year: "2025",
    subtitle: "Generative content assistant for blog drafts and research summaries",
    description: "An AI-powered blog planning assistant that turns raw ideas into structured drafts, outlines, and topic briefs for content creators.",
    technologies: ["Python", "OpenAI API", "React", "FastAPI", "Prompt Engineering"],
    overview: "I wanted a small AI content workflow that could turn a rough idea into a usable blog outline instead of leaving me staring at a blank page. The project combines a prompt-driven generation flow with a lightweight dashboard for drafting, editing, and refining article concepts. The aim was to save time without making the writing feel robotic.",
    problem: "Writing blog content begins with research, structure, and framing — not just final prose. For solo builders, the first hour of drafting is usually wasted in blank-page friction.",
    solution: "I built a web app that accepts a topic, tone, and target audience, then produces a structured outline, key talking points, and a draft with suggested headings. FastAPI handles generation requests while the React interface gives a clean editing workflow for polishing the result.",
    features: [
      "Topic-to-outline generation for blog structure",
      "Tone and audience-aware drafting prompts",
      "Editable generated content in a clean writing interface",
      "Structured results for faster research-to-draft flow",
    ],
    metrics: [
      { label: "Workflow", value: "Idea → Outline → Draft" },
      { label: "Core", value: "Prompt + UI Flow" },
      { label: "Use Case", value: "Content Productivity" },
    ],
    liveDemoUrl: "https://github.com/sakthimurugan-v",
    githubUrl: "https://github.com/sakthimurugan-v",
    layoutVariant: "visual-left",
  },
  {
    id: "placement-assist-bot",
    number: "04",
    title: "PLACEMENT PREP ASSISTANT",
    category: "NLP / EDUCATION",
    year: "2024",
    subtitle: "Resume feedback and interview practice for classmates",
    description: "An NLP tool that reads a resume against a job description, points out gaps, and drills interview questions.",
    technologies: ["Python", "NLP", "Django", "REST API"],
    overview: "I made this during my own placement prep because mock interviews on campus were scarce and everyone had the same questions. Paste your resume and a job description; it tells you which requirements you don't clearly cover and quizzes you on the core subjects. First version was for my class group; the drill bank has grown since.",
    problem: "Most students find out their resume's weak spots after the rejection, not before. And practicing alone means no feedback loop.",
    solution: "Keyword and semantic matching between resume text and the job description, plus a question bank per subject (DSA, DBMS, web basics, Python). It's a study tool, not a coach — but it tells you where to start.",
    features: [
      "Resume vs. job-description gap analysis",
      "Question banks for DSA, DBMS, web architecture, and Python",
      "Practice mode with hints, not just answers",
      "Simple progress view across practice sessions",
    ],
    metrics: [
      { label: "Subjects", value: "DSA, DBMS, Web, Python" },
      { label: "Method", value: "Keyword + Semantic Match" },
      { label: "First Users", value: "My Class Group" },
    ],
    liveDemoUrl: "https://github.com/sakthimurugan-v",
    githubUrl: "https://github.com/sakthimurugan-v",
    layoutVariant: "visual-left",
  },
  {
    id: "movie-wishlist",
    number: "05",
    title: "MOVIE WATCHLIST APP",
    category: "REACT / TMDB API",
    year: "2024",
    subtitle: "Search movies, save what you want to watch",
    description: "A React app for searching movies via the TMDB API and keeping a personal watchlist in the browser.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "TMDB API", "Local Storage"],
    overview: "A weekend project that got out of hand. I wanted to learn TMDB's API properly, so I built a search-first movie browser with a watchlist that survives page reloads. Nothing clever under the hood — debounced search, clean cards, local storage — but it's the app I actually use on Friday nights.",
    problem: "Watchlists scattered across streaming apps and notes apps are easy to lose. I wanted one place to dump 'watch later' movies.",
    solution: "A single-page React app over the TMDB API: debounced search, genre filters, and a watchlist persisted in local storage. TypeScript caught a lot of my mistakes before the browser did.",
    features: [
      "Instant debounced search across TMDB's catalog",
      "Watchlist saved in the browser — no account needed",
      "Genre and rating filters",
      "Detail view with synopsis and ratings",
    ],
    metrics: [
      { label: "API", value: "TMDB" },
      { label: "Type", value: "Weekend Project" },
      { label: "In My Watchlist", value: "More Than I'll Watch" },
    ],
    liveDemoUrl: "https://github.com/sakthimurugan-v",
    githubUrl: "https://github.com/sakthimurugan-v",
    layoutVariant: "asymmetric-split",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    number: "01",
    period: "2024 — PRESENT",
    role: "Independent Projects & Freelance Work",
    organization: "Self-directed",
    location: "Tamil Nadu, India",
    description: "Building my own projects — the four on this page — and taking small freelance jobs: landing pages, fixes, and simple web apps for local clients. Each project taught me something the tutorials skipped.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Git"],
  },
  {
    number: "02",
    period: "2025 — 2026",
    role: "Lead Generation & Digital Marketing Intern",
    organization: "Sorven Globals",
    location: "Tamil Nadu, India",
    description: "Supported lead generation and digital marketing campaigns by researching prospects, improving outreach, and helping organize content for online channels.",
    technologies: ["Lead Generation", "Digital Marketing", "SEO", "Social Media"],
  },
  {
    number: "03",
    period: "2026",
    role: "Machine Learning Intern",
    organization: "GradTwin",
    location: "Tamil Nadu, India",
    description: "Worked on machine learning tasks involving data preparation, model experiments, and practical evaluation as part of the GradTwin internship.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
  },
  {
    number: "04",
    period: "2024",
    role: "Web Development Internship",
    organization: "Technical training program",
    location: "Tamil Nadu, India",
    description: "A short internship where I built web components, fixed cross-browser bugs, and worked with MySQL for the first time on something real. Mostly I learned how slow unstyled HTML looks and why code review matters.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Python", "MySQL"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    number: "01",
    period: "2022 — 2026",
    degree: "BACHELOR OF TECHNOLOGY (B.TECH)",
    field: "INFORMATION TECHNOLOGY",
    institution: "Adhiparasakthi Engineering College",
    location: "Melmaruvathur, Tamil Nadu, India",
    description: "Undergraduate degree in IT. The coursework gave me the fundamentals — data structures, databases, networks — and the free time to build the projects above.",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Machine Learning (elective)",
    ],
  },
  {
    number: "02",
    period: "2020 — 2022",
    degree: "HIGHER SECONDARY EDUCATION (HSC)",
    field: "MATHS & BIOLOGY",
    institution: "Thandhai Hans Roever Hr. Sec. School",
    location: "Perambalur, Tamil Nadu, India",
    description: "Higher secondary with maths and biology — an odd combination that turned out to be good training for debugging: observe, hypothesize, test.",
    highlights: [
      "Mathematics",
      "Biology",
      "Physics & Chemistry",
    ],
  },
];
