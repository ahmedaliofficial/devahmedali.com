export type Service = {
  title: string
  description: string
  outcomes: string[]
  icon: string
  /** Accent token from assets/css/_config.css */
  accent: string
}

export const services: Service[] = [
  {
    title: 'Solution architecture & system design',
    description: 'The diagram before the code. I map your domain into services, boundaries and data flows that a team can actually build and own.',
    outcomes: ['Architecture reviews', 'Domain-driven service boundaries', 'Migration and modernisation plans'],
    icon: 'lucide:drafting-compass',
    accent: 'primary',
  },
  {
    title: 'Backend & API engineering',
    description: 'Production backends in NestJS, Golang, Spring Boot and FastAPI — typed, tested and documented, with REST and gRPC contracts that hold up.',
    outcomes: ['Microservices and monoliths', 'REST and gRPC APIs', 'Database design and optimisation'],
    icon: 'lucide:server',
    accent: 'primary-8',
  },
  {
    title: 'Event-driven & distributed systems',
    description: 'Kafka and RabbitMQ pipelines that absorb spikes, survive failure and stay idempotent when several replicas process the same event.',
    outcomes: ['Kafka and RabbitMQ pipelines', 'Idempotency and deduplication', 'Retry, circuit breakers and DLQs'],
    icon: 'lucide:git-branch',
    accent: 'primary-1',
  },
  {
    title: 'Infrastructure & scaling',
    description: 'Kubernetes, Docker and CI/CD that make deployment boring — plus the caching and observability work that makes systems cheaper and faster.',
    outcomes: ['Kubernetes and Docker', 'CI/CD with Jenkins and GitHub Actions', 'Cost optimisation and observability'],
    icon: 'lucide:cloud',
    accent: 'primary-2',
  },
  {
    title: 'AI systems that reach production',
    description: 'RAG pipelines, multi-agent systems and MCP tool orchestration built as real services — with evaluation, isolation and failure paths, not a demo notebook.',
    outcomes: ['RAG and vector search', 'Multi-agent orchestration', 'MCP and tool integration'],
    icon: 'lucide:brain-circuit',
    accent: 'primary-6',
  },
  {
    title: 'MVPs & cross-platform products',
    description: 'Zero to launched, without architecture you have to throw away at the first sign of traction. Web, desktop and everything behind them.',
    outcomes: ['Next.js and React web apps', 'Tauri and Rust desktop agents', 'Launch-ready infrastructure'],
    icon: 'lucide:rocket',
    accent: 'primary-4',
  },
]
