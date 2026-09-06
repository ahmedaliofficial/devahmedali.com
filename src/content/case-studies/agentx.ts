import type { CaseStudy } from './types'

export const agentx: CaseStudy = {
  slug: 'agentx',
  meta: {
    title: 'AgentX — Multi-agent AI full-stack app builder',
    description: 'A multi-agent LangChain and FastAPI platform that generates production-ready full-stack applications from natural language, with Figma-to-code, Supabase provisioning and MCP tool orchestration.',
  },
  hero: {
    eyebrow: 'TeamX Pakistan · AI Platform',
    title: 'AgentX',
    subtitle: 'A multi-agent platform that turns a natural language prompt into a production-ready full-stack application — and code a human can still maintain afterwards.',
    role: 'Senior Technical Officer · Architecture & Integrations',
    period: 'Apr 2026 – Present',
    links: [{ label: 'agentx.teamx.ae', href: 'https://agentx.teamx.ae', icon: 'lucide:external-link' }],
  },
  stats: [
    { value: '20+', label: 'Engineers led', description: 'Across AgentX and client product lines' },
    { value: '50%+', label: 'Fewer integration issues', description: 'From clear service boundaries and ownership' },
    { value: 'Phase 1', label: 'Complete', description: 'Shipped and generating applications' },
  ],
  overview: {
    heading: 'Generated code still has to be code someone can own',
    paragraphs: [
      'AgentX generates production-ready full-stack applications from natural language prompts. It is a multi-agent system built on LangChain and FastAPI, where specialised agents handle planning, schema design, UI generation and tool orchestration rather than one model attempting everything at once.',
      'The interesting problem is not generation — it is the gap between an abstract requirement and a concrete database schema and component tree. A prompt like “let users book appointments” implies entities, relationships, states and screens that nobody stated, and getting them wrong compounds through every file the system writes.',
      'I built the integration layer: Figma-to-code, Supabase provisioning, and MCP tool orchestration. The constraint I designed against throughout was maintainability — generated output that a human team has to inherit is only valuable if it looks like code they would have written.',
    ],
  },
  problems: [
    {
      title: 'Ambiguous requirements',
      description: 'Mapping abstract natural language onto concrete database schemas and UI components without inventing the wrong model.',
      icon: 'lucide:message-square-code',
    },
    {
      title: 'Agent coordination',
      description: 'Structuring autonomous agents so their outputs compose into one coherent application rather than conflicting fragments.',
      icon: 'lucide:workflow',
    },
    {
      title: 'Human maintainability',
      description: 'Generated code has to be readable and ownable by an engineering team after the agents finish.',
      icon: 'lucide:users',
    },
  ],
  pipelineMini: [
    { step: 1, title: 'Interpret', description: 'Prompt or Figma', icon: 'lucide:message-square-code' },
    { step: 2, title: 'Plan', description: 'Schema & scope', icon: 'lucide:workflow' },
    { step: 3, title: 'Generate', description: 'Agent codegen', icon: 'lucide:code' },
    { step: 4, title: 'Provision', description: 'Supabase & deploy', icon: 'lucide:rocket' },
  ],
  pipeline: {
    heading: 'From prompt to running application',
    intro: 'Each agent owns a narrow decision. Splitting the work this way is what makes the output reviewable — you can point at the stage that got something wrong instead of re-rolling the whole generation.',
    steps: [
      { step: 1, title: 'Natural language or Figma input', description: 'The system accepts a written prompt or an existing Figma design as the starting specification.', tech: ['LangChain', 'Figma API'], icon: 'lucide:message-square-code' },
      { step: 2, title: 'Planning agent', description: 'Requirements are decomposed into entities, relationships and screens — the step that decides whether everything downstream is coherent.', tech: ['Multi-agent', 'LangChain'], icon: 'lucide:workflow' },
      { step: 3, title: 'Schema design', description: 'Concrete database schemas are derived from the plan, with relationships and constraints made explicit rather than implied.', tech: ['Schema generation', 'Supabase'], icon: 'lucide:database' },
      { step: 4, title: 'Specialised codegen agents', description: 'Separate agents generate backend services and UI components, each working within the shared plan.', tech: ['LangChain', 'FastAPI'], icon: 'lucide:code' },
      { step: 5, title: 'MCP tool orchestration', description: 'Agents call real tools through the Model Context Protocol, so they act on actual systems rather than describing intentions.', tech: ['MCP', 'Tool calling'], icon: 'lucide:plug' },
      { step: 6, title: 'Provisioning and preview', description: 'Supabase resources are provisioned and the generated application is assembled into a running, reviewable preview.', tech: ['Supabase', 'Next.js'], icon: 'lucide:rocket' },
    ],
  },
  techDecisions: [
    { area: 'Agent framework', choice: 'LangChain multi-agent', rationale: 'Narrow, specialised agents produce reviewable output; a single generalist agent produces something no one can debug.' },
    { area: 'Orchestration API', choice: 'Python FastAPI', rationale: 'Keeps the platform in the ecosystem where LLM tooling lives, with a fast typed service layer around it.' },
    { area: 'Tool access', choice: 'Model Context Protocol', rationale: 'A standard interface for agents to reach real tools, instead of bespoke glue per integration.' },
    { area: 'Backing platform', choice: 'Supabase', rationale: 'Generated applications get real auth, storage and a database provisioned automatically rather than stubs.' },
  ],
  achievements: [
    { title: 'Phase 1 shipped', description: 'A working multi-agent platform generating full-stack applications from prompts.', icon: 'lucide:rocket' },
    { title: 'Figma-to-code integration', description: 'Existing designs become a valid starting specification, not a manual re-draw.', icon: 'lucide:figma' },
    { title: 'MCP tool orchestration', description: 'Agents operate real tools through a standard protocol.', icon: 'lucide:plug' },
    { title: 'Leading 20+ engineers', description: 'Architecture standards and service boundaries that cut cross-team integration issues by over 50%.', icon: 'lucide:users' },
  ],
  stack: ['Python', 'FastAPI', 'LangChain', 'Multi-agent systems', 'MCP', 'Supabase', 'Next.js', 'Vector databases', 'Figma API'],
  featured: true,
  order: 4,
  accent: 'primary-6',
}
