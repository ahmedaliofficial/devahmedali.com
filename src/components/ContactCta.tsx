import Arrow from '@/components/ui/Arrow'
import { site } from '@/content/site'
import Link from 'next/link'

export default function ContactCta({ heading = 'Have something in mind?', description = 'Tell me what you’re building. We’ll work out the right next step together.', className = '' }: { heading?: string; description?: string; className?: string }) {
  return (
    <section className={'contact-section ' + className}>
      <div className="contact-panel container">
        <div>
          <p className="eyebrow text-white/75">Let’s build something useful</p>
          <h2>{heading}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="button-white">
              Tell me about your project <Arrow diagonal />
            </Link>
            <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white underline underline-offset-4">
              Or book a 30-min call <Arrow diagonal className="size-4" />
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="contact-monogram">
          a<span>.</span>
        </div>
      </div>
    </section>
  )
}
