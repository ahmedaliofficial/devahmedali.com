export type ServiceOffering = {
  slug: string
  title: string
  summary: string
  deliverables: string[]
  stack: string[]
  icon: string
  /** Accent token from assets/css/_config.css */
  accent: string
}

/** Full catalogue shown on /services */
export const serviceCatalog: ServiceOffering[] = [
  {
    slug: 'backend-engineering',
    title: 'Backend engineering',
    summary: 'The core of most of my work. Typed, tested services with API contracts that hold up as the team and the traffic grow.',
    deliverables: ['REST & gRPC API design and delivery', 'Microservices and modular monoliths', 'Database schema design and query optimisation', 'Authentication, roles and multi-tenancy', 'Background jobs, queues and scheduled work', 'Service contracts and safe versioning'],
    stack: ['NestJS', 'Node.js', 'Golang', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: 'lucide:server',
    accent: 'primary-8',
  },
  {
    slug: 'solution-architecture',
    title: 'Solution architecture & system design',
    summary: 'The diagram before the code — service boundaries, data flow and the trade-offs written down while they are still cheap to change.',
    deliverables: ['High- and low-level architecture design', 'Event-driven and microservice decomposition', 'Domain-driven service boundaries', 'Scalability, caching and data strategy', 'Migration and modernisation roadmaps', 'Architecture docs your team can act on'],
    stack: ['Apache Kafka', 'RabbitMQ', 'gRPC', 'DDD', 'Event-driven', 'API gateways'],
    icon: 'lucide:drafting-compass',
    accent: 'primary',
  },
  {
    slug: 'ai-agents',
    title: 'AI & agent engineering',
    summary: 'Assistants and agents that do real work against real systems — with tracing, evaluation and a sensible answer when they do not know.',
    deliverables: ['RAG pipelines with citations and freshness', 'LangGraph multi-agent workflows and state machines', 'Custom MCP servers exposing your own tools', 'Agent SDK integrations and tool calling', 'LangSmith tracing, evaluation and regression sets', 'Guardrails, fallbacks and cost controls'],
    stack: ['LangChain', 'LangGraph', 'LangSmith', 'Agent SDKs', 'MCP', 'FastAPI', 'Vector databases'],
    icon: 'lucide:brain-circuit',
    accent: 'primary-6',
  },
  {
    slug: 'automation',
    title: 'Automation & integrations',
    summary: 'Removing the manual step between two systems that were never designed to talk to each other.',
    deliverables: ['Workflow and business process automation', 'ERP, CRM and third-party API integration', 'Webhook and event-driven sync', 'Data pipelines and scheduled reconciliation', 'Internal tools and admin automation', 'Audit logging and failure alerting'],
    stack: ['Node.js', 'Python', 'Apache Kafka', 'BullMQ', 'REST', 'Webhooks'],
    icon: 'lucide:workflow',
    accent: 'primary-1',
  },
  {
    slug: 'web-development',
    title: 'Web & product development',
    summary: 'The surface your customers actually touch — fast, accessible, and built on a backend that will not embarrass it later.',
    deliverables: ['Web applications, portals and dashboards', 'Marketing sites and landing pages', 'Design systems and component libraries', 'Performance, SEO and accessibility work', 'Analytics and conversion instrumentation', 'Delivery from design handoff to production'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    icon: 'lucide:layout-dashboard',
    accent: 'primary',
  },
  {
    slug: 'ecommerce-cms-erp',
    title: 'Ecommerce, CMS & ERP platforms',
    summary: 'Commerce and content systems that survive a traffic spike, and the integrations that keep the business behind them in sync.',
    deliverables: ['Storefronts, checkout and payment integration', 'Order, inventory and fulfilment flows', 'Headless CMS and content platforms', 'ERP and accounting system integration', 'Admin portals and operations tooling', 'Multi-currency, region and tenant setups'],
    stack: ['Next.js', 'NestJS', 'Laravel', 'PostgreSQL', 'Redis'],
    icon: 'lucide:shopping-cart',
    accent: 'primary-4',
  },
  {
    slug: 'vibe-coding',
    title: 'Vibe coding & AI-assisted delivery',
    summary: 'Shipping at AI speed without inheriting AI debt. I use agentic tooling to move fast, then apply the architecture review that keeps it maintainable.',
    deliverables: ['Rapid prototypes and clickable MVPs', 'AI-assisted build-out with human architecture review', 'Rescuing and refactoring AI-generated codebases', 'Agentic workflows set up for your own team', 'Standards and guardrails for AI-assisted work', 'Handover docs engineers can actually follow'],
    stack: ['Agent SDKs', 'MCP', 'LangGraph', 'Next.js', 'TypeScript'],
    icon: 'lucide:wand-sparkles',
    accent: 'primary-6',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud, DevOps & scaling',
    summary: 'Making deployment boring and infrastructure cheaper, so shipping stops being an event.',
    deliverables: ['Kubernetes and Docker setup', 'CI/CD pipelines and release automation', 'Caching, load and performance tuning', 'Cloud cost optimisation and rightsizing', 'Observability, health checks and alerting', 'Production readiness and incident runbooks'],
    stack: ['Kubernetes', 'Docker', 'GCP', 'AWS', 'Nginx', 'Jenkins', 'GitHub Actions'],
    icon: 'lucide:cloud-cog',
    accent: 'primary-2',
  },
  {
    slug: 'audits',
    title: 'Architecture & code audits',
    summary: 'An honest second opinion on the system you already have — what is actually the problem, and what it will cost to fix.',
    deliverables: ['Architecture and system design review', 'Codebase quality and maintainability audit', 'Performance and scalability assessment', 'Security and reliability review', 'Cloud cost and infrastructure audit', 'Prioritised findings with effort estimates'],
    stack: ['Architecture review', 'Load testing', 'Profiling', 'Threat modelling'],
    icon: 'lucide:clipboard-check',
    accent: 'primary-1',
  },
  {
    slug: 'mobile-desktop',
    title: 'Mobile & desktop applications',
    summary: 'Cross-platform clients with native-level performance and an offline story that actually works.',
    deliverables: ['Cross-platform desktop applications', 'System-level capture and background agents', 'Offline buffering and sync', 'Auto-update and release distribution', 'Mobile-ready APIs and push notifications', 'Packaging, signing and distribution'],
    stack: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    icon: 'lucide:monitor-smartphone',
    accent: 'primary-8',
  },
]

export type EngagementModel = {
  title: string
  description: string
  bestFor: string
  icon: string
}

export const engagementModels: EngagementModel[] = [
  {
    title: 'Consultation call',
    description: 'A focused session on the problem in front of you — architecture, scaling, a build-versus-buy call, or a second opinion before you commit budget.',
    bestFor: 'A decision you need to get right',
    icon: 'lucide:message-circle',
  },
  {
    title: 'Architecture review or audit',
    description: 'A structured look at the system you already have, ending in a written set of prioritised findings with effort estimates.',
    bestFor: 'Something already built that is creaking',
    icon: 'lucide:clipboard-check',
  },
  {
    title: 'Project delivery',
    description: 'End-to-end ownership from architecture through to production — scoped, built, deployed and handed over with documentation.',
    bestFor: 'A defined product or platform to ship',
    icon: 'lucide:rocket',
  },
  {
    title: 'Ongoing partner or full-time',
    description: 'Embedded with your team as an architect or engineering lead — setting standards, mentoring engineers and owning technical direction.',
    bestFor: 'A team that needs senior depth long term',
    icon: 'lucide:users',
  },
]
