import Reveal from '@/components/motion/Reveal'
import Meteors from '@/components/ui/aceternity/Meteors'
import RollUpButton from '@/components/ui/RollUpButton'
import { site } from '@/content/site'
import { Icon } from '@iconify/react'

type ContactCtaProps = {
  heading?: string
  description?: string
  className?: string
}

const ContactCta = ({ heading = 'Have a system to build?', description = 'Whether it needs designing from scratch or rescuing from its own success, tell me what you’re building and I’ll tell you how I’d architect it.', className = '' }: ContactCtaProps) => (
  <section className={`pb-16 md:pb-24 ${className}`}>
    <div className="container">
      <Reveal className="bg-default-900 relative overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <span aria-hidden="true" className="bg-primary/20 animate-aurora absolute -top-32 -right-20 size-80 rounded-full blur-3xl" />
        <span aria-hidden="true" className="bg-primary-6/15 animate-aurora absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl [animation-delay:-8s]" />
        <Meteors number={14} />

        <div className="relative flex max-w-3xl flex-col">
          <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-white md:text-4xl lg:text-5xl">{heading}</h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">{description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <RollUpButton href="/contact" label="Start a conversation" variant="light" icon="lucide:arrow-right" />
            <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-95">
              <Icon icon="lucide:calendar-check" className="size-4.5" />
              Book a call
            </a>
            <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
              <Icon icon="lucide:mail" className="size-4.5" />
              {site.email}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/50">{site.availability}</p>
        </div>
      </Reveal>
    </div>
  </section>
)

export default ContactCta
