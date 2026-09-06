import type { FlowStep } from '@/content/reference-flows'
import { Icon } from '@iconify/react'
import { Fragment } from 'react'

type ProcessFlowProps = {
  steps: FlowStep[]
  tone?: 'light' | 'dark'
  /** Accent token from assets/css/_config.css, tints the step icons */
  accent?: string
  className?: string
}

const accentIconClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  'primary-1': 'bg-primary-1/10 text-primary-1',
  'primary-2': 'bg-primary-2/10 text-primary-2',
  'primary-4': 'bg-primary-4/10 text-primary-4',
  'primary-6': 'bg-primary-6/10 text-primary-6',
  'primary-8': 'bg-primary-8/10 text-primary-8',
}

/** Compact process flow: a wrapping card grid on mobile/tablet, a single connected
 *  row with arrows on desktop. CSS grid (not flex-wrap) so every card in the row
 *  stretches to match the tallest one, regardless of how its text wraps. */
const ProcessFlow = ({ steps, tone = 'light', accent = 'primary', className = '' }: ProcessFlowProps) => {
  const isDark = tone === 'dark'

  const boxClasses = isDark ? 'border-white/10 bg-white/5' : 'border-default-200 bg-white'
  const iconClasses = isDark ? 'bg-white/10 text-white' : (accentIconClasses[accent] ?? accentIconClasses.primary)
  const titleClasses = isDark ? 'text-white' : 'text-default-900'
  const detailClasses = isDark ? 'text-white/50' : 'text-default-500'
  const arrowClasses = isDark ? 'text-white/25' : 'text-default-300'

  const Card = ({ step }: { step: FlowStep }) => (
    <div className={`flex h-full flex-col rounded-2xl border p-4 ${boxClasses}`}>
      <span className={`mb-3 inline-grid size-8 shrink-0 place-items-center rounded-lg ${iconClasses}`}>
        <Icon icon={step.icon} className="size-4.5" />
      </span>
      <span className={`text-sm leading-snug font-semibold ${titleClasses}`}>{step.title}</span>
      <span className={`mt-1 text-xs leading-snug ${detailClasses}`}>{step.detail}</span>
    </div>
  )

  return (
    <div className={className}>
      {/* Mobile & tablet: cards wrap, no connectors (arrows don't survive a reflow cleanly) */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:hidden">
        {steps.map((step) => (
          <Card key={step.title} step={step} />
        ))}
      </div>

      {/* Desktop: one row, a connector between every pair. Grid's default row-stretch
          keeps every card the same height without any manual height matching. */}
      <div className="hidden lg:grid lg:gap-x-1.5" style={{ gridTemplateColumns: steps.map((_, i) => (i < steps.length - 1 ? '1fr auto' : '1fr')).join(' ') }}>
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            <Card step={step} />
            {index < steps.length - 1 && (
              <span aria-hidden="true" className="flex items-center justify-center">
                <Icon icon="lucide:chevron-right" className={`size-4 ${arrowClasses}`} />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProcessFlow
