// Edit everything here. Placeholder values are in [brackets].
export const site = {
  name: 'Farham',
  title: 'Farham · Backend & AI Engineer',
  description: 'Backend engineer and AI engineer building reliable APIs and intelligent systems with Python and Django.',
  resume: 'resume.pdf', // file lives in /public
};

export const nav = [
  { id: 'status', label: 'Status', n: '01' },
  { id: 'attributes', label: 'Attributes', n: '02' },
  { id: 'journey', label: 'Journey', n: '03' },
  { id: 'relics', label: 'Relics', n: '04' },
  { id: 'summon', label: 'Summon', n: '05' },
];

export const hero = {
  eyebrow: 'My Own Bonfire',
  motto: 'Think. Learn. Create.',
  name: 'Farham',
  role: 'Backend Engineer · AI Engineer',
  tagline: 'Python, Django, APIs, and everything behind them.',
  primary: { label: 'Explore My Work', href: '#relics' },
  secondary: { label: 'Place a Summon Sign', href: '#summon' },
  availability: 'Open to opportunities',
};


export const status = {
  title: 'A creator at the bonfire.',
  heading: 'Engineering with curiosity.',
  bio: [
    'I’m a backend developer working primarily with Python and Django, with a growing interest in AI engineering and building LLM-powered applications.',
    'Architecture, algorithms, math, and clean code keep me curious.',
  ],
  chips: ['Django & DRF', 'API Design', 'System Design'],
  stats: [
    ['Class', 'Backend Engineer'],
    ['Covenant', 'Lifelong Learning'],
    ['Starting Gift', 'Python'],
    ['Location', 'Mashhad'],
    ['Languages', 'English, Persian'],
  ] as [string, string][],
  availability: 'Open to opportunities',
};

type Skill = { name: string; level?: number; flavor: string; use: string };
export const attributes = {
  title: 'My equipments.',
  sub: 'A practical arsenal for reliable systems.',
  note: 'Levels are illustrative · select a tab to explore',
  max: 50,
  tabs: [
    {
      id: 'backend', label: 'Backend', tone: 'ember', skills: [
        { name: 'Python', level: 44, flavor: 'A familiar flame for unfamiliar problems.', use: 'Business logic, scripts, and reusable components.' },
        { name: 'Django', level: 38, flavor: 'Batteries included, discipline required.', use: 'Building application backends and data-driven systems.' },
        { name: 'Django REST Framework', level: 34, flavor: 'Contracts between systems.', use: 'Developing REST APIs and handling authentication.' },
        { name: 'PostgreSQL', level: 34, flavor: 'Where the data keeps its promises.', use: 'Relational data modeling, SQL, and Django ORM queries.' },
        { name: 'Redis', level: 32, flavor: 'Fast memory for hot paths.', use: 'Caching, temporary data storage, and fast data access.' },
        { name: 'REST API Design', level: 36, flavor: 'Predictable endpoints, honest errors.', use: 'Designing endpoints, serializers, and response structures.' },
        { name: 'Authentication & Authorization', level: 32, flavor: 'Identity, on your own terms.', use: 'Custom user models, OTP flows, and access control.' },
        { name: 'Service / Selector Pattern', level: 40, flavor: 'Writes in services, reads in selectors.', use: 'Separating write operations and read queries in Django.' },
        { name: 'Third-party API Integration', level: 34, flavor: 'Connecting applications beyond their boundaries.', use: 'Integrating external services, including Tipax APIs.' },
      ]
    },
    {
      id: 'ai', label: 'AI', tone: 'moon', skills: [
        { name: 'LLM applications', level: 28, flavor: 'Language, given structure.', use: 'Building Telegram bots with multi-model support and conversation context.' },
        { name: 'LLM API Integration', level: 28, flavor: 'Bridging applications and language models.', use: 'Connecting applications to different LLM providers and models.' },
        { name: 'Prompt engineering', level: 26, flavor: 'Ask precisely, receive usefully.', use: 'Designing prompts and structured model interactions.' },
        { name: 'RAG Fundamentals', level: 20, flavor: 'Retrieve first, then speak.', use: 'Exploring retrieval pipelines and context injection.' },
        { name: 'Embeddings & vector search', level: 18, flavor: 'Meaning, measured as distance.', use: 'Exploring semantic representations and vector retrieval.' },
      ]
    },
    {
      id: 'tools', label: 'Tools', tone: 'ember', skills: [
        { name: 'Git & GitHub', level: 36, flavor: 'Every change, remembered.', use: 'Version control, branching, and collaborative workflows.' },
        { name: 'Docker', level: 30, flavor: 'The same world, everywhere.', use: 'Learning containerization and development environments.' },
        { name: 'pytest', level: 34, flavor: 'Proof before shipping.', use: 'Writing and running automated tests.' },
        { name: 'Linux', level: 32, flavor: 'The terrain you deploy into.', use: 'Command-line workflows, environment management, and debugging.' },
      ]
    },
  ] as { id: string; label: string; tone: 'ember' | 'moon'; skills: Skill[] }[],
};

export const journey = {
  title: 'The Path to Salvation.',
  sub: 'Every system built is another fire kindled.',
  lit: 'Bonfire lit',
  items: [
    { role: 'Project Manager · System Designer · Developer', org: 'Travel Platform · NDA', date: '2026–Present', lit: true, bullets: ['Leading project planning, requirement analysis, and system architecture.', 'Contributing to technical decisions and backend development.'] },
    { role: 'Full-Stack Developer', org: 'KIMOTEH · E-commerce Platform', date: '2026', lit: true, bullets: ['Designed and developed the platform from the ground up, including backend, frontend, and database architecture.', 'Implemented core e-commerce features, authentication, and business logic.'] },
    { role: 'Full-Stack Developer', org: 'SetarehAds · Blog Platform', date: '2025', lit: false, bullets: ['Designed and developed the platform architecture and core application components.', 'Worked across backend, frontend, and database implementation.'] },
  ],
};

export const relics = {
  title: 'The boss archive.',
  sub: 'Selected builds. Hard problems. Useful outcomes.',
  featured: {
    title: 'FdevBKit',
    desc: 'A reusable Django REST Framework toolkit built to standardize API responses, simplify common patterns, and reduce repetitive code.',
    tags: ['Python', 'Django', 'DRF', 'pytest'], label: 'Relic type: Developer Toolkit',
    demo: { req: 'APIResponse.success(data=payload)', res: '200 OK · Standardized JSON', note: 'Consistent API response structure' },
    live: '#', github: '#',
  },
  items: [
    { title: 'Tipax API Integration', desc: 'An automated order-registration workflow built by integrating with the Tipax API.', tags: ['Python', 'REST API', 'Integration'], label: 'Boss defeated: Manual workflow', live: '#', github: '#' },
    { title: 'Multi-Model Telegram Bot', desc: 'A Telegram chatbot connecting multiple LLM providers, with conversation context preserved across interactions.', tags: ['Python', 'LLM', 'OpenRouter', 'Telegram Bot API'], label: 'Relic type: Multi-model LLM application', live: '#', github: '#' },
  ],
};

export const library = {
  title: 'Currently studying',
  sub: 'The next chapter is always open.',
  books: [
    'Advanced Django & DRF',
    'SQL & Database Optimization',
    'Redis & Celery',
    'Docker & Containerization',
    'AI Engineering & LLM Applications',
    'Software Architecture & Design Patterns',
  ],
};

export const contact = {
  title: 'Place your summon sign',
  sub: 'Have a project in mind or an opportunity to discuss? Let’s connect.',
  email: '',
  // Paste a Formspree / Web3Forms / your own DRF endpoint here. Empty = mailto: fallback.
  formEndpoint: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/FdevB' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fdevb' },
  ],
  footerLeft: 'Praise the Sun \\[T]/',
  footerRight: '© FarhamB.dev · Forged with intention.',
};
