import ContactCta from '@/components/ContactCta'
import CaseStudyCard, { ProjectVisual } from '@/components/portfolio/CaseStudyCard'
import Arrow from '@/components/ui/Arrow'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { getCaseStudy } from '@/content/case-studies'
import { clientServices } from '@/content/client-services'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: DEFAULT_PAGE_TITLE },
  description: site.seo.description,
  alternates: { canonical: '/' },
}

const process = [
  { number: '01', title: 'Find the right starting point.', description: 'We turn your goals, users, and priorities into a focused scope.', deliverable: 'A clear plan & milestones' },
  { number: '02', title: 'See your idea take shape.', description: 'Try working versions, share feedback, and make decisions together.', deliverable: 'Working software to review' },
  { number: '03', title: 'Launch with a clear handover.', description: 'Get the product, documentation, and a plan for what comes next.', deliverable: 'Launch, handover & next steps' },
]

export default function Page() {
  return (
    <>
      <section className="masthead container" aria-labelledby="intro-heading">
        <div className="masthead-topline">
          <p className="eyebrow">Ahmed Ali / Independent software engineer</p>
          <p className="project-availability">
            <span aria-hidden="true" /> Available for select projects
          </p>
        </div>
        <div className="masthead-title">
          <h1 id="intro-heading">
            Big ideas.
            <br />
            <em className="editorial-accent">Beautifully built.</em>
          </h1>
          <a href="#selected-work" className="work-jump" aria-label="Explore selected work">
            <span aria-hidden="true">
              <Arrow />
            </span>
            Explore the work
          </a>
        </div>
        <div className="masthead-bottom">
          <p className="masthead-intro">I build websites, mobile & desktop apps, and AI systems that move your business forward.</p>
          <div className="masthead-action">
            <Link href="/contact" className="button-primary">
              Let’s build your next thing <Arrow diagonal />
            </Link>
            <span>{site.experience.label} years of experience. Direct collaboration.</span>
          </div>
        </div>
      </section>

      <section id="selected-work" className="selected-work container" aria-labelledby="work-heading">
        <div className="section-rule">
          <h2 id="work-heading">
            Selected work <span>/ 01—03</span>
          </h2>
          <Link href="/work" className="text-link">
            All projects <Arrow diagonal />
          </Link>
        </div>
        <div className="editorial-projects">
          {['trackhrs', 'agentx'].map((slug, index) => {
            const study = getCaseStudy(slug)
            return study && <CaseStudyCard key={slug} study={study} className={'editorial-project editorial-project-' + (index + 1)} preload={index === 0} />
          })}
        </div>
        <article className="fintech-feature">
          <div className="fintech-copy">
            <p className="eyebrow">03 / FinTech & financial platforms</p>
            <h3>
              <Link href="/work/hysab-kytab">
                Better clarity.
                <br />
                <em className="editorial-accent">Better money habits.</em>
              </Link>
            </h3>
            <p>Behind Hysab Kytab’s everyday money experiences: backend architecture, financial data, and connected systems.</p>
            <p className="project-role">My contribution: backend & distributed systems</p>
            <Link href="/work/hysab-kytab" className="text-link">
              Explore Hysab Kytab <Arrow diagonal />
            </Link>
          </div>
          <div className="fintech-artwork">
            <Link href="/work/hysab-kytab" className="project-visual-link" aria-label="Explore the Hysab Kytab case study">
              <ProjectVisual slug="hysab-kytab" />
            </Link>
            <p className="image-note">Official Hysab Kytab product artwork.</p>
          </div>
        </article>
      </section>

      <section className="capabilities" aria-labelledby="services-heading">
        <div className="capabilities-grid container">
          <div className="capabilities-intro">
            <p className="eyebrow">What can we build?</p>
            <h2 id="services-heading">
              Your ambition.
              <br />
              <em className="editorial-accent">My expertise.</em>
            </h2>
            <p>A new product, a better website, or less manual work. Start with what your business needs.</p>
            <Link href="/services" className="button-white">
              Explore services <Arrow diagonal />
            </Link>
            <span className="capabilities-note">From a focused project to an ongoing partnership.</span>
          </div>
          <div className="capabilities-index">
            {clientServices.map((service) => (
              <Link key={service.slug} href={'/services?service=' + service.slug + '#service-detail'} className="capability-row">
                <span className="capability-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.outcome}</p>
                </div>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="collaboration-section container" aria-labelledby="collaboration-heading">
        <div className="collaboration-intro">
          <div>
            <p className="eyebrow">Good work starts with a good conversation</p>
            <h2 id="collaboration-heading">
              One partner.
              <br />
              <em className="editorial-accent">From idea to launch.</em>
            </h2>
          </div>
          <div>
            <p>You work directly with me. Clear priorities, regular progress, and thoughtful engineering at every step.</p>
            <Link href="/about" className="text-link">
              Meet your developer <Arrow diagonal />
            </Link>
          </div>
        </div>
        <ol className="delivery-steps">
          {process.map((step) => (
            <li key={step.number}>
              <span className="delivery-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="delivery-result">
                <span aria-hidden="true">↗</span> {step.deliverable}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <ContactCta heading="Something good starts here." description="A new website, an app, or a workflow that needs fixing. Tell me what you have in mind." />
    </>
  )
}
