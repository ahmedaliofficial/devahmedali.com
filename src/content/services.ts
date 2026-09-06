export type ServiceArea = {
  number: string
  title: string
  description: string
  services: string[]
  icon: string
  /** Accent token from assets/css/_config.css */
  accent: string
}

export const serviceAreas: ServiceArea[] = [
  {
    number: '01',
    title: 'Product & platform engineering',
    description: 'The things your customers actually touch — built to hold up once real traffic arrives.',
    services: ['Web applications & dashboards', 'Marketing sites & landing pages', 'Ecommerce platforms', 'CMS & content platforms', 'ERP systems & integrations', 'Mobile & cross-platform desktop apps', 'MVPs taken from zero to launch'],
    icon: 'lucide:layout-dashboard',
    accent: 'primary',
  },
  {
    number: '02',
    title: 'Backend & solution architecture',
    description: 'The layer underneath — service boundaries, data flow and the trade-offs written down before the first commit.',
    services: ['System design & architecture reviews', 'Microservices & domain-driven design', 'Event-driven pipelines (Kafka, RabbitMQ)', 'REST & gRPC API engineering', 'Database strategy across SQL and NoSQL', 'Legacy modernisation & migration plans'],
    icon: 'lucide:drafting-compass',
    accent: 'primary-8',
  },
  {
    number: '03',
    title: 'AI, agents & automation',
    description: 'AI that ships as a service with failure paths, tracing and evaluation — not a demo that degrades quietly for six months.',
    services: ['Chatbots & conversational agents', 'LangGraph & multi-agent workflows', 'Custom MCP servers & tool integration', 'RAG pipelines & vector search', 'Agent SDK & generative APIs', 'LangSmith tracing & evaluation', 'Analytics & intelligence engines', 'Workflow & process automation'],
    icon: 'lucide:brain-circuit',
    accent: 'primary-6',
  },
  {
    number: '04',
    title: 'Cloud, scaling & audits',
    description: 'Making deployment boring, systems cheaper, and telling you honestly which part is actually the problem.',
    services: ['Kubernetes, Docker & CI/CD', 'Performance tuning & caching strategy', 'Cloud cost optimisation', 'Observability & production readiness', 'Architecture & code audits', 'Security & reliability reviews'],
    icon: 'lucide:cloud-cog',
    accent: 'primary-1',
  },
]
