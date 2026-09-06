'use client'

import { techLogos } from '@/content/skills'
import { Icon } from '@iconify/react'

type TechMarqueeProps = {
  tone?: 'light' | 'dark'
  className?: string
}

/** Reuses the template's .animate-marquee keyframe (40s, pauses on hover). The list is
 *  duplicated once because the animation translates -50% for a seamless loop. */
const TechMarquee = ({ tone = 'light', className = '' }: TechMarqueeProps) => {
  const isDark = tone === 'dark'
  const itemClasses = isDark ? 'text-white/70' : 'text-default-500'
  const maskFrom = isDark ? 'from-default-900' : 'from-body-bg'

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="animate-marquee flex items-center gap-10 md:gap-14">
        {[...techLogos, ...techLogos].map((logo, index) => (
          <div key={index} className={`flex shrink-0 items-center gap-2.5 ${itemClasses}`} aria-hidden={index >= techLogos.length}>
            <Icon icon={logo.icon} className="size-6 md:size-7" />
            <span className="text-sm font-medium whitespace-nowrap md:text-base">{logo.name}</span>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r to-transparent md:w-28 ${maskFrom}`} />
      <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l to-transparent md:w-28 ${maskFrom}`} />
    </div>
  )
}

export default TechMarquee
