export type SkillGroup = {
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'System design',
    icon: 'lucide:drafting-compass',
    items: ['Microservices architecture', 'Event-driven architecture', 'Domain-driven design', 'API gateway design', 'Service discovery', 'Scalability & high availability'],
  },
  {
    title: 'Backend & APIs',
    icon: 'lucide:server',
    items: ['NestJS', 'Node.js', 'Golang', 'Spring Boot', 'Python / FastAPI', 'TypeScript', 'PHP / Laravel', 'gRPC', 'REST'],
  },
  {
    title: 'Messaging & streaming',
    icon: 'lucide:git-branch',
    items: ['Apache Kafka', 'RabbitMQ', 'BullMQ', 'Redis', 'Socket.io'],
  },
  {
    title: 'AI & agent engineering',
    icon: 'lucide:brain-circuit',
    items: ['LangChain', 'LangGraph', 'LangSmith', 'Agent SDKs', 'Model Context Protocol', 'Custom MCP servers', 'RAG pipelines', 'Multi-agent systems', 'Vector databases', 'Prompt engineering', 'Evaluation & tracing'],
  },
  {
    title: 'Databases',
    icon: 'lucide:database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'SQL Server', 'SQLite', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'lucide:cloud',
    items: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Nginx', 'Jenkins', 'GitHub Actions', 'Cloudflare', 'CI/CD'],
  },
  {
    title: 'Frontend & desktop',
    icon: 'lucide:layout-dashboard',
    items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Rust (Tauri 2)'],
  },
]

/** Logos for the marquee strip (Iconify simple-icons set) */
export const techLogos: { name: string; icon: string }[] = [
  { name: 'NestJS', icon: 'simple-icons:nestjs' },
  { name: 'Go', icon: 'simple-icons:go' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'Python', icon: 'simple-icons:python' },
  { name: 'Rust', icon: 'simple-icons:rust' },
  { name: 'Apache Kafka', icon: 'simple-icons:apachekafka' },
  { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq' },
  { name: 'Redis', icon: 'simple-icons:redis' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'FastAPI', icon: 'simple-icons:fastapi' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Spring', icon: 'simple-icons:spring' },
  { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
  { name: 'Nginx', icon: 'simple-icons:nginx' },
  { name: 'Jenkins', icon: 'simple-icons:jenkins' },
  { name: 'Tauri', icon: 'simple-icons:tauri' },
]

/** Headline numbers shown directly under the hero */
export const headlineStats = [
  { value: '500+', label: 'Projects delivered', description: 'Web, ecommerce, CMS, ERP and AI platforms' },
  { value: '6+', label: 'Years engineering', description: 'FinTech, AI and SaaS at production scale' },
  { value: '100K+', label: 'Events per day', description: 'Kafka pipelines running in production' },
  { value: '20+', label: 'Engineers led', description: 'Across AI, ecommerce and CMS product lines' },
]

/** Measured outcomes shown on the dark approach section */
export const impactStats = [
  { value: '60%+', label: 'Lower read latency', description: 'Redis cache-first strategy on a FinTech platform' },
  { value: '25%', label: 'Cloud cost reduction', description: 'GCP rightsizing and observability work' },
  { value: '~70%', label: 'Less deploy effort', description: 'Kubernetes and Docker replacing manual releases' },
  { value: '50%+', label: 'Fewer integration issues', description: 'Clear service boundaries and ownership' },
]
