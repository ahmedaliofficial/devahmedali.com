'use client'

import { motion, type Variants } from 'motion/react'
import Badge from './Badge'

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/** Every section opens the same way: the badge, then the headline, then the standfirst,
 *  each a beat behind the last, played once when the section scrolls into view. */
const SectionHeading = ({ eyebrow, title, description, align = 'center', tone = 'light', className = '' }: SectionHeadingProps) => {
  const isDark = tone === 'dark'

  return (
    <motion.div
      className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-start'} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {eyebrow && (
        <motion.div variants={rise}>
          <Badge variant={isDark ? 'dark' : 'light'}>{eyebrow}</Badge>
        </motion.div>
      )}

      <motion.h2 variants={rise} className={`mt-5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-default-900'}`}>
        {title}
      </motion.h2>

      {description && (
        <motion.p variants={rise} className={`mt-4 max-w-2xl text-base md:text-lg ${isDark ? 'text-white/70' : 'text-default-500'}`}>
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
