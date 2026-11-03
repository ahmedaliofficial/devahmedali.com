import { site } from '@/content/site'
import Link from 'next/link'

export default function Logo({ tone = 'light', showWordmark = true, showMark = true, className = '' }: { tone?: 'light' | 'dark'; showWordmark?: boolean; showMark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={site.name + ' home'} className={'studio-logo ' + (tone === 'dark' ? 'studio-logo-light ' : '') + className}>
      {showMark && (
        <span className="studio-logo-symbol" aria-hidden="true">
          AA
        </span>
      )}
      {showWordmark && (
        <span className="logo-wordmark">
          ahmed ali<span className="studio-logo-dot">.</span>
        </span>
      )}
    </Link>
  )
}
