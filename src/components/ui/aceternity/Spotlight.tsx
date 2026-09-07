'use client'

import { cn } from '@/utils/cn'
import { motion } from 'motion/react'

type SpotlightProps = {
  className?: string
  /** Left beam wash */
  gradientFirst?: string
  /** Right beam wash */
  gradientSecond?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}

/** Aceternity "Spotlight" — two rotated conic washes that drift apart and back,
 *  giving a dark section the look of light raking across it. Colours default to the
 *  site's primary blue and violet from assets/css/_config.css. */
const Spotlight = ({
  className,
  gradientFirst = 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(231, 100%, 70%, 0.10) 0, hsla(231, 100%, 55%, 0.04) 50%, hsla(231, 100%, 45%, 0) 80%)',
  gradientSecond = 'radial-gradient(50% 50% at 50% 50%, hsla(274, 100%, 70%, 0.08) 0, hsla(274, 100%, 55%, 0.04) 80%, transparent 100%)',
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 9,
  xOffset = 100,
}: SpotlightProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: 'easeOut' }} className={cn('pointer-events-none absolute inset-0 h-full w-full overflow-hidden', className)}>
    <motion.div animate={{ x: [0, xOffset, 0] }} transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} className="absolute top-0 left-0 h-screen w-screen">
      <div style={{ transform: `translateY(${translateY}px) rotate(-45deg)`, background: gradientFirst, width, height }} className="absolute top-0 left-0" />
      <div style={{ transform: 'rotate(-45deg) translate(5%, -50%)', background: gradientSecond, width: smallWidth, height }} className="absolute top-0 left-0 origin-top-left" />
    </motion.div>

    <motion.div animate={{ x: [0, -xOffset, 0] }} transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} className="absolute top-0 right-0 h-screen w-screen">
      <div style={{ transform: `translateY(${translateY}px) rotate(45deg)`, background: gradientFirst, width, height }} className="absolute top-0 right-0" />
      <div style={{ transform: 'rotate(45deg) translate(-5%, -50%)', background: gradientSecond, width: smallWidth, height }} className="absolute top-0 right-0 origin-top-right" />
    </motion.div>
  </motion.div>
)

export default Spotlight
