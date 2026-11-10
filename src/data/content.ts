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
  eyebrow: "The Developer's Bonfire",
  motto: 'Rest. Refactor. Rise.',
  name: 'Farham',
  role: 'Backend Engineer · AI Engineer',
  tagline: 'I forge reliable APIs and intelligent systems. Prepare to ship.',
  primary: { label: 'View My Relics', href: '#relics' },
  secondary: { label: 'Place a Summon Sign', href: '#summon' },
  availability: 'Open to opportunities',
};

export const contact = {
  email: '[you@example.com]',
  // Paste a Formspree / Web3Forms / your own DRF endpoint here. Empty = mailto: fallback.
  formEndpoint: '',
};

export const status = {
  title: 'A builder at the bonfire.',
  heading: 'Clean systems. Quiet persistence.',
  bio: [
    'I’m a backend developer building clean, well-tested systems with Python and Django. Now I’m extending that craft into AI engineering — LLM apps and data pipelines.',
    'Architecture, algorithms, math, and clean code keep me curious.',
  ],
  chips: ['Service/Selector Architecture', 'Test-Driven', 'API Design'],
  stats: [
    ['Class', 'Backend Engineer'],
    ['Covenant', 'Open Source & Clean Code'],
    ['Starting gift', 'Python'],
    ['Location', '[City]'],
    ['Languages', 'English, Persian'],
  ] as [string, string][],
  availability: 'Open to opportunities',
};

type Skill = { name: string; level?: number; flavor: string; use: string };
export const attributes = {
  title: 'Choose your equipment.',
  sub: 'A practical arsenal for reliable systems.',
  note: 'Levels are illustrative · select a tab to explore',
  max: 50,
  tabs: [
    { id: 'backend', label: 'Backend', tone: 'ember', skills: [
      { name: 'Python', level: 40, flavor: 'A familiar flame for unfamiliar problems.', use: 'Services, scripts and tested business logic.' },
      { name: 'Django', level: 38, flavor: 'Batteries included, discipline required.', use: '[What you built with Django.]' },
      { name: 'Django REST Framework', level: 36, flavor: 'Contracts between systems.', use: '[APIs you shipped with DRF.]' },
      { name: 'PostgreSQL', level: 34, flavor: 'Where the data keeps its promises.', use: '[Schemas, indexes, query tuning.]' },
      { name: 'Redis', level: 28, flavor: 'Fast memory for hot paths.', use: '[Caching, rate limiting, queues.]' },
      { name: 'REST API design', level: 36, flavor: 'Predictable endpoints, honest errors.', use: '[Versioning, pagination, auth.]' },
      { name: 'Custom auth/user models', level: 32, flavor: 'Identity, on your own terms.', use: '[Custom user model and auth flows.]' },
      { name: 'Service/selector architecture', level: 34, flavor: 'Writes in services, reads in selectors.', use: '[How you structure Django projects.]' },
    ] },
    { id: 'ai', label: 'AI', tone: 'moon', skills: [
      { name: 'LLM applications', level: 24, flavor: 'Language, given structure.', use: '[LLM features you built.]' },
      { name: 'Prompt engineering', level: 26, flavor: 'Ask precisely, receive usefully.', use: '[Prompting and evaluation habits.]' },
      { name: 'RAG', level: 22, flavor: 'Retrieve first, then speak.', use: '[Retrieval pipeline you built.]' },
      { name: 'Embeddings & vector search', level: 22, flavor: 'Meaning, measured as distance.', use: '[Vector store and search setup.]' },
      { name: 'Model evaluation', level: 20, flavor: 'Trust, but measure.', use: '[How you test model quality.]' },
      { name: '[add your real tools]', flavor: 'An empty slot, waiting for an item.', use: '[Add a tool.]' },
    ] },
    { id: 'tools', label: 'Tools', tone: 'ember', skills: [
      { name: 'Git', level: 36, flavor: 'Every change, remembered.', use: '[Workflow you follow.]' },
      { name: 'Docker', level: 30, flavor: 'The same world, everywhere.', use: '[Containerised projects.]' },
      { name: 'pytest', level: 34, flavor: 'Proof before shipping.', use: 'Unit and API tests with factory_boy fixtures.' },
      { name: 'factory_boy', level: 30, flavor: 'Test data on demand.', use: '[Factories you maintain.]' },
      { name: 'Linux', level: 32, flavor: 'The terrain you deploy into.', use: '[Servers, shells, debugging.]' },
      { name: 'CI/CD', level: 28, flavor: 'Ship on every push.', use: '[Pipelines you set up.]' },
      { name: '[add more]', flavor: 'An empty slot, waiting for an item.', use: '[Add a tool.]' },
    ] },
  ] as { id: string; label: string; tone: 'ember' | 'moon'; skills: Skill[] }[],
};
