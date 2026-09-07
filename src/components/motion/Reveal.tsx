'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Edge the content travels in from */
  from?: 'bottom' | 'top' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  /** Fraction of the element that must be on screen before it plays */
  amount?: number
  once?: boolean
}

const travel = {
  bottom: (distance: number) => ({ y: distance }),
  top: (distance: number) => ({ y: -distance }),
  left: (distance: number) => ({ x: -distance }),
  right: (distance: number) => ({ x: distance }),
  none: () => ({}),
}

/** The site's default scroll entrance: content rises and fades in once, then stays put.
 *  Transform animations are dropped automatically for users who prefer reduced motion
 *  (MotionConfig `reducedMotion="user"` in AppProvidersWrapper). */
const Reveal = ({ children, className, from = 'bottom', delay = 0, duration = 0.6, distance = 28, amount = 0.2, once = true }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, ...travel[from](distance) }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default Reveal
