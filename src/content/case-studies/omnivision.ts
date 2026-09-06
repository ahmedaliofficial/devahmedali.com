import type { CaseStudy } from './types'

export const omnivision: CaseStudy = {
  slug: 'omnivision',
  meta: {
    title: 'OmniVision — Real-time AI workplace safety',
    description: 'A real-time AI workplace safety platform: Python/FastAPI vision inference, Kafka ingestion pipelines and RabbitMQ fan-out delivering WhatsApp and email alerts within seconds of an incident.',
  },
  hero: {
    eyebrow: 'Jaffer Business Systems · Computer Vision',
    title: 'OmniVision',
    subtitle: 'Real-time AI workplace safety — enterprise smoke and anomaly detection where the entire value of the system is measured in seconds.',
    role: 'Backend & Platform Engineer',
    period: 'Oct 2024 – Apr 2026',
    links: [{ label: 'jbs.live/omnivision', href: 'https://jbs.live/omnivision', icon: 'lucide:external-link' }],
  },
  stats: [
    { value: 'Seconds', label: 'Incident to alert', description: 'From detection to a phone in someone’s hand' },
    { value: '24/7', label: 'Continuous inference', description: 'Always-on monitoring across enterprise sites' },
    { value: '2', label: 'Alert channels', description: 'WhatsApp and email fan-out per incident' },
  ],
  overview: {
    heading: 'A safety system is only worth the seconds it saves',
    paragraphs: [
      'OmniVision watches enterprise sites for smoke, safety anomalies and operational events, and tells someone about it immediately. Unlike an analytics product, its usefulness collapses if an alert arrives late — a detection that lands five minutes after a fire started is not a feature.',
      'That single constraint drove the architecture. Video inference is computationally heavy and bursty; alerting has to be immediate and reliable. Coupling them directly would mean either a slow alert or a stalled pipeline, so they were separated by an event backbone from the start.',
      'I built the Python/FastAPI backend with Kafka ingestion pipelines and RabbitMQ fan-out, so detection, alerting and analytics each scale on their own terms and one slow channel never delays another.',
    ],
  },
  problems: [
    {
      title: 'Latency is the product',
      description: 'Detection has to reach a human within seconds, or the system has no safety value at all.',
      icon: 'lucide:timer',
    },
    {
      title: 'Bursty inference load',
      description: 'Continuous video streams create heavy, uneven compute that must not stall alert delivery.',
      icon: 'lucide:activity',
    },
    {
      title: 'Reliable multi-channel delivery',
      description: 'Alerts must reach WhatsApp and email independently, so one failing channel never blocks the other.',
      icon: 'lucide:bell-ring',
    },
  ],
  pipelineMini: [
    { step: 1, title: 'Observe', description: 'Camera streams', icon: 'lucide:video' },
    { step: 2, title: 'Detect', description: 'FastAPI inference', icon: 'lucide:scan-eye' },
    { step: 3, title: 'Distribute', description: 'Kafka + RabbitMQ', icon: 'lucide:git-branch' },
    { step: 4, title: 'Alert', description: 'WhatsApp & email', icon: 'lucide:bell-ring' },
  ],
  pipeline: {
    heading: 'From camera frame to someone’s phone',
    intro: 'Every stage after detection is designed to shed latency rather than add it. The event bus is what lets heavy inference and instant alerting coexist.',
    steps: [
      { step: 1, title: 'Camera stream ingest', description: 'Continuous site video feeds arrive at the platform for sampling and analysis.', tech: ['Streaming'], icon: 'lucide:video' },
      { step: 2, title: 'Vision inference', description: 'A Python/FastAPI service runs smoke detection and anomaly models against sampled frames.', tech: ['Python', 'FastAPI', 'Computer vision'], icon: 'lucide:scan-eye' },
      { step: 3, title: 'Detection event published', description: 'A confirmed detection becomes an event on the Kafka ingestion pipeline rather than a direct call to anything.', tech: ['Apache Kafka'], icon: 'lucide:git-branch' },
      { step: 4, title: 'RabbitMQ fan-out', description: 'One incident routes to multiple independent consumers, so WhatsApp and email delivery never block each other.', tech: ['RabbitMQ'], icon: 'lucide:split' },
      { step: 5, title: 'Alert delivery', description: 'WhatsApp and email notifications reach responsible staff within seconds of the incident.', tech: ['WhatsApp API', 'Email'], icon: 'lucide:bell-ring' },
      { step: 6, title: 'Operational analytics', description: 'The same event stream feeds dashboards and reporting, giving sites a record and trends without a second pipeline.', tech: ['Analytics'], icon: 'lucide:chart-line' },
    ],
  },
  techDecisions: [
    { area: 'Inference service', choice: 'Python + FastAPI', rationale: 'Keeps the platform next to the vision and ML ecosystem while serving inference over a fast, typed HTTP layer.' },
    { area: 'Event backbone', choice: 'Apache Kafka', rationale: 'Decouples heavy, bursty inference from time-critical alerting, so neither can stall the other.' },
    { area: 'Alert routing', choice: 'RabbitMQ fan-out', rationale: 'One detection reaches several delivery channels independently, with per-channel failure isolation.' },
  ],
  achievements: [
    { title: 'Seconds from incident to alert', description: 'WhatsApp and email notifications delivered within seconds of detection.', icon: 'lucide:timer' },
    { title: 'Decoupled inference and alerting', description: 'Kafka pipelines keep compute-heavy detection off the alert delivery path.', icon: 'lucide:git-branch' },
    { title: 'Enterprise smoke detection', description: 'Deployed for real workplace safety monitoring, not a proof of concept.', icon: 'lucide:shield-check' },
    { title: 'Analytics from the same stream', description: 'Operational reporting reuses the event log instead of duplicating the pipeline.', icon: 'lucide:chart-line' },
  ],
  scalability: [
    'Inference workers scale independently of alert delivery',
    'Kafka absorbs detection bursts without backpressure on cameras',
    'RabbitMQ fan-out isolates failure per alert channel',
    'One event stream serves both alerting and analytics',
  ],
  stack: ['Python', 'FastAPI', 'Apache Kafka', 'RabbitMQ', 'Computer vision', 'Redis', 'GCP', 'Docker'],
  featured: true,
  order: 3,
  accent: 'primary-1',
}
