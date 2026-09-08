export const site = {
  name: 'Ahmed Ali',
  initials: 'AA',
  role: 'Software Architect',
  /** Full title used in metadata, OG image and the About page */
  roleFull: 'Software Architect & Engineering Lead',
  /** Supporting line that carries the breadth the title alone cannot */
  specialisms: 'Distributed systems · AI platforms · Full-stack delivery',
  tagline: 'I design systems that scale.',
  intro: 'I architect event-driven backends, cloud infrastructure and production AI systems, from first diagram to live traffic.',
  availability: 'Open to remote and hybrid work worldwide',
  /** Years in the industry. One source so the hero stats, About copy and articles never disagree. */
  experience: { years: 6, label: '6+', words: 'six years' },
  /**
   * Where I am based. Used ONLY in structured data (Person.address) and on the /expertise
   * pages, where role + location is the search intent. Deliberately not rendered in the hero,
   * About, footer, contact panel or root OG image: those stay "remote, worldwide" (see b7e1258).
   */
  location: {
    city: 'Karachi',
    region: 'Sindh',
    country: 'Pakistan',
    countryCode: 'PK',
    label: 'Karachi, Pakistan',
    timezone: 'Asia/Karachi',
    utcOffset: 'UTC+5',
  },
  /** Markets named in the expertise copy, so titles, descriptions and the hub section agree */
  remoteMarkets: ['United States', 'United Kingdom', 'Europe'],
  email: 'ahmedalidev786@gmail.com',
  url: 'https://devahmedali.com',
  socials: {
    github: 'https://github.com/ahmedaliofficial',
    linkedin: 'https://www.linkedin.com/in/devahmedali',
    trackhrs: 'https://trackhrs.com',
    calendly: 'https://calendly.com/ahmedalidev786/30min',
  },
  seo: {
    description: 'Ahmed Ali is a software architect and engineering lead specialising in distributed systems, event-driven microservices and production AI systems.',
    keywords: [
      'software architect',
      'engineering lead',
      'technical lead',
      'principal software engineer',
      'full stack engineer',
      'backend engineer',
      'AI engineer',
      'fractional CTO',
      'distributed systems',
      'system design',
      'event driven architecture',
      'microservices',
      'kafka',
      'kubernetes',
      'AI engineering',
      'AI agents',
      'agentic workflows',
      'RAG pipelines',
      'LangChain',
      'LangGraph',
      'model context protocol',
      'MCP servers',
      'NestJS',
      'Golang',
      'Next.js developer',
      'NestJS developer',
      'Golang developer',
      'ecommerce development',
      'architecture audit',
      'software architect Karachi',
      'software engineer Pakistan',
      'remote software architect',
    ],
  },
} as const

/** Stable node ids for the JSON-LD graph. The Person node is emitted once in the root layout;
 *  every page-level schema references it by id instead of repeating the full object. */
export const PERSON_ID = `${site.url}/#person`
export const WEBSITE_ID = `${site.url}/#website`

export const socialLinks = [
  { label: 'GitHub', href: site.socials.github, icon: 'tabler:brand-github' },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: 'tabler:brand-linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'tabler:mail' },
] as const
