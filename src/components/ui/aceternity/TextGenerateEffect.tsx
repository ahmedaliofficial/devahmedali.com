'use client'

import { cn } from '@/utils/cn'
import { motion, type Variants } from 'motion/react'

type TextGenerateEffectProps = {
  words: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  blur?: boolean
  /** Play on mount (hero copy) or when scrolled into view (mid-page copy) */
  trigger?: 'mount' | 'view'
}

/** Aceternity "Text Generate Effect": each word un-blurs and settles in sequence.
 *  Renders real text nodes inside whatever heading the caller wraps it in, so the
 *  crawler still sees one continuous sentence. */
const TextGenerateEffect = ({ words, className, delay = 0, duration = 0.7, stagger = 0.055, blur = true, trigger = 'mount' }: TextGenerateEffectProps) => {
  const list = words.split(' ')

  const word: Variants = {
    hidden: { opacity: 0, y: '0.3em', filter: blur ? 'blur(10px)' : 'blur(0px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, ease: [0.22, 1, 0.36, 1] } },
  }

  const playback = trigger === 'mount' ? { animate: 'visible' as const } : { whileInView: 'visible' as const, viewport: { once: true, amount: 0.4 } }

  return (
    <motion.span className={cn('inline', className)} initial="hidden" {...playback} variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}>
      {list.map((item, index) => (
        <span key={`${item}-${index}`}>
          <motion.span className="inline-block" variants={word}>
            {item}
          </motion.span>
          {index < list.length - 1 && ' '}
        </span>
      ))}
    </motion.span>
  )
}

export default TextGenerateEffect
