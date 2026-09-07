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

/** Each study picks an accent token from assets/css/_config.css. Every variant is spelled
 *  out per accent rather than composed from the token name, so Tailwind sees whole classes. */
type AccentClasses = {
  /** Blurred colour wash behind the card */
  glow: string
  /** Tinted disc behind the anchor icon */
  tint: string
  /** Solid fill for the eyebrow dot */
  solid: string
  /** Solid fill the arrow button picks up on hover */
  solidHover: string
  /** via-* stop for the hairline that draws across the card top on hover */
  rule: string
  /** Border the card root picks up on its own hover (not group-hover: the root is the group) */
  border: string
}

const accents: Record<string, AccentClasses> = {
  primary: { glow: 'bg-primary/20', tint: 'bg-primary/10 text-primary', solid: 'bg-primary', solidHover: 'group-hover:bg-primary', rule: 'via-primary', border: 'hover:border-primary/40' },
  'primary-1': { glow: 'bg-primary-1/20', tint: 'bg-primary-1/10 text-primary-1', solid: 'bg-primary-1', solidHover: 'group-hover:bg-primary-1', rule: 'via-primary-1', border: 'hover:border-primary-1/40' },
  'primary-2': { glow: 'bg-primary-2/20', tint: 'bg-primary-2/10 text-primary-2', solid: 'bg-primary-2', solidHover: 'group-hover:bg-primary-2', rule: 'via-primary-2', border: 'hover:border-primary-2/40' },
  'primary-6': { glow: 'bg-primary-6/20', tint: 'bg-primary-6/10 text-primary-6', solid: 'bg-primary-6', solidHover: 'group-hover:bg-primary-6', rule: 'via-primary-6', border: 'hover:border-primary-6/40' },
  'primary-8': { glow: 'bg-primary-8/20', tint: 'bg-primary-8/10 text-primary-8', solid: 'bg-primary-8', solidHover: 'group-hover:bg-primary-8', rule: 'via-primary-8', border: 'hover:border-primary-8/40' },
}

/** Same hairline grid the hero uses, masked back towards the glow in the top-right corner. */
const gridTexture = {
  backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
  backgroundSize: '48px 48px',
  maskImage: 'radial-gradient(ellipse 70% 90% at 88% 0%, black, transparent)',
  WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 88% 0%, black, transparent)',
}

const CaseStudyCard = ({ study, size = 'default', className = '' }: CaseStudyCardProps) => {
  const href = `/work/${study.slug}`
  const accent = accents[study.accent] ?? accents.primary

  // Cap the chips so the row (overflow chip included) stays a single line at every width
  const stackLimit = size === 'large' ? 6 : 3
  const stack = study.stack.slice(0, stackLimit)
  const stackOverflow = study.stack.length - stack.length

  if (size === 'large') {
    return (
      <Link href={href} className={`bg-default-900 group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${className}`}>
        <span aria-hidden="true" className="absolute inset-0 opacity-[0.07]" style={gridTexture} />
        <span aria-hidden="true" className={`absolute -top-24 -right-24 size-72 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:size-96 ${accent.glow}`} />
        <span aria-hidden="true" className={`absolute -bottom-32 -left-24 size-72 rounded-full opacity-30 blur-3xl ${accent.glow}`} />

        <div className="relative flex grow flex-col">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {study.icon ? <Icon icon={study.icon} className="size-4" /> : <span aria-hidden="true" className={`size-1.5 rounded-full ${accent.solid}`} />}
              {study.hero.eyebrow}
            </span>

            {study.hero.period && (
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/50">
                <Icon icon="lucide:calendar-days" className="size-3.5 shrink-0" />
                {study.hero.period}
              </span>
            )}
          </div>

          <h3 className="font-heading mt-5 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">{study.hero.title}</h3>
          <p className="mt-3 max-w-2xl text-base text-white/70 md:text-lg">{study.hero.subtitle}</p>

          {study.pipelineMini && <PipelineMini steps={study.pipelineMini} tone="dark" className="mt-8" />}

          <div className="mt-8 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <Chip key={tech} tone="dark">
                {tech}
              </Chip>
            ))}
            {stackOverflow > 0 && <Chip tone="dark">+{stackOverflow} more</Chip>}
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {study.stats.slice(0, 3).map((stat, index) => (
                // Dividers only from sm up, where the row is guaranteed not to wrap
                <div key={index} className={index > 0 ? 'sm:border-s sm:border-white/10 sm:ps-6 md:ps-10' : ''}>
                  <p className="font-heading text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <span className="text-default-900 ms-auto inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium transition-transform duration-300 group-hover:scale-95">
              Read case study
              <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`border-default-200 group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${accent.border} ${className}`}>
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-transparent to-transparent transition-transform duration-500 group-hover:scale-x-100 ${accent.rule}`} />
      <span aria-hidden="true" className={`absolute -top-20 -right-20 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`} />

      <div className="relative flex grow flex-col">
        <div className="flex items-center gap-3">
          {study.icon && (
            <span className={`inline-grid size-11 shrink-0 place-items-center rounded-full ${accent.tint}`}>
              <Icon icon={study.icon} className="size-5" />
            </span>
          )}
          <p className="text-default-500 text-xs font-medium tracking-wide uppercase">{study.hero.eyebrow}</p>
        </div>

        <h3 className="font-heading text-default-900 mt-5 text-2xl font-semibold md:text-3xl">{study.hero.title}</h3>
        <p className="text-default-500 mt-2.5 grow text-base">{study.hero.subtitle}</p>

        <div className="border-default-200 mt-6 grid grid-cols-2 border-t pt-5">
          {study.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className={index > 0 ? 'border-default-200 border-s ps-5' : ''}>
              <p className="font-heading text-default-900 text-xl font-semibold md:text-2xl">{stat.value}</p>
              {/* Two lines are reserved so a label that wraps doesn't shift this
                  block up relative to the cards beside it */}
              <p className="text-default-500 mt-0.5 min-h-10 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
          {stackOverflow > 0 && <Chip tone="outline">+{stackOverflow}</Chip>}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-default-900 text-sm font-medium">Read case study</span>
          <span className={`border-default-200 text-default-900 inline-grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-300 group-hover:border-transparent group-hover:text-white ${accent.solidHover}`}>
            <Icon icon="lucide:arrow-up-right" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CaseStudyCard
