import type { CaseStudyStat } from '@/content/case-studies/types'

type StatsBandProps = {
  stats: readonly CaseStudyStat[]
  tone?: 'light' | 'dark'
  columns?: 3 | 4
  className?: string
}

/** Labelled stat rows: big value, divider, then label and supporting line. */
const StatsBand = ({ stats, tone = 'light', columns = 4, className = '' }: StatsBandProps) => {
  const isDark = tone === 'dark'

  const valueClasses = isDark ? 'text-white' : 'text-default-900'
  const labelClasses = isDark ? 'text-white' : 'text-default-900'
  const descClasses = isDark ? 'text-white/60' : 'text-default-500'
  const dividerClasses = isDark ? 'bg-white/15' : 'bg-default-200'

  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="flex items-start gap-4">
          <span className={`font-heading text-3xl leading-none font-semibold md:text-4xl ${valueClasses}`}>{stat.value}</span>
          <span aria-hidden="true" className={`mt-1 h-10 w-px shrink-0 ${dividerClasses}`} />
          <div className="min-w-0">
            <p className={`text-sm font-medium md:text-base ${labelClasses}`}>{stat.label}</p>
            {stat.description && <p className={`mt-0.5 text-sm ${descClasses}`}>{stat.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsBand
