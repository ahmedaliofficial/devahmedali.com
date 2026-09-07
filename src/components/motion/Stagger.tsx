'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  /** Gap between each child's entrance */
  stagger?: number
  delay?: number
  amount?: number
  once?: boolean
}

/** Parent of a card grid or list: holds the timing, the children hold the movement.
 *  Pair with `StaggerItem` — a plain element between the two breaks the variant chain. */
export const StaggerGroup = ({ children, className, stagger = 0.09, delay = 0, amount = 0.15, once = true }: StaggerGroupProps) => (
  <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once, amount }} variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}>
    {children}
  </motion.div>
)

type StaggerItemProps = {
  children: ReactNode
  className?: string
  distance?: number
  duration?: number
}

export const StaggerItem = ({ children, className, distance = 26, duration = 0.6 }: StaggerItemProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration, ease: easeOut } },
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}
