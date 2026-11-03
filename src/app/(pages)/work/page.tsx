import ContactCta from '@/components/ContactCta'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import { getCaseStudy } from '@/content/case-studies'
import { site } from '@/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies',
  description: 'Explore software built by Ahmed Ali: TrackHRS, financial platforms, AI agents and real-time safety systems.',
  alternates: { canonical: '/work' },
}

const studies = ['trackhrs', 'hysab-kytab', 'agentx', 'omnivision'].map(getCaseStudy).filter((study) => study !== undefined)

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: studies.map((study, i) => ({ '@type': 'ListItem', position: i + 1, name: study.hero.title, url: site.url + '/work/' + study.slug })) }) }}
      />
      <section className="page-intro container">
        <p className="eyebrow">The portfolio</p>
        <h1>
          Ideas made real<span className="text-primary">.</span>
        </h1>
        <p>A selection of products and platforms I’ve built, with the thinking behind them.</p>
      </section>
      <section className="container pb-20">
        <h2 className="sr-only">Selected projects</h2>
        <div className="work-grid">
          {studies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} size={i === 0 ? 'large' : 'default'} />
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  )
}
