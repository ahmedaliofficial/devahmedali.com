import ContactCta from '@/components/ContactCta'
import { PERSON_ID, site, WEBSITE_ID } from '@/content/site'
import { jsonLd } from '@/lib/schema'
import type { Metadata } from 'next'
import Link from 'next/link'

const ABOUT_DESCRIPTION = `Meet Ahmed Ali, a software architect, engineering lead and founder of TrackHRS with ${site.experience.words} of experience across FinTech, AI and SaaS.`

export const metadata: Metadata = {
  title: 'About',
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: { type: 'profile', title: 'About Ahmed Ali', description: ABOUT_DESCRIPTION, url: '/about' },
  twitter: { card: 'summary_large_image', title: 'About Ahmed Ali', description: ABOUT_DESCRIPTION },
}

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${site.url}/about`,
  name: `About ${site.name}`,
  description: ABOUT_DESCRIPTION,
  mainEntity: { '@id': PERSON_ID },
  isPartOf: { '@id': WEBSITE_ID },
}

const principles = [
  { number: '01', title: 'Start with your business.', description: 'The best technical choice is the one that fits your users, budget and plans. I ask those questions before choosing the tools.' },
  { number: '02', title: 'Keep you in the loop.', description: 'Clear priorities, regular demos and honest conversations about trade-offs. You should always know what is being built and why.' },
  { number: '03', title: 'Make the handover easy.', description: 'Readable code, useful documentation and systems your team can run. The work should stay valuable after launch.' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(profileJsonLd) }} />
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[1.3fr_0.8fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">A little about me</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.08] font-medium tracking-[-0.045em] md:text-[4.5rem]">
              Hi, I&apos;m Ahmed.
              <br />
              <span className="text-primary">I build things that last.</span>
            </h1>
            <div className="text-default-600 mt-7 max-w-xl space-y-5 text-base leading-relaxed md:text-lg">
              <p>I&apos;m a software architect and engineering lead with {site.experience.words} of experience building products across FinTech, AI and SaaS.</p>
              <p>My work connects the product your customers use with the systems that keep it running. I can help you go from a first idea to launch, or improve a platform you already have.</p>
              <p>
                I also founded{' '}
                <Link href="/work/trackhrs" className="text-primary decoration-primary/30 hover:decoration-primary font-medium underline underline-offset-4">
                  TrackHRS
                </Link>
                . Building my own product means I think about the things around the code too: onboarding, support, reliability and what makes a product useful every day.
              </p>
            </div>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="text-default-900 mt-7 inline-flex items-center gap-4 text-sm font-semibold underline-offset-4 hover:underline">
              Find me on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside className="rounded-3xl bg-[#eaf0ff] p-7 md:p-10 lg:mt-10">
            <span aria-hidden="true" className="bg-primary font-heading flex size-20 items-center justify-center rounded-2xl text-3xl font-medium tracking-tight text-white">
              AA<span className="text-white/60">.</span>
            </span>
            <p className="text-default-900 mt-8 text-2xl font-medium">Ahmed Ali</p>
            <p className="text-default-600 mt-2 text-sm leading-relaxed">
              {site.roleFull}
              <br />
              Founder of TrackHRS
            </p>
            <dl className="border-primary/15 mt-8 space-y-5 border-t pt-6">
              <div>
                <dt className="text-default-500 text-xs">Experience</dt>
                <dd className="text-default-900 mt-1 text-base font-medium">{site.experience.label} years building software</dd>
              </div>
              <div>
                <dt className="text-default-500 text-xs">Working together</dt>
                <dd className="text-default-900 mt-1 text-base leading-relaxed">{site.availability}</dd>
              </div>
              <div>
                <dt className="text-default-500 text-xs">Education</dt>
                <dd className="text-default-900 mt-1 text-sm leading-relaxed">
                  BS Software Engineering
                  <br />
                  Virtual University of Pakistan
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="border-default-200 border-y bg-white py-16 md:py-24">
        <div className="container">
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">What you can expect</p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Good software starts
            <br />
            with a good working relationship.
          </h2>
          <div className="mt-12 grid gap-9 md:grid-cols-3 md:gap-12">
            {principles.map((principle) => (
              <div key={principle.number} className="border-default-200 border-t pt-5">
                <span className="text-primary text-xs font-semibold">{principle.number}</span>
                <h3 className="mt-6 text-xl font-medium">{principle.title}</h3>
                <p className="text-default-600 mt-3 text-base leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="toolkit" className="scroll-mt-28 py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Experience that connects</p>
            <h2 className="mt-4 max-w-md text-3xl font-medium tracking-tight md:text-4xl">
              From the first screen
              <br />
              to the systems behind it.
            </h2>
          </div>
          <div>
            <p className="text-default-600 text-base leading-relaxed">I work across web products, backend systems, AI and cloud infrastructure. That breadth helps me see the whole picture and make the pieces work together.</p>
            <p className="text-default-600 mt-4 text-base leading-relaxed">My usual tools include React, Next.js, NestJS, Go, Python, Kafka and Kubernetes. The choice always comes back to what your project needs.</p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/work" className="text-primary inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/expertise" className="text-default-700 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
                Technical expertise <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCta heading="Let's build something useful." description="Tell me where you are now and where you want to go. We'll work out the next step together." />
    </>
  )
}
