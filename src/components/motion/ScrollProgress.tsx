'use client'

import { motion, useScroll, useSpring } from 'motion/react'

/** Hairline reading-progress bar pinned above the navbar. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 })

  return <motion.div aria-hidden="true" style={{ scaleX }} className="from-primary via-primary-6 to-primary-4 fixed inset-x-0 top-0 z-130 h-0.5 origin-left bg-linear-to-r" />
}

export default ScrollProgress
