import Arrow from '@/components/ui/Arrow'
import { site } from '@/content/site'
import Image from 'next/image'
import Link from 'next/link'

export default function StudioHero() {
  return (
    <section className="portfolio-hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="portfolio-hero-topline">
          <p>
            Ahmed Ali <span aria-hidden="true">/</span> Independent developer & product partner
          </p>
          <span className="portfolio-hero-availability">
            <span aria-hidden="true" /> Available for select projects
          </span>
        </div>

        <h1 id="hero-heading">
          <span>
            Distinctive <span>websites.</span>
          </span>
          <span>
            Ambitious <span>products.</span>
          </span>
        </h1>

        <div className="portfolio-hero-intro">
          <div className="portfolio-hero-description">
            <p>I help founders and agencies turn ambitious briefs into websites, apps, and useful AI. Thoughtful from the first idea to the final detail.</p>
            <span>
              {site.experience.label} years building software <span aria-hidden="true">·</span> Founder of TrackHRS
            </span>
          </div>
          <div className="portfolio-hero-actions">
            <Link href="/contact" className="studio-button">
              Start a project{' '}
              <span>
                <Arrow diagonal />
              </span>
            </Link>
            <a href="#selected-work" className="portfolio-hero-work-link">
              Explore selected work <Arrow />
            </a>
          </div>
        </div>

        <div className="portfolio-hero-projects" aria-label="A preview of selected projects">
          <Link href="/work/trackhrs" className="portfolio-hero-project portfolio-hero-project-main" aria-label="Explore TrackHRS: founder, product and engineering">
            <figure>
              <div className="portfolio-hero-project-image portfolio-hero-project-trackhrs">
                <div className="portfolio-hero-product-mark" aria-hidden="true">
                  <span>t.</span> TrackHRS
                </div>
                <Image src="/images/work/trackhrs-board.webp" alt="TrackHRS project board showing tasks across a demo workspace" width={1440} height={900} sizes="(max-width: 767px) 95vw, (max-width: 1100px) 50vw, 610px" preload />
              </div>
              <figcaption>
                <div>
                  <strong>TrackHRS</strong>
                  <span>Founder · Product & engineering</span>
                </div>
                <Arrow diagonal />
              </figcaption>
            </figure>
            <span className="portfolio-hero-image-note">Product screenshot · Demo workspace</span>
          </Link>
          <Link href="/work/agentx" className="portfolio-hero-project portfolio-hero-project-secondary" aria-label="Explore AgentX: AI platform engineering">
            <figure>
              <div className="portfolio-hero-project-image portfolio-hero-project-agentx">
                <div className="portfolio-hero-product-mark" aria-hidden="true">
                  <span>ax</span> AgentX
                </div>
                <Image src="/images/work/agentx-workflow-mockup.webp" alt="AgentX product mockup showing a code editor and mobile app preview" width={1536} height={1024} sizes="(max-width: 1100px) 30vw, 305px" />
              </div>
              <figcaption>
                <div>
                  <strong>AgentX</strong>
                  <span>AI platform engineering</span>
                </div>
                <Arrow diagonal />
              </figcaption>
            </figure>
            <span className="portfolio-hero-image-note">Product mockup · Demo content</span>
          </Link>
          <Link href="/work/hysab-kytab" className="portfolio-hero-project portfolio-hero-project-secondary" aria-label="Explore Hysab Kytab: backend architecture">
            <figure>
              <div className="portfolio-hero-project-image portfolio-hero-project-hysab">
                <div className="portfolio-hero-product-mark" aria-hidden="true">
                  <span>hk</span> Hysab Kytab
                </div>
                <Image src="/images/work/hysab-official.webp" alt="Official Hysab Kytab artwork showing spending and transaction views on two phones" width={1200} height={1489} sizes="(max-width: 1100px) 30vw, 305px" />
              </div>
              <figcaption>
                <div>
                  <strong>Hysab Kytab</strong>
                  <span>Backend architecture</span>
                </div>
                <Arrow diagonal />
              </figcaption>
            </figure>
            <span className="portfolio-hero-image-note">Official product artwork</span>
          </Link>
        </div>
        <div className="portfolio-hero-baseline">
          <p>Product thinking. Creative care. Solid engineering.</p>
          <a href="#selected-work">
            The work, in detail <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
