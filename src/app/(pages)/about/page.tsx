import ContactCta from '@/components/ContactCta'
import Arrow from '@/components/ui/Arrow'
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
      <section className="studio-about-hero">
        <div className="studio-about-grid container">
          <div className="studio-about-copy">
            <p className="studio-page-kicker">
              <span aria-hidden="true" /> The person behind the pixels
            </p>
            <h1 className="studio-page-title">
              Hi, I&apos;m Ahmed.
              <br />
              <em>
                I build digital
                <br />
                products.
              </em>
            </h1>
            <div className="studio-about-story">
              <p>I&apos;m an independent developer, software architect and product partner. For {site.experience.words}, I&apos;ve been turning ambitious ideas into useful software across FinTech, AI and SaaS.</p>
              <p>From the first screen to the systems behind it, I bring the pieces together. I work with founders, agencies and teams who care about how their product feels and how well it works.</p>
              <p>
                I also founded <Link href="/work/trackhrs">TrackHRS</Link>. Building my own product means I think beyond the code: onboarding, support, reliability and the small details that make people come back.
              </p>
            </div>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="text-link studio-about-link">
              A little more about me <Arrow diagonal />
            </a>
          </div>
          <aside className="studio-profile" aria-label="Ahmed Ali at a glance">
            <div className="studio-profile-top">
              <span>Independent by choice.</span>
              <Arrow diagonal />
            </div>
            <div className="studio-profile-monogram" aria-hidden="true">
              AA<span>.</span>
            </div>
            <div className="studio-profile-name">
              <p>Ahmed Ali</p>
              <span>{site.roleFull}</span>
            </div>
            <dl className="studio-profile-details">
              <div>
                <dt>Experience</dt>
                <dd>{site.experience.label} years building software</dd>
              </div>
              <div>
                <dt>Also building</dt>
                <dd>Founder of TrackHRS</dd>
              </div>
              <div>
                <dt>Working together</dt>
                <dd>Remote, worldwide</dd>
              </div>
            </dl>
            <p className="studio-profile-note">BS Software Engineering · Virtual University of Pakistan</p>
          </aside>
        </div>
      </section>
      <section className="studio-principles">
        <div className="container">
          <div className="studio-page-section-heading">
            <p className="studio-page-kicker">The way I work</p>
            <h2>
              Good work.
              <br />
              <em>Even better together.</em>
            </h2>
          </div>
          <div className="studio-principle-grid">
            {principles.map((principle) => (
              <div key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="toolkit" className="studio-toolkit">
        <div className="studio-toolkit-grid container">
          <div className="studio-page-section-heading">
            <p className="studio-page-kicker">A wider perspective</p>
            <h2>
              The whole picture.
              <br />
              <em>Every little detail.</em>
            </h2>
          </div>
          <div className="studio-toolkit-copy">
            <p>I work across web products, backend systems, AI and cloud infrastructure. That breadth helps me see the whole picture and make the pieces work together.</p>
            <p>My usual tools include React, Next.js, NestJS, Go, Python, Kafka and Kubernetes. The choice always comes back to what your project needs.</p>
            <div className="studio-toolkit-links">
              <Link href="/work" className="text-link">
                Explore my work <Arrow diagonal />
              </Link>
              <Link href="/expertise" className="text-link">
                Technical expertise <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCta heading="Let's build something useful." description="Tell me where you are now and where you want to go. We'll work out the next step together." />
    </>
  )
}
