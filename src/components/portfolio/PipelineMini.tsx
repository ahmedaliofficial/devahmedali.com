import type { PipelineStep } from '@/content/case-studies/types'
import { Icon } from '@iconify/react'

type PipelineMiniProps = {
  steps: PipelineStep[]
  tone?: 'light' | 'dark'
  className?: string
}

/** Horizontal 4-node summary of a pipeline, with connectors between nodes on desktop. */
const PipelineMini = ({ steps, tone = 'dark', className = '' }: PipelineMiniProps) => {
  const isDark = tone === 'dark'

  const cardClasses = isDark ? 'border-white/10 bg-white/5 backdrop-blur-sm' : 'border-default-200 bg-white'
  const titleClasses = isDark ? 'text-white' : 'text-default-900'
  const bodyClasses = isDark ? 'text-white/60' : 'text-default-500'
  const nodeClasses = isDark ? 'bg-white/10 text-white' : 'bg-default-100 text-default-700'
  const arrowClasses = isDark ? 'text-white/30' : 'text-default-300'

  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 ${className}`}>
      {steps.map((step, index) => (
        <div key={step.step} className="relative">
          <div className={`flex h-full flex-col rounded-2xl border p-5 ${cardClasses}`}>
            <span className={`mb-3 inline-grid size-9 place-items-center rounded-full ${nodeClasses}`}>{step.icon ? <Icon icon={step.icon} className="size-4.5" /> : <span className="text-sm font-semibold">{step.step}</span>}</span>
            <h3 className={`font-heading text-base font-semibold ${titleClasses}`}>{step.title}</h3>
            <p className={`mt-1 text-sm ${bodyClasses}`}>{step.description}</p>
          </div>

          {/* Centred in the grid gap: left-full puts it at the card edge, ms-3 walks to the
              gap midpoint (half of gap-6), and -translate-x-1/2 centres the icon on that point. */}
          {index < steps.length - 1 && (
            <Icon aria-hidden="true" icon="lucide:chevron-right" className={`absolute top-1/2 left-full ms-3 hidden size-5 -translate-x-1/2 -translate-y-1/2 lg:block ${arrowClasses}`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default PipelineMini
