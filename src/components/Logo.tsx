import { site } from '@/content/site'
import Link from 'next/link'

type LogoProps = {
  tone?: 'light' | 'dark'
  showWordmark?: boolean
  className?: string
}

const Logo = ({ tone = 'light', showWordmark = true, className = '' }: LogoProps) => {
  const markClasses = tone === 'dark' ? 'bg-white text-default-900' : 'bg-default-900 text-white'
  const wordClasses = tone === 'dark' ? 'text-white' : 'text-default-900'

  return (
    <Link href="/" aria-label={`${site.name} — home`} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className={`font-heading grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold transition-transform duration-300 group-hover:scale-95 md:size-10 ${markClasses}`}>{site.initials}</span>
      {showWordmark && (
        <span className="flex flex-col leading-tight">
          <span className={`font-heading text-base font-semibold ${wordClasses}`}>{site.name}</span>
          <span className="text-default-500 hidden text-[11px] font-medium tracking-wide uppercase sm:block">{site.role}</span>
        </span>
      )}
    </Link>
  )
}

export default Logo
