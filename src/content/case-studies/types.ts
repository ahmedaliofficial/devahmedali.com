/** Shared contract for every case study. Optional sections render conditionally
 *  in the detail template, so a smaller project needs only the required fields. */

export type CaseStudyStat = {
  value: string
  label: string
  description?: string
}

export type PipelineStep = {
  step: number
  title: string
  description: string
  tech?: string[]
  icon?: string
}

export type ServiceComponent = {
  name: string
  role: string
  tech: string[]
  icon: string
}

export type TechDecision = {
  area: string
  choice: string
  rationale: string
}

export type Achievement = {
  title: string
  description: string
  icon?: string
}

export type CaseStudyProblem = {
  title: string
  description: string
  icon?: string
}

export type CaseStudyLink = {
  label: string
  href: string
  icon: string
}

/** Maps to the accent color tokens already defined in assets/css/_config.css */
export type CaseStudyAccent = 'primary' | 'primary-1' | 'primary-2' | 'primary-6' | 'primary-8'

export type CaseStudy = {
  slug: string
  meta: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    role: string
    period?: string
    links?: CaseStudyLink[]
  }
  stats: CaseStudyStat[]
  overview: {
    heading: string
    paragraphs: string[]
  }
  problems: CaseStudyProblem[]
  /** Full service map — only larger platforms need one */
  serviceComponents?: ServiceComponent[]
  /** 4-step summary used on cards and the home teaser */
  pipelineMini?: PipelineStep[]
  pipeline: {
    heading: string
    intro?: string
    steps: PipelineStep[]
  }
  techDecisions?: TechDecision[]
  achievements: Achievement[]
  scalability?: string[]
  security?: string[]
  /** Tech names rendered as chips */
  stack: string[]
  featured: boolean
  order: number
  accent: CaseStudyAccent
}
