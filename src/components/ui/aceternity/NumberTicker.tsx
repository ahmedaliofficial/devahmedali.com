'use client'

import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useLayoutEffect, useRef } from 'react'

type NumberTickerProps = {
  /** The stat exactly as authored: "500+", "~70%", "100K+" */
  value: string
  className?: string
  duration?: number
  delay?: number
}

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Splits "~70%" into "~", 70 and "%" so only the digits animate. */
const parse = (value: string) => {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null

  const [, prefix, digits, suffix] = match
  return { prefix, suffix, target: Number(digits), decimals: digits.split('.')[1]?.length ?? 0 }
}

/** Counts a stat up when it scrolls into view. The finished value is what renders on the
 *  server, so crawlers and no-JS visitors read "500+", never "0+"; the count-up is wound
 *  back to zero in a layout effect, before the browser paints the hydrated frame. */
const NumberTicker = ({ value, className, duration = 1.6, delay = 0 }: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const parsed = parse(value)
  const target = parsed?.target ?? 0

  const count = useMotionValue(target)
  const text = useTransform(count, (latest) => latest.toFixed(parsed?.decimals ?? 0))

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return
    count.set(0)
  }, [count, target])

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return

    const controls = animate(count, target, { duration, delay, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [inView, count, target, duration, delay])

  if (!parsed) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      <motion.span>{text}</motion.span>
      {parsed.suffix}
    </span>
  )
}

export default NumberTicker
