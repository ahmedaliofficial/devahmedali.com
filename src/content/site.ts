export const site = {
  name: 'Ahmed Ali',
  initials: 'AA',
  role: 'Solution Architect',
  roleFull: 'Solution Architect · Distributed Systems & AI',
  tagline: 'I design systems that scale.',
  intro: 'I architect event-driven backends, cloud infrastructure and production AI systems — from first diagram to live traffic.',
  location: 'Karachi, Pakistan',
  availability: 'Open to remote and hybrid work worldwide',
  email: 'ahmedalidev786@gmail.com',
  url: 'https://devahmedali.click',
  socials: {
    github: 'https://github.com/ahmedaliofficial',
    linkedin: 'https://www.linkedin.com/in/devahmedali',
    trackhrs: 'https://trackhrs.com',
  },
  seo: {
    description:
      'Ahmed Ali is a solution architect specialising in distributed systems, event-driven microservices and production AI. Case studies in FinTech, workplace safety and SaaS — from architecture to deployment.',
    keywords: [
      'solution architect',
      'distributed systems',
      'system design',
      'event driven architecture',
      'microservices',
      'kafka',
      'kubernetes',
      'backend engineer',
      'AI engineering',
      'RAG pipelines',
      'NestJS',
      'Golang',
    ],
  },
} as const

export const socialLinks = [
  { label: 'GitHub', href: site.socials.github, icon: 'tabler:brand-github' },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: 'tabler:brand-linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'tabler:mail' },
] as const
