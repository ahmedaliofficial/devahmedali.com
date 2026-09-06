export type FlowStep = {
  title: string
  detail: string
  icon: string
}

export type ReferenceFlow = {
  id: string
  title: string
  description: string
  icon: string
  accent: string
  steps: FlowStep[]
}

/** Reference architectures for the kinds of systems clients ask for most,
 *  shown on the homepage so the process is visible before a call. */
export const referenceFlows: ReferenceFlow[] = [
  {
    id: 'rag',
    title: 'AI assistant / RAG system',
    description: 'Answers from your own documents, with citations and a real answer when it does not know.',
    icon: 'lucide:message-square-code',
    accent: 'primary-6',
    steps: [
      { title: 'Source data', detail: 'Docs, DBs, APIs', icon: 'lucide:folder-open' },
      { title: 'Chunk & embed', detail: 'Structure-aware', icon: 'lucide:scissors' },
      { title: 'Vector store', detail: 'Indexed + metadata', icon: 'lucide:database' },
      { title: 'Retrieve', detail: 'Top-k + rerank', icon: 'lucide:search' },
      { title: 'Generate', detail: 'LLM + citations', icon: 'lucide:sparkles' },
      { title: 'Evaluate', detail: 'Recall + guardrails', icon: 'lucide:shield-check' },
    ],
  },
  {
    id: 'agents',
    title: 'Multi-agent & automation platform',
    description: 'Agents that complete a process by calling real tools, with every step reviewable rather than one opaque generation.',
    icon: 'lucide:workflow',
    accent: 'primary',
    steps: [
      { title: 'Trigger', detail: 'Prompt, event or schedule', icon: 'lucide:zap' },
      { title: 'Plan', detail: 'Decompose the task', icon: 'lucide:list-checks' },
      { title: 'Specialist agents', detail: 'One decision each', icon: 'lucide:users' },
      { title: 'Tool calls', detail: 'MCP + your APIs', icon: 'lucide:plug' },
      { title: 'Verify', detail: 'Checks before commit', icon: 'lucide:circle-check' },
      { title: 'Act & log', detail: 'Write back + audit', icon: 'lucide:save' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce & platform backend',
    description: 'Storefront, checkout and everything behind it, built so a traffic spike is a scaling event, not an outage.',
    icon: 'lucide:shopping-cart',
    accent: 'primary-1',
    steps: [
      { title: 'Storefront', detail: 'Next.js + cache', icon: 'lucide:store' },
      { title: 'Catalog & search', detail: 'Indexed reads', icon: 'lucide:search' },
      { title: 'Cart & checkout', detail: 'Idempotent writes', icon: 'lucide:shopping-bag' },
      { title: 'Payments', detail: 'Gateway + webhooks', icon: 'lucide:credit-card' },
      { title: 'Order events', detail: 'Queue-backed', icon: 'lucide:git-branch' },
      { title: 'ERP / fulfilment', detail: 'Synced + reconciled', icon: 'lucide:truck' },
    ],
  },
  {
    id: 'data',
    title: 'Analytics & intelligence engine',
    description: 'Raw operational events turned into numbers people trust, with dashboards that stay fast as volume grows.',
    icon: 'lucide:chart-line',
    accent: 'primary-8',
    steps: [
      { title: 'Ingest', detail: 'Events + integrations', icon: 'lucide:download' },
      { title: 'Deduplicate', detail: 'Idempotency keys', icon: 'lucide:copy-check' },
      { title: 'Batch & store', detail: 'Bulk writes', icon: 'lucide:layers' },
      { title: 'Enrich', detail: 'Classify + score', icon: 'lucide:sparkles' },
      { title: 'Aggregate', detail: 'Pre-computed views', icon: 'lucide:sigma' },
      { title: 'Serve', detail: 'Cache-first APIs', icon: 'lucide:gauge' },
    ],
  },
]
