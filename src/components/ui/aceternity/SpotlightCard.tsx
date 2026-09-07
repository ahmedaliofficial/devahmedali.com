'use client'

import { cn } from '@/utils/cn'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import type { MouseEvent, ReactNode } from 'react'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  /** Colour of the wash that follows the cursor */
  color?: string
  radius?: number
}

/** Aceternity "Card Spotlight": a soft radial wash tracks the cursor across the card
 *  and fades out when it leaves. The wash sits under the content and takes the card's
 *  own corner radius, so it can wrap any existing card markup unchanged. */
const SpotlightCard = ({ children, className, color = 'rgba(0, 34, 255, 0.09)', radius = 420 }: SpotlightCardProps) => {
  const mouseX = useMotionValue(-radius)
  const mouseY = useMotionValue(-radius)

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 70%)`

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div onMouseMove={handleMouseMove} className={cn('group/spotlight relative', className)}>
      {/* z-0 keeps the wash under the positioned children that follow it in the markup */}
      <motion.span aria-hidden="true" style={{ background }} className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100" />
      {children}
    </div>
  )
}

export default SpotlightCard
