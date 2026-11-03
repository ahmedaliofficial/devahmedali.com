import { site } from '@/content/site'
import Link from 'next/link'

export default function Logo({ tone = 'light', showWordmark = true, showMark = true, className = '' }: { tone?: 'light' | 'dark'; showWordmark?: boolean; showMark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={site.name + ' home'} className={'inline-flex items-center gap-2.5 ' + className}>
      {showMark && (
        <span className={tone === 'dark' ? 'logo-mark logo-mark-light' : 'logo-mark'}>
          a<span>.</span>
        </span>
      )}
      {showWordmark && (
        <span className={'logo-wordmark text-base font-semibold tracking-[-0.04em] ' + (tone === 'dark' ? 'text-white' : 'text-default-900')}>
          ahmed ali<span className="text-primary">.</span>
        </span>
      )}
    </Link>
  )
}
