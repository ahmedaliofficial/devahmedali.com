'use client'

import { cn } from '@/utils/cn'

type MeteorsProps = {
  number?: number
  className?: string
}

/** Deterministic stand-in for Math.random(): the server and the client must lay the
 *  meteors out identically or hydration complains. */
const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

/** Aceternity "Meteors": streaks falling diagonally behind a dark section. */
const Meteors = ({ number = 18, className }: MeteorsProps) => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: number }, (_, index) => (
      <span
        key={index}
        className={cn('animate-meteor absolute top-0 left-1/2 size-0.5 rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]', "before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-linear-to-r before:from-white/60 before:to-transparent before:content-['']", className)}
        style={{
          top: `${pseudoRandom(index + 1) * -20}%`,
          left: `${pseudoRandom(index + 7) * 130 - 25}%`,
          animationDelay: `${pseudoRandom(index + 3) * 6}s`,
          animationDuration: `${6 + pseudoRandom(index + 5) * 6}s`,
        }}
      />
    ))}
  </span>
)

export default Meteors
