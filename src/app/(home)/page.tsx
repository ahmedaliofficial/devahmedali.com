import ContactCta from '@/components/ContactCta'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import Arrow from '@/components/ui/Arrow'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { getCaseStudy } from '@/content/case-studies'
import { offers } from '@/content/portfolio'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: DEFAULT_PAGE_TITLE },
  description: site.seo.description,
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="studio-topline">
            <p className="eyebrow">Ahmed Ali / Independent software engineer</p>
            <p className="availability">
              <span /> Available for select projects
            </p>
          </div>
          <div className="studio-intro">
            <h1>
              Your next idea.
              <br />
              <span>Built beautifully.</span>
            </h1>
            <div className="studio-description">
              <p>I turn ambitious ideas into thoughtful digital products. Web, mobile, and AI — designed to work beautifully, built to grow.</p>
              <Link href="/contact" className="button-primary">
                Let’s build something <Arrow diagonal />
              </Link>
              <p className="studio-experience">{site.experience.label} years of building. One dedicated partner.</p>
            </div>
          </div>
          <div className="studio-showcase">
            <Link href="/work/trackhrs" className="studio-project studio-project-trackhrs" aria-label="Explore TrackHRS case study">
              <div className="studio-project-top">
                <span>01 / TrackHRS</span>
                <Arrow diagonal />
              </div>
              <Image src="/images/work/trackhrs-mockup.webp" alt="TrackHRS work platform displayed on a laptop, based on real product documentation" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 65vw" preload />
              <div className="studio-project-bottom">
                <span>
                  A whole business.
                  <br />
                  <strong>Working together.</strong>
                </span>
                <span className="showcase-label">SaaS platform</span>
              </div>
            </Link>
            <Link href="/work/agentx" className="studio-project studio-project-agentx" aria-label="Explore AgentX case study">
              <div className="studio-project-top">
                <span>02 / AgentX</span>
                <Arrow diagonal />
              </div>
              <Image src="/images/work/agentx-mockup.webp" alt="AgentX AI app builder with a real website preview, presented in a desktop mockup" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 40vw" />
              <div className="studio-project-bottom">
                <span>
                  An idea, a prompt.
                  <br />
                  <strong>A product.</strong>
                </span>
                <span className="showcase-label">AI workspace</span>
              </div>
            </Link>
          </div>
          <p className="studio-image-caption">Product mockups based on documentation. Demo content shown.</p>
        </div>
        <div className="experience-strip container">
          <span>From first idea to what’s next.</span>
          <div>
            <span>Web & SaaS</span>
            <span>AI & automation</span>
            <span>Backend & cloud</span>
          </div>
          <span className="strip-note">Working with teams worldwide ↗</span>
        </div>
      </section>

      <section id="selected-work" className="section-space">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Real products.
                <br />
                Thoughtfully built.
              </h2>
            </div>
            <div>
              <p>
                A few things I’ve helped bring to life,
                <br className="hidden md:block" /> from SaaS platforms to AI systems.
              </p>
              <Link href="/work" className="text-link mt-5">
                View all work <Arrow diagonal />
              </Link>
            </div>
          </div>
          <div className="work-grid">
            {['trackhrs', 'hysab-kytab', 'agentx'].map((slug, index) => {
              const study = getCaseStudy(slug)
              return study && <CaseStudyCard key={slug} study={study} size={index === 0 ? 'large' : 'default'} />
            })}
          </div>
        </div>
      </section>

      <section className="services-section section-space">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow">How I can help</p>
              <h2>
                Your next step,
                <br />
                made simpler.
              </h2>
            </div>
            <p>
              One partner for the product your customers see
              <br className="hidden md:block" /> and the engineering that makes it work.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <Link key={offer.number} href="/services" className="offer-card">
                <div className="offer-top">
                  <span>{offer.number}</span>
                  <Arrow diagonal />
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-tags">{offer.tags}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="approach-grid container">
          <div>
            <p className="eyebrow">A person, not a pipeline</p>
            <h2>
              Big-picture thinking.
              <br />
              Hands-on building.
            </h2>
            <p className="approach-intro">You work directly with the person building your product. I bring the technical direction, practical decisions, and care it takes to get from “what if” to launch.</p>
            <Link href="/about" className="text-link mt-6">
              A little more about me <Arrow diagonal />
            </Link>
          </div>
          <div className="process-list">
            {[
              ['01', 'Start with a conversation', 'We talk about your goals, your users, and what success looks like.'],
              ['02', 'Make a clear plan', 'You get a practical scope, priorities, and a shared direction before we build.'],
              ['03', 'Build, review, launch', 'Stay involved with regular progress updates and a product you can try along the way.'],
            ].map(([number, title, description]) => (
              <div key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
