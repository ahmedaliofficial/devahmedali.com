/** Concise client-facing summaries; engineering evidence stays in case-studies/. */
export const projectPresentation: Record<
  string,
  {
    category: string
    description: string
    image: string
    alt: string
    caption: string
    outcome: string
    color: string
  }
> = {
  trackhrs: {
    category: 'SaaS · Full product development',
    description: 'One workspace for projects, clients, time and people. Built from the desktop tracker to the platform behind it.',
    image: '/images/work/trackhrs-mockup.webp',
    alt: 'TrackHRS work dashboard and project board presented in a laptop mockup',
    caption: 'Product mockup based on TrackHRS documentation. Demo workspace shown.',
    outcome: 'Founder · Product, architecture & engineering',
    color: '#e9efff',
  },
  'hysab-kytab': {
    category: 'FinTech · Backend architecture',
    description: 'Helping banking customers understand spending, plan budgets and build better financial habits.',
    image: '/images/work/hysab-official.webp',
    alt: 'Official Hysab Kytab product artwork showing spending and transaction views on two phones',
    caption: 'Official Hysab Kytab product artwork. My contribution focused on backend architecture and distributed systems.',
    outcome: 'Financial data platforms & integrations',
    color: '#eaf0e9',
  },
  agentx: {
    category: 'AI · Agents & automation',
    description: 'From a simple prompt to a working product. An AI workspace for building, editing and previewing web and mobile apps.',
    image: '/images/work/agentx-mockup.webp',
    alt: 'AgentX AI workspace showing a conversation beside a working website preview, in a desktop mockup',
    caption: 'Product mockup based on application documentation, with AgentX branding and demo content.',
    outcome: 'Agent orchestration & platform engineering',
    color: '#eeebfa',
  },
  omnivision: {
    category: 'Computer vision · Real-time systems',
    description: 'Connecting workplace safety detection to timely alerts, with a backend designed to keep up.',
    image: '',
    alt: '',
    caption: 'Illustrative workflow based on the platform architecture.',
    outcome: 'Vision pipelines & event-driven alerts',
    color: '#e9eef2',
  },
}

export const offers = [
  { number: '01', title: 'Build your product', description: 'From an early idea to a web app, SaaS platform or customer-facing website that is ready to launch.', tags: 'Web apps / SaaS / Ecommerce' },
  { number: '02', title: 'Put AI to work', description: 'Useful AI assistants and automations that connect to your tools and take repetitive work off your team.', tags: 'AI agents / Integrations / Automation' },
  { number: '03', title: 'Make it scale', description: 'A stronger foundation for your existing product, with better architecture, performance and reliability.', tags: 'Architecture / Backend / Cloud' },
] as const
