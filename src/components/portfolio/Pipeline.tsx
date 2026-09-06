import Chip from '@/components/ui/Chip'
import type { PipelineStep } from '@/content/case-studies/types'
import { Icon } from '@iconify/react'

type PipelineProps = {
  steps: PipelineStep[]
  tone?: 'light' | 'dark'
  className?: string
}

/** Vertical step flow: a single rail on mobile, alternating sides of a centre rail on desktop.
 *  Node and card share a grid row, so each step stays aligned at every breakpoint. */
const Pipeline = ({ steps, tone = 'light', className = '' }: PipelineProps) => {
  const isDark = tone === 'dark'

  const cardClasses = isDark ? 'border-white/10 bg-white/5 backdrop-blur-sm' : 'border-default-200 bg-white shadow-sm'
  const titleClasses = isDark ? 'text-white' : 'text-default-900'
  const bodyClasses = isDark ? 'text-white/70' : 'text-default-500'
  const nodeClasses = isDark ? 'bg-white text-default-900 ring-default-900' : 'bg-default-900 text-white ring-body-bg'
  const railClasses = isDark ? 'from-white/40 via-white/15 to-transparent' : 'from-primary/40 via-default-300 to-transparent'

  return (
    <ol className={`relative flex flex-col gap-6 lg:gap-10 ${className}`}>
      <span aria-hidden="true" className={`absolute inset-y-0 left-5 w-px bg-linear-to-b lg:left-1/2 ${railClasses}`} />

      {steps.map((step, index) => {
        const onLeft = index % 2 === 0

        return (
          <li key={step.step} className="relative grid grid-cols-[2.5rem_1fr] items-start gap-x-4 lg:grid-cols-[1fr_2.5rem_1fr] lg:gap-x-10">
            <div className="col-start-1 row-start-1 flex justify-center lg:col-start-2">
              <span className={`font-heading grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold ring-4 ${nodeClasses}`}>{step.step}</span>
            </div>

            <div className={`col-start-2 row-start-1 ${onLeft ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
              <div className={`rounded-2xl border p-5 transition-shadow duration-300 md:p-6 ${cardClasses} ${isDark ? '' : 'hover:shadow-md'}`}>
                <div className={`flex items-center gap-2.5 ${onLeft ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                  {step.icon && (
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-default-100 text-default-700'}`}>
                      <Icon icon={step.icon} className="size-4" />
                    </span>
                  )}
                  <h3 className={`font-heading text-base font-semibold md:text-lg ${titleClasses}`}>{step.title}</h3>
                </div>

                <p className={`mt-2.5 text-sm leading-relaxed md:text-base ${bodyClasses} ${onLeft ? 'lg:text-right' : ''}`}>{step.description}</p>

                {step.tech && step.tech.length > 0 && (
                  <div className={`mt-4 flex flex-wrap gap-1.5 ${onLeft ? 'lg:justify-end' : ''}`}>
                    {step.tech.map((tech) => (
                      <Chip key={tech} tone={isDark ? 'dark' : 'light'}>
                        {tech}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Pipeline
