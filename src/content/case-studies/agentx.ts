import type { CaseStudy } from './types'

export const agentx: CaseStudy = {
  slug: 'agentx',
  meta: {
    title: 'AgentX: AI app builder, from prompt to product',
    description: 'An AI product-building workspace with multi-agent website generation, Figma imports, editable code, web and mobile previews, and publishing tools.',
  },
  hero: {
    eyebrow: 'AI Platform · Product Engineering',
    title: 'AgentX',
    subtitle: 'Describe an idea, shape it in a live preview, and keep control of the code. An AI workspace that connects building, editing and publishing.',
    role: 'Software Architecture & Integrations Lead',
    links: [{ label: 'Explore AgentX', href: 'https://agentx.teamx.ae', icon: 'lucide:external-link' }],
  },
  stats: [
    { value: 'Web + mobile', label: 'Project experiences', description: 'React websites and Flutter mobile apps with previews' },
    { value: 'Real code', label: 'Editable output', description: 'Source files, an integrated editor and version history' },
    { value: 'Connected', label: 'From idea to publish', description: 'Prompts, designs, integrations and publishing in one workspace' },
  ],
  overview: {
    heading: 'An idea becomes something you can use',
    paragraphs: [
      'AgentX gives people a place to describe a product, see it take shape and refine it through conversation. The workspace combines website and mobile app creation, Figma imports, live previews and an editor for the generated code.',
      'My role focused on software architecture, integrations and engineering direction. The work connects the AI building process with the practical parts of a product: shared agent execution, external services, preview environments, version history and publishing.',
    ],
  },
  problems: [
    {
      title: 'From a brief to a build',
      description: 'Turn an open-ended idea into pages, features and a clear design direction that people can review as the product takes shape.',
      icon: 'lucide:message-square-code',
    },
    {
      title: 'Agents that work together',
      description: 'Coordinate research, planning and page generation with shared foundations, defined file ownership and checks between stages.',
      icon: 'lucide:workflow',
    },
    {
      title: 'Control after generation',
      description: 'Keep the code accessible, changes versioned and the result previewable, so users can keep improving what the AI creates.',
      icon: 'lucide:code',
    },
  ],
  architecture: {
    heading: 'The pieces behind the experience',
    intro: 'A React workspace connects to a NestJS backend for AI generation, project state, integrations and preview management.',
    layers: [
      {
        title: 'Product workspace',
        caption: 'Describe, review and edit',
        nodes: [
          { name: 'Chat & project setup', tech: 'React · Vite', icon: 'lucide:message-square-code' },
          { name: 'Design import', tech: 'Figma', icon: 'lucide:figma' },
          { name: 'Code & version history', tech: 'TypeScript · Git', icon: 'lucide:code' },
        ],
      },
      {
        title: 'AI building pipeline',
        caption: 'Shared execution, focused responsibilities',
        nodes: [
          { name: 'Research & planning', tech: 'Website blueprint', icon: 'lucide:search' },
          { name: 'Foundation & page builders', tech: 'Shared agent runtime', icon: 'lucide:workflow' },
          { name: 'Checks & repair', tech: 'Types · imports · coverage', icon: 'lucide:check-check' },
        ],
      },
      {
        title: 'Platform services',
        caption: 'The application around the agents',
        nodes: [
          { name: 'API & live updates', tech: 'NestJS · Socket.IO', icon: 'lucide:server' },
          { name: 'Tool integrations', tech: 'AI SDK · MCP', icon: 'lucide:plug' },
          { name: 'Project state & jobs', tech: 'MongoDB · Redis · BullMQ', icon: 'lucide:database' },
        ],
      },
      {
        title: 'Preview & publishing',
        caption: 'See the result and take the next step',
        nodes: [
          { name: 'Website preview', tech: 'React · Vite', icon: 'lucide:monitor' },
          { name: 'Mobile preview', tech: 'Flutter', icon: 'lucide:smartphone' },
          { name: 'Website publishing', tech: 'Docker · custom domains', icon: 'lucide:rocket' },
        ],
      },
    ],
  },
  pipelineMini: [
    { step: 1, title: 'Describe', description: 'Prompt, template or design', icon: 'lucide:message-square-code' },
    { step: 2, title: 'Plan', description: 'Pages, features & direction', icon: 'lucide:workflow' },
    { step: 3, title: 'Build', description: 'Code & connected services', icon: 'lucide:code' },
    { step: 4, title: 'Review', description: 'Preview, refine & publish', icon: 'lucide:rocket' },
  ],
  pipeline: {
    heading: 'From an idea to a working preview',
    intro: 'Users can build directly or review a plan first. Complete website builds use a staged multi-agent process, with checks before the result reaches the preview.',
    steps: [
      { step: 1, title: 'Choose a starting point', description: 'Describe the idea, select a template or import a Figma frame. Project setup captures the intended pages, features and languages.', tech: ['React', 'Figma API'], icon: 'lucide:message-square-code' },
      { step: 2, title: 'Set the direction', description: 'For a complete website build, research and architecture stages establish the design direction, page structure, data needs and work packages.', tech: ['AI SDK', 'Multi-agent planning'], icon: 'lucide:workflow' },
      {
        step: 3,
        title: 'Build on shared foundations',
        description: 'The foundation stage sets up shared components and contracts. Page builders then work in parallel within assigned files, using a common agent runtime.',
        tech: ['TypeScript', 'Shared agent runtime'],
        icon: 'lucide:code',
      },
      {
        step: 4,
        title: 'Check and refine',
        description: 'Syntax, imports, types and page coverage are checked. Repair passes address detected problems, while the workspace keeps the generated files available for review.',
        tech: ['TypeScript', 'QA checks'],
        icon: 'lucide:check-check',
      },
      {
        step: 5,
        title: 'Preview and continue',
        description: 'Users review a web or mobile preview, ask for changes, inspect code and revisit versions. Website publishing connects the finished build to hosting and a custom domain.',
        tech: ['Vite', 'Flutter', 'Git', 'Docker'],
        icon: 'lucide:rocket',
      },
    ],
  },
  techDecisions: [
    { area: 'Web workspace', choice: 'React & Vite', rationale: 'Supports a responsive chat, preview and editing experience, with shared UI across the web and desktop codebase.' },
    { area: 'Backend', choice: 'NestJS & Socket.IO', rationale: 'Keeps project APIs, integrations and long-running build updates connected through a typed service layer.' },
    { area: 'Agent execution', choice: 'Shared runtime with staged builders', rationale: 'Separates pipeline decisions from file writes, continuation passes, ownership rules and resource budgets.' },
    { area: 'Integrations', choice: 'Figma, MCP & provider APIs', rationale: 'Brings design context and external services into the building workflow without requiring users to move between disconnected tools.' },
    { area: 'Preview & release', choice: 'Vite, Flutter & Docker', rationale: 'Provides previews suited to each project type, with a separate publishing path for hosted websites.' },
  ],
  achievements: [
    { title: 'A connected building workspace', description: 'Project setup, conversation, live previews and editing sit together in one experience.', icon: 'lucide:layout-dashboard' },
    { title: 'Designs as a starting point', description: 'Figma integration brings selected frames into the generation workflow.', icon: 'lucide:figma' },
    { title: 'Reviewable generated code', description: 'Users can inspect and edit source files, follow build progress and return to previous versions.', icon: 'lucide:code' },
    { title: 'Coordinated website builds', description: 'Research, architecture, parallel page generation and repair run through a shared execution model.', icon: 'lucide:workflow' },
  ],
  stack: ['React', 'Vite', 'TypeScript', 'NestJS', 'AI SDK', 'Multi-agent systems', 'MCP', 'Figma API', 'Flutter', 'MongoDB', 'Redis', 'BullMQ', 'Socket.IO', 'Docker'],
  featured: true,
  order: 4,
  accent: 'primary-6',
  icon: 'lucide:bot',
}
