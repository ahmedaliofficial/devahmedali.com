'use client'

import { cn } from '@/utils/cn'
import { Icon } from '@iconify/react'
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'motion/react'
import Link from 'next/link'
import { useRef, type ReactNode } from 'react'

type MovingBorderProps = {
  children: ReactNode
  /** Milliseconds for one full lap of the border */
  duration?: number
  rx?: string
  ry?: string
}

/** Walks a child element around the perimeter of its parent by sampling an invisible
 *  SVG rect — the engine behind Aceternity's "Moving Border". */
const MovingBorder = ({ children, duration = 3200, rx = '30%', ry = '30%' }: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (!length) return
    progress.set((time * (length / duration)) % length)
  })

  const x = useTransform(progress, (value) => pathRef.current?.getPointAtLength(value).x ?? 0)
  const y = useTransform(progress, (value) => pathRef.current?.getPointAtLength(value).y ?? 0)
  const transform = useMotionTemplate`translateX(-50%) translateY(-50%) translateX(${x}px) translateY(${y}px)`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%">
        <rect ref={pathRef} fill="none" width="100%" height="100%" rx={rx} ry={ry} />
      </svg>
      <motion.div style={{ position: 'absolute', top: 0, left: 0, display: 'inline-block', transform }}>{children}</motion.div>
    </>
  )
}

type MovingBorderButtonProps = {
  href: string
  label: string
  icon?: string
  external?: boolean
  duration?: number
  className?: string
  containerClassName?: string
}

/** Aceternity "Moving Border" as the site's primary CTA: a light travels the pill's
 *  edge while the label keeps the roll-up behaviour of the other buttons. */
const MovingBorderButton = ({ href, label, icon, external, duration = 3200, className, containerClassName }: MovingBorderButtonProps) => {
  const content = (
    <>
      <span aria-hidden="true" className="absolute inset-0 rounded-full">
        <MovingBorder duration={duration} rx="50%" ry="50%">
          <span className="block size-24 rounded-full bg-[radial-gradient(var(--color-primary-5)_40%,transparent_60%)] opacity-90" />
        </MovingBorder>
      </span>

      <span className={cn('bg-default-900 relative flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl', className)}>
        <span className="relative block h-5 overflow-hidden whitespace-nowrap">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">{label}</span>
          <span className="absolute inset-x-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">{label}</span>
        </span>
        {icon && <Icon icon={icon} className="size-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />}
      </span>
    </>
  )

  const classes = cn('group relative inline-flex overflow-hidden rounded-full bg-white/10 p-px transition-transform duration-300 hover:scale-95', containerClassName)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

export default MovingBorderButton
