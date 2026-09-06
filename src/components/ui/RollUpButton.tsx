import { Icon } from '@iconify/react'
import Link from 'next/link'

type RollUpButtonProps = {
  href: string
  label: string
  /** 'dark' = black pill, 'light' = white pill (use on dark sections), 'glass' = translucent */
  variant?: 'dark' | 'light' | 'glass' | 'outline'
  icon?: string
  external?: boolean
  className?: string
}

const variants = {
  dark: 'bg-default-900 text-white',
  light: 'bg-white text-default-900',
  glass: 'border border-white/20 bg-white/5 text-white backdrop-blur-md',
  outline: 'border border-default-300 text-default-900 hover:bg-default-900 hover:text-white hover:border-default-900',
}

/** The template's signature CTA: the label rolls up and a copy rolls in from below on hover. */
const RollUpButton = ({ href, label, variant = 'dark', icon, external, className = '' }: RollUpButtonProps) => {
  const classes = `group inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-95 ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative block h-5 overflow-hidden whitespace-nowrap">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">{label}</span>
        <span className="absolute inset-x-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">{label}</span>
      </span>
      {icon && <Icon icon={icon} className="size-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

export default RollUpButton
