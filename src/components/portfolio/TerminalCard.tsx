'use client'

import { motion, type Variants } from 'motion/react'

export type TerminalLine = {
  prompt?: string
  text: string
  tone?: 'ok' | 'info' | 'dim' | 'warn'
}

type TerminalCardProps = {
  title?: string
  lines: TerminalLine[]
  /** Print the lines one after another when the card scrolls into view */
  animated?: boolean
  className?: string
}

const toneClasses = {
  ok: 'text-emerald-400',
  info: 'text-sky-300',
  warn: 'text-amber-300',
  dim: 'text-default-400',
}

const line: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

/** Code-built hero visual, replacing the template's app screenshots. */
const TerminalCard = ({ title = 'ahmed@prod: activity-pipeline', lines, animated = false, className = '' }: TerminalCardProps) => (
  <div className={`bg-default-900 overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${className}`}>
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span aria-hidden="true" className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </span>
      <span className="text-default-400 ms-2 truncate font-mono text-xs">{title}</span>
    </div>

    <div className="overflow-x-auto p-4 md:p-5">
      <pre className="font-mono text-xs leading-relaxed md:text-sm">
        <motion.code
          className="block"
          initial={animated ? 'hidden' : false}
          whileInView={animated ? 'visible' : undefined}
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } } }}
        >
          {lines.map((item, index) => (
            <motion.span key={index} variants={animated ? line : undefined} className="block whitespace-pre">
              {item.prompt && <span className="text-primary-2">{item.prompt} </span>}
              <span className={toneClasses[item.tone ?? 'dim']}>{item.text}</span>
            </motion.span>
          ))}

          {animated && (
            <motion.span variants={line} className="block whitespace-pre">
              <span className="text-primary-2">$ </span>
              <motion.span aria-hidden="true" animate={{ opacity: [1, 1, 0, 0] }} transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }} className="bg-default-300 inline-block h-3.5 w-2 align-middle md:h-4" />
            </motion.span>
          )}
        </motion.code>
      </pre>
    </div>
  </div>
)

export default TerminalCard
