import Arrow from '@/components/ui/Arrow'
import { site } from '@/content/site'
import Link from 'next/link'

export default function ContactCta({ heading = 'Have something in mind?', description = 'Tell me what you’re building. We’ll work out the right next step together.', className = '' }: { heading?: string; description?: string; className?: string }) {
  return (
    <section className={'studio-contact ' + className}>
      <div className="container">
        <div className="studio-contact-topline">
          <p className="eyebrow">Good things start with a conversation</p>
          <span className="studio-contact-availability">
            <span aria-hidden="true" /> Open to new collaborations
          </span>
        </div>
        <div className="studio-contact-layout">
          <h2>{heading}</h2>
          <div className="studio-contact-copy">
            <p>{description}</p>
            <div className="studio-contact-actions">
              <Link href="/contact" className="studio-contact-button">
                Start a project <Arrow diagonal />
              </Link>
              <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="studio-call-link">
                Book a 30-min call <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
