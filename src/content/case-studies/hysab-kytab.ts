import type { CaseStudy } from './types'

export const hysabKytab: CaseStudy = {
  slug: 'hysab-kytab',
  meta: {
    title: 'Hysab Kytab: personal finance for financial institutions',
    description: 'Backend architecture and distributed systems for a personal finance platform that connects financial data with budgeting, spending insights and savings goals.',
  },
  hero: {
    eyebrow: 'FinTech · Personal Finance Platform',
    title: 'Hysab Kytab',
    subtitle: 'Personal finance tools that help banking customers understand spending, manage budgets and track savings. My work focused on the backend systems behind the experience.',
    role: 'Backend Architecture & Distributed Systems',
    links: [{ label: 'Visit hysabkytab.com', href: 'https://www.hysabkytab.com/', icon: 'lucide:external-link' }],
  },
  stats: [
    { value: 'Unified', label: 'Financial data', description: 'Connected sources behind a shared service layer' },
    { value: 'Personal', label: 'Spending insights', description: 'Categorization, budgeting and savings goals' },
    { value: 'API-first', label: 'Bank integrations', description: 'Personal finance tools for financial institutions' },
  ],
  overview: {
    heading: 'Making financial data useful to people',
    paragraphs: [
      'Hysab Kytab provides personal finance tools for financial institutions, bringing together transaction categorization, budgeting, statements, spending insights and savings goals. Its API-first approach lets banks add these capabilities to their customer experience.',
      'My contribution focused on backend architecture and distributed systems: connecting financial data sources through Golang and NestJS services, processing events asynchronously, and supporting responsive APIs with Redis. The product screens shown here are official Hysab Kytab visuals.',
    ],
  },
  problems: [
    {
      title: 'Disparate data sources',
      description: 'Different database engines and bank feeds needed a consistent service layer for financial views.',
      icon: 'lucide:database',
    },
    {
      title: 'Precision under load',
      description: 'Financial data tolerates no drift, while still serving customer-facing apps at interactive speed.',
      icon: 'lucide:scale',
    },
    {
      title: 'Reliable integrations',
      description: 'Financial integrations need clear service boundaries, monitoring and traceable event processing.',
      icon: 'lucide:shield-check',
    },
  ],
  architecture: {
    heading: 'High-level architecture',
    intro: 'A polyglot backend hidden behind one coherent service layer, so the banking app never has to know which engine an answer came from.',
    layers: [
      {
        title: 'Client layer',
        caption: 'Financial institutions and personal finance experiences',
        nodes: [
          { name: 'Banking integrations', tech: 'PFM APIs', icon: 'lucide:building-2' },
          { name: 'Consumer app', tech: 'Personal finance', icon: 'lucide:smartphone' },
          { name: 'Admin & ops console', tech: 'Web', icon: 'lucide:layout-dashboard' },
        ],
      },
      {
        title: 'Service layer',
        caption: 'gRPC between services, REST at the edge',
        nodes: [
          { name: 'Aggregation services', tech: 'Golang', icon: 'lucide:building-2' },
          { name: 'Transaction services', tech: 'Golang', icon: 'lucide:arrow-left-right' },
          { name: 'Domain & product APIs', tech: 'NestJS', icon: 'lucide:server' },
          { name: 'Enterprise services', tech: 'Spring Boot', icon: 'lucide:boxes' },
          { name: 'AI advisory & insights', tech: 'LangChain · RAG', icon: 'lucide:brain' },
        ],
      },
      {
        title: 'Event & cache layer',
        caption: 'Financial event processing and responsive reads',
        nodes: [
          { name: 'Kafka cluster', tech: 'Events · audit & alerting', icon: 'lucide:git-branch' },
          { name: 'RabbitMQ', tech: 'Routed processing', icon: 'lucide:split' },
          { name: 'Redis', tech: 'Cache-first reads', icon: 'lucide:zap' },
        ],
      },
      {
        title: 'Data layer',
        caption: 'Different engines, one service contract',
        nodes: [
          { name: 'PostgreSQL', tech: 'Core relational', icon: 'lucide:database' },
          { name: 'MongoDB', tech: 'Flexible documents', icon: 'lucide:database' },
          { name: 'Oracle', tech: 'Bank systems', icon: 'lucide:database' },
          { name: 'SQL Server', tech: 'Enterprise integration', icon: 'lucide:database' },
          { name: 'MySQL', tech: 'Legacy services', icon: 'lucide:database' },
        ],
      },
    ],
  },
  pipelineMini: [
    { step: 1, title: 'Aggregate', description: 'Multi-bank feeds', icon: 'lucide:building-2' },
    { step: 2, title: 'Stream', description: 'Kafka events', icon: 'lucide:git-branch' },
    { step: 3, title: 'Enrich', description: 'Categorise & score', icon: 'lucide:sparkles' },
    { step: 4, title: 'Serve', description: 'Cache-first APIs', icon: 'lucide:zap' },
  ],
  pipeline: {
    heading: 'From bank feed to financial insight',
    intro: 'Aggregation is slow and unpredictable; customer apps are neither. The whole design separates those two realities so the slow half never blocks the fast half.',
    steps: [
      { step: 1, title: 'Multi-bank aggregation', description: 'Connectors pull account and transaction data from multiple banking sources, each with its own format and refresh cadence.', tech: ['Golang', 'REST'], icon: 'lucide:building-2' },
      { step: 2, title: 'Encrypted ingest', description: 'End-to-end encryption in Golang protects financial payloads in transit across service boundaries.', tech: ['Golang', 'E2E encryption'], icon: 'lucide:lock' },
      { step: 3, title: 'Kafka event backbone', description: 'Financial events flow through Kafka for downstream processing, monitoring, audit trails and alerting.', tech: ['Apache Kafka', 'RabbitMQ'], icon: 'lucide:git-branch' },
      { step: 4, title: 'gRPC service mesh', description: 'NestJS, Golang and Spring Boot services communicate over gRPC, coordinated through Kafka and RabbitMQ.', tech: ['gRPC', 'NestJS', 'Spring Boot'], icon: 'lucide:network' },
      {
        step: 5,
        title: 'Multi-database persistence',
        description: 'PostgreSQL, MongoDB, Oracle and SQL Server unified behind one cohesive service layer, each used where it is genuinely the right tool.',
        tech: ['PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
        icon: 'lucide:database',
      },
      { step: 6, title: 'AI expense intelligence', description: 'LangChain RAG pipelines and a Shariah-compliant multi-agent advisory chatbot turn raw transactions into guidance.', tech: ['LangChain', 'RAG'], icon: 'lucide:brain' },
      { step: 7, title: 'Cache-first delivery', description: 'Redis-backed reads reduce repeated aggregation work when serving financial views to customer applications.', tech: ['Redis'], icon: 'lucide:zap' },
    ],
  },
  techDecisions: [
    { area: 'Core services', choice: 'Golang', rationale: 'High-performance communication and predictable latency for the services on the critical financial path.' },
    { area: 'Event processing', choice: 'Kafka + RabbitMQ', rationale: 'Kafka for the durable, replayable event backbone; RabbitMQ for targeted fan-out where routing matters more than retention.' },
    { area: 'Read performance', choice: 'Redis cache-first', rationale: 'Aggregated financial views are read far more often than they change, making caching the highest-leverage optimisation available.' },
    { area: 'Persistence', choice: 'Polyglot by design', rationale: 'Bank integrations dictated the engines; the service layer absorbed that complexity so product teams never had to.' },
  ],
  achievements: [
    { title: 'Connected financial data', description: 'Different database technologies brought together behind consistent service contracts.', icon: 'lucide:database' },
    { title: 'Cache-backed APIs', description: 'Redis supports responsive reads for frequently accessed financial views.', icon: 'lucide:zap' },
    { title: 'Production operations', description: 'GCP infrastructure work and observability support the backend service ecosystem.', icon: 'lucide:cloud' },
    { title: 'Financial technology ecosystem', description: 'Hysab Kytab names Temenos and Interswitch among its technology partners.', icon: 'lucide:building-2' },
  ],
  scalability: [
    'Event-driven aggregation keeps slow bank calls off the request path',
    'gRPC between services for low-overhead internal communication',
    'Kafka consumer groups per domain',
    'Redis cache-first reads for customer-facing views',
    'Independently scalable services per banking integration',
  ],
  security: ['End-to-end encryption implemented in Golang for financial payloads', 'Enforced REST and gRPC security standards across services', 'Audit trails built on the Kafka event log', 'Real-time monitoring and alerting on financial event streams'],
  stack: ['Golang', 'NestJS', 'Spring Boot', 'Apache Kafka', 'RabbitMQ', 'gRPC', 'Redis', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'LangChain', 'GCP'],
  featured: true,
  order: 2,
  accent: 'primary-8',
  icon: 'lucide:landmark',
}
