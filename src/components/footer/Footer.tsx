import Logo from '@/components/Logo'
import { site } from '@/content/site'
import Link from 'next/link'
import PrivacySettingsButton from './PrivacySettingsButton'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="border-default-200 flex flex-col justify-between gap-6 border-b pb-8 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="text-default-500 mt-3 text-sm">Thoughtful software. Built to work.</p>
          </div>
          <nav aria-label="Social links" className="text-default-600 flex flex-wrap gap-6 text-sm">
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={site.socials.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={'mailto:' + site.email}>Email ↗</a>
            <Link href="/blog">Writing</Link>
          </nav>
        </div>
        <div className="text-default-500 flex flex-col justify-between gap-4 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Ahmed Ali</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <PrivacySettingsButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
