import ContactCta from '@/components/ContactCta'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import StudioHero from '@/components/portfolio/StudioHero'
import Arrow from '@/components/ui/Arrow'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { getCaseStudy } from '@/content/case-studies'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: DEFAULT_PAGE_TITLE },
  description: site.seo.description,
  alternates: { canonical: '/' },
}

const capabilities = [
  { number: '01', title: 'Websites with a point of view.', description: 'A distinctive online presence that tells your story and makes the next step effortless.', tags: 'Websites · Ecommerce · Landing pages', slug: 'websites' },
  { number: '02', title: 'Products people want to use.', description: 'Thoughtful web, mobile, and desktop experiences, with the engineering to grow with you.', tags: 'SaaS & MVPs · Mobile · Desktop', slug: 'saas-mvp' },
  { number: '03', title: 'AI that gets things done.', description: 'Useful assistants and connected workflows built around your knowledge, tools, and team.', tags: 'AI agents · Automation · Integrations', slug: 'ai-agents' },
  { number: '04', title: 'A stronger foundation.', description: 'Clear technical direction for an existing product, a growing team, or your next big release.', tags: 'Architecture · Product rescue · Scaling', slug: 'product-rescue' },
]

const process = [
  { number: '01', title: 'First, we get curious.', description: 'Tell me the idea, the audience, and what success looks like. Together, we shape a focused brief.', deliverable: 'A shared direction' },
  { number: '02', title: 'Then, we make it real.', description: 'Design, build, and refine. You see working progress, share feedback, and stay part of the process.', deliverable: 'Something you can try' },
  { number: '03', title: 'Ready for the real world.', description: 'A considered launch, clear documentation, and a handover that sets you up for what comes next.', deliverable: 'A confident next chapter' },
]

export default function Page() {
  return (
    <>
      <StudioHero />
      <section id="selected-work" className="studio-work container" aria-labelledby="work-heading">
        <div className="studio-section-heading">
          <div>
            <p className="studio-kicker">01 / Selected work</p>
            <h2 id="work-heading">
              Good work.
              <br />
              <em>Real possibilities.</em>
            </h2>
          </div>
          <div className="studio-section-aside">
            <p>A few products I’ve helped bring into the world. Each with its own story.</p>
            <Link href="/work" className="studio-text-link">
              View all projects <Arrow diagonal />
            </Link>
          </div>
        </div>
        <article className="studio-featured-project">
          <div className="studio-featured-copy">
            <p className="studio-project-category">
              <span /> SaaS / Full product development
            </p>
            <div>
              <h3>
                <Link href="/work/trackhrs">TrackHRS</Link>
              </h3>
              <p>
                Less scattered work.
                <br />
                <em>More connected teams.</em>
              </p>
            </div>
            <p className="studio-project-description">Projects, clients, time, and people. One connected workspace, built from the desktop tracker to the platform behind it.</p>
            <p className="studio-project-role">My role: Founder, product & engineering</p>
            <Link href="/work/trackhrs" className="studio-text-link">
              Inside the project <Arrow diagonal />
            </Link>
          </div>
          <div className="studio-featured-art">
            <Link href="/work/trackhrs" aria-label="View the TrackHRS case study">
              <Image src="/images/work/trackhrs-mockup.webp" alt="TrackHRS dashboard and project board presented in a laptop product mockup" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 65vw" />
              <span className="studio-project-round-arrow" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </Link>
            <p>Product mockup · Demo workspace</p>
          </div>
        </article>
        <div className="studio-work-grid">
          {['agentx', 'hysab-kytab'].map((slug) => {
            const study = getCaseStudy(slug)
            return study && <CaseStudyCard key={slug} study={study} />
          })}
        </div>
        <p className="studio-work-footnote">Different products. One constant: thoughtful execution, all the way through.</p>
      </section>
      <section className="studio-services" aria-labelledby="services-heading">
        <div className="studio-services-layout container">
          <div className="studio-services-intro">
            <p className="studio-kicker">02 / What I can do for you</p>
            <h2 id="services-heading">
              Your next
              <br />
              big thing.
              <br />
              <em>Let’s build it.</em>
            </h2>
            <p>Bring the ambition. I’ll bring the product thinking, creative care, and engineering to make it happen.</p>
            <Link href="/services" className="studio-button studio-button-lime">
              Explore all services{' '}
              <span>
                <Arrow diagonal />
              </span>
            </Link>
            <span className="studio-service-note">A focused project or a longer partnership.</span>
          </div>
          <div className="studio-service-list">
            {capabilities.map((service) => (
              <Link href={'/services?service=' + service.slug + '#service-detail'} className="studio-service-row" key={service.number}>
                <span className="studio-service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>{service.tags}</span>
                </div>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-partnership container" aria-labelledby="partner-heading">
        <div className="studio-partnership-top">
          <p className="studio-kicker">03 / A better way to build</p>
          <div className="studio-partnership-title">
            <h2 id="partner-heading">
              Small by design.
              <br />
              <em>Ambitious by nature.</em>
            </h2>
          </div>
          <div className="studio-partnership-copy">
            <p>You work with me, Ahmed. The person who asks the questions is the person who builds the solution.</p>
            <div>
              <p>As an independent developer and the founder of TrackHRS, I understand both sides of the build. Expect thoughtful decisions, honest conversations, and real care for the details.</p>
              <Link href="/about" className="studio-text-link">
                A little more about me <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
        <ol className="studio-process">
          {process.map((step) => (
            <li key={step.number}>
              <div className="studio-process-top">
                <span>{step.number}</span>
                <Arrow />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="studio-process-result">
                <span aria-hidden="true">↳</span> {step.deliverable}
              </span>
            </li>
          ))}
        </ol>
        <div className="studio-agency-note">
          <span className="studio-agency-icon" aria-hidden="true">
            <Arrow diagonal />
          </span>
          <div>
            <h3>Great creative team. Need a technical partner?</h3>
            <p>I work with agencies to bring ambitious designs to life and keep projects moving.</p>
          </div>
          <Link href="/contact" className="studio-text-link">
            Let’s collaborate <Arrow diagonal />
          </Link>
        </div>
      </section>
      <ContactCta heading="Let’s make something worth putting out there." description="A spark of an idea, a detailed brief, or a challenge you haven’t quite figured out. It all starts with a conversation." />
    </>
  )
}
