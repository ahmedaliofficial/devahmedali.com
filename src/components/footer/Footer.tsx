import Logo from '@/components/Logo'
import Arrow from '@/components/ui/Arrow'
import { site } from '@/content/site'
import Link from 'next/link'
import PrivacySettingsButton from './PrivacySettingsButton'

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="container">
        <div className="studio-footer-main">
          <div>
            <Logo showMark={false} className="studio-footer-wordmark" />
            <p>Independent by choice. Collaborative by nature.</p>
          </div>
          <div className="studio-footer-links">
            <nav aria-label="Footer navigation">
              <span>Explore</span>
              <Link href="/work">Selected work</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About me</Link>
              <Link href="/blog">Writing</Link>
            </nav>
            <nav aria-label="Social links">
              <span>Elsewhere</span>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow diagonal />
              </a>
              <a href={site.socials.github} target="_blank" rel="noreferrer">
                GitHub <Arrow diagonal />
              </a>
              <a href={'mailto:' + site.email}>
                Email me <Arrow diagonal />
              </a>
            </nav>
          </div>
        </div>
        <div className="studio-footer-bottom">
          <p>© {new Date().getFullYear()} Ahmed Ali</p>
          <p className="studio-footer-worldwide">Working together, wherever you are.</p>
          <nav aria-label="Legal and privacy links">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <PrivacySettingsButton />
          </nav>
        </div>
      </div>
    </footer>
  )
}
