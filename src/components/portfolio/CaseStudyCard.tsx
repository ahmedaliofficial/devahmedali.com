import Chip from '@/components/ui/Chip'
import type { CaseStudy } from '@/content/case-studies/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import PipelineMini from './PipelineMini'

type CaseStudyCardProps = {
  study: CaseStudy
  size?: 'large' | 'default'
  className?: string
}

const glowClasses: Record<string, string> = {
  primary: 'bg-primary/20',
  'primary-1': 'bg-primary-1/20',
  'primary-2': 'bg-primary-2/20',
  'primary-6': 'bg-primary-6/20',
  'primary-8': 'bg-primary-8/20',
}

const CaseStudyCard = ({ study, size = 'default', className = '' }: CaseStudyCardProps) => {
  const href = `/work/${study.slug}`

  if (size === 'large') {
    return (
      <Link href={href} className={`bg-default-900 group relative flex flex-col overflow-hidden rounded-3xl p-6 md:p-10 ${className}`}>
        <span aria-hidden="true" className={`absolute -top-24 -right-24 size-72 rounded-full blur-3xl ${glowClasses[study.accent] ?? glowClasses.primary}`} />

        <div className="relative flex grow flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium text-white backdrop-blur-md">{study.hero.eyebrow}</span>
          </div>

          <h3 className="font-heading mt-5 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">{study.hero.title}</h3>
          <p className="mt-3 max-w-2xl text-base text-white/70 md:text-lg">{study.hero.subtitle}</p>

          {study.pipelineMini && <PipelineMini steps={study.pipelineMini} tone="dark" className="mt-8" />}

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {study.stats.slice(0, 3).map((stat, index) => (
                <div key={index}>
                  <p className="font-heading text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
              Read case study
              <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`border-default-200 group flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8 ${className}`}>
      <p className="text-default-500 text-xs font-medium tracking-wide uppercase">{study.hero.eyebrow}</p>

      <h3 className="font-heading text-default-900 mt-3 text-2xl font-semibold md:text-3xl">{study.hero.title}</h3>
      <p className="text-default-500 mt-2.5 grow text-base">{study.hero.subtitle}</p>

      <div className="border-default-200 mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t pt-5">
        {study.stats.slice(0, 2).map((stat, index) => (
          <div key={index}>
            <p className="font-heading text-default-900 text-xl font-semibold md:text-2xl">{stat.value}</p>
            <p className="text-default-500 mt-0.5 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {study.stack.slice(0, 5).map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      <span className="text-default-900 mt-6 inline-flex items-center gap-2 text-sm font-medium">
        Read case study
        <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}

export default CaseStudyCard
