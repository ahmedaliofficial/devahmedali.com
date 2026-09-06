import type { FlowStep } from '@/content/reference-flows'
import { Icon } from '@iconify/react'

type ProcessFlowProps = {
  steps: FlowStep[]
  tone?: 'light' | 'dark'
  className?: string
}

/** Compact horizontal process flow. Steps sit in a wrapping flex row with an arrow
 *  between each pair, so it stays aligned at any step count and reflows on mobile. */
const ProcessFlow = ({ steps, tone = 'light', className = '' }: ProcessFlowProps) => {
  const isDark = tone === 'dark'

  const boxClasses = isDark ? 'border-white/10 bg-white/5' : 'border-default-200 bg-default-50'
  const iconClasses = isDark ? 'bg-white/10 text-white' : 'bg-white text-default-700'
  const titleClasses = isDark ? 'text-white' : 'text-default-900'
  const detailClasses = isDark ? 'text-white/50' : 'text-default-500'
  const arrowClasses = isDark ? 'text-white/25' : 'text-default-300'

  return (
    <div className={`flex flex-wrap items-stretch gap-2 ${className}`}>
      {steps.map((step, index) => (
        <div key={step.title} className="flex flex-1 basis-[calc(50%-1.5rem)] items-stretch gap-2 sm:basis-[calc(33.333%-1.5rem)] lg:basis-0">
          <div className={`flex w-full flex-col rounded-xl border px-3.5 py-3 ${boxClasses}`}>
            <span className={`mb-2 inline-grid size-7 place-items-center rounded-lg ${iconClasses}`}>
              <Icon icon={step.icon} className="size-4" />
            </span>
            <span className={`text-sm font-semibold ${titleClasses}`}>{step.title}</span>
            <span className={`mt-0.5 text-xs ${detailClasses}`}>{step.detail}</span>
          </div>

          {index < steps.length - 1 && (
            <span aria-hidden="true" className="flex shrink-0 items-center">
              <Icon icon="lucide:chevron-right" className={`size-4 ${arrowClasses}`} />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProcessFlow
