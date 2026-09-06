import type { CaseStudy } from './types'

export const hysabKytab: CaseStudy = {
  slug: 'hysab-kytab',
  meta: {
    title: 'Hysab Kytab: FinTech platform for digital banks',
    description: 'Backend architecture for a B2B/B2C personal finance platform serving digital banking leaders: Golang and NestJS microservices, Kafka pipelines handling 100K+ financial events per day, and five databases behind one service layer.',
  },
  hero: {
    eyebrow: 'FinTech · Personal Finance Platform',
    title: 'Hysab Kytab',
    subtitle: 'A B2B/B2C personal finance platform used by digital banks, where a rounding error is a customer complaint and downtime is a headline.',
    role: 'Backend Architecture & Distributed Systems',
    links: [{ label: 'Visit hysabkytab.com', href: 'https://hysabkytab.com', icon: 'lucide:external-link' }],
  },
  stats: [
    { value: '100K+', label: 'Financial events per day', description: 'Across a three-broker Kafka cluster' },
    { value: '5', label: 'Databases unified', description: 'PostgreSQL, MongoDB, MySQL, Oracle and SQL Server' },
    { value: '60%+', label: 'Lower read latency', description: 'From a Redis cache-first strategy' },
  ],
  overview: {
    heading: 'One financial picture from many disagreeing sources',
    paragraphs: [
      'Hysab Kytab gives banking customers a single view of their money, covering balances, spending, categories and insights, aggregated across multiple banks. It is delivered to digital banking leaders including Temenos and Interswitch, which means it inherits their reliability expectations rather than a startup’s.',
      'The core difficulty was consolidation. Every upstream source had its own database, its own format and its own idea of when data is correct: PostgreSQL, MongoDB, MySQL, Oracle and SQL Server all had to end up behind one coherent service layer without losing precision or slowing the app down.',
      'I architected a distributed microservices ecosystem in Golang and NestJS, using Golang for the performance-critical core services and event-driven processing to keep aggregation off the request path entirely.',
    ],
  },
  problems: [
    {
      title: 'Disparate data sources',
      description: 'Five database engines and multiple bank feeds had to become one low-latency, consistent financial picture.',
      icon: 'lucide:database',
    },
    {
      title: 'Precision under load',
      description: 'Financial data tolerates no drift, while still serving customer-facing apps at interactive speed.',
      icon: 'lucide:scale',
    },
    {
      title: 'Bank-grade availability',
      description: 'High availability and data integrity expectations set by enterprise banking clients, not by us.',
      icon: 'lucide:shield-check',
    },
  ],
  architecture: {
    heading: 'High-level architecture',
    intro: 'A polyglot backend hidden behind one coherent service layer, so the banking app never has to know which engine an answer came from.',
    layers: [
      {
        title: 'Client layer',
        caption: 'B2B bank integrations and B2C apps',
        nodes: [
          { name: 'Digital bank apps', tech: 'Temenos · Interswitch', icon: 'lucide:building-2' },
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
        caption: '100K+ financial events per day',
        nodes: [
          { name: 'Kafka cluster', tech: '3 brokers · audit & alerting', icon: 'lucide:git-branch' },
          { name: 'RabbitMQ', tech: 'Routed processing', icon: 'lucide:split' },
          { name: 'Redis', tech: 'Cache-first reads', icon: 'lucide:zap' },
        ],
      },
      {
        title: 'Data layer',
        caption: 'Five engines, one service contract',
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
      { step: 3, title: 'Kafka event backbone', description: 'Over 100,000 financial events a day flow through a three-broker cluster feeding monitoring, audit trails and real-time alerting.', tech: ['Apache Kafka', 'RabbitMQ'], icon: 'lucide:git-branch' },
      { step: 4, title: 'gRPC service mesh', description: 'NestJS, Golang and Spring Boot services communicate over gRPC, coordinated through Kafka and RabbitMQ.', tech: ['gRPC', 'NestJS', 'Spring Boot'], icon: 'lucide:network' },
      { step: 5, title: 'Multi-database persistence', description: 'PostgreSQL, MongoDB, Oracle and SQL Server unified behind one cohesive service layer, each used where it is genuinely the right tool.', tech: ['PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'], icon: 'lucide:database' },
      { step: 6, title: 'AI expense intelligence', description: 'LangChain RAG pipelines and a Shariah-compliant multi-agent advisory chatbot turn raw transactions into guidance.', tech: ['LangChain', 'RAG'], icon: 'lucide:brain' },
      { step: 7, title: 'Cache-first delivery', description: 'A Redis cache-first read strategy cut average read latency by more than 60%, keeping the customer app responsive.', tech: ['Redis'], icon: 'lucide:zap' },
    ],
  },
  techDecisions: [
    { area: 'Core services', choice: 'Golang', rationale: 'High-performance communication and predictable latency for the services on the critical financial path.' },
    { area: 'Event processing', choice: 'Kafka + RabbitMQ', rationale: 'Kafka for the durable, replayable event backbone; RabbitMQ for targeted fan-out where routing matters more than retention.' },
    { area: 'Read performance', choice: 'Redis cache-first', rationale: 'Aggregated financial views are read far more often than they change, making caching the highest-leverage optimisation available.' },
    { area: 'Persistence', choice: 'Polyglot by design', rationale: 'Bank integrations dictated the engines; the service layer absorbed that complexity so product teams never had to.' },
  ],
  achievements: [
    { title: '99.9% data integrity', description: 'Maintained across a five-engine database landscape serving financial applications.', icon: 'lucide:shield-check' },
    { title: '60%+ latency reduction', description: 'A Redis cache-first strategy measurably improved the customer-facing experience.', icon: 'lucide:zap' },
    { title: '25% lower cloud costs', description: 'GCP infrastructure optimisation and better observability, with no loss of reliability.', icon: 'lucide:trending-down' },
    { title: 'Trusted by digital banks', description: 'Delivered to global digital banking leaders including Temenos and Interswitch.', icon: 'lucide:building-2' },
  ],
  scalability: [
    'Event-driven aggregation keeps slow bank calls off the request path',
    'gRPC between services for low-overhead internal communication',
    'Three-broker Kafka cluster with consumer groups per domain',
    'Redis cache-first reads for customer-facing views',
    'Independently scalable services per banking integration',
  ],
  security: [
    'End-to-end encryption implemented in Golang for financial payloads',
    'Enforced REST and gRPC security standards across services',
    'Audit trails built on the Kafka event log',
    'Real-time monitoring and alerting on financial event streams',
  ],
  stack: ['Golang', 'NestJS', 'Spring Boot', 'Apache Kafka', 'RabbitMQ', 'gRPC', 'Redis', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'LangChain', 'GCP'],
  featured: true,
  order: 2,
  accent: 'primary-8',
}
