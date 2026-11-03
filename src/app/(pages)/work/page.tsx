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
      <section className="studio-work-intro container">
        <p className="studio-page-kicker">
          <span aria-hidden="true" /> Selected work / {String(studies.length).padStart(2, '0')} projects
        </p>
        <div className="studio-work-heading">
          <h1 className="studio-page-title">
            Less talk.
            <br />
            <em>More making.</em>
          </h1>
          <p>Ideas turned into products people can use. A closer look at the platforms, the craft, and my part in bringing them to life.</p>
        </div>
        <div className="studio-work-disciplines" aria-label="Project disciplines">
          <span>Digital products</span>
          <span>AI & automation</span>
          <span>Platform engineering</span>
        </div>
      </section>
      <section className="studio-work-collection container">
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
