import ContactCta from '@/components/ContactCta'
import ServiceExplorer from '@/components/portfolio/ServiceExplorer'
import Arrow from '@/components/ui/Arrow'
import { clientServices, getClientService } from '@/content/client-services'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'

const SERVICES_DESCRIPTION = 'SaaS products, websites, AI agents, automation, ecommerce, mobile and desktop apps. Work directly with Ahmed Ali from the first plan to a useful release.'

export const metadata: Metadata = {
  title: 'Web, App & AI Development Services',
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: '/services' },
  keywords: [...site.seo.keywords],
  openGraph: { type: 'website', title: 'Work with Ahmed Ali', description: SERVICES_DESCRIPTION, url: '/services' },
  twitter: { card: 'summary_large_image', title: 'Work with Ahmed Ali', description: SERVICES_DESCRIPTION },
}

const engagements = [
  { number: '01', title: 'Find the starting point.', description: 'Bring an idea, a prototype or a problem. A focused review helps us agree on the priorities and a sensible scope.' },
  { number: '02', title: 'Build something useful.', description: 'A defined project with milestones, working demos and room for your feedback throughout the build.' },
  { number: '03', title: 'Keep moving forward.', description: 'Continue with improvements, product releases or technical support alongside your existing team.' },
]

const faqs = [
  { question: 'Can we start with a small piece of work?', answer: 'Yes. We can begin with a review, a prototype or one clearly defined feature, then decide on the next step together.' },
  { question: 'Can you work with our existing team?', answer: 'Yes. I can own a project or join your team as a software architect and engineering lead. We will agree on responsibilities and how we communicate before starting.' },
  { question: 'What if my project needs several services?', answer: 'That is common. A SaaS product might need a website, payments and an AI assistant. Tell me about the overall goal and we can shape one plan around it.' },
  { question: 'How much will my project cost?', answer: 'The scope, existing system and timeline determine the cost. Share a short brief and we can discuss a suitable approach before committing to the work.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
}

type ServicesPageProps = { searchParams: Promise<{ service?: string | string[] }> }

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const requestedService = getClientService((await searchParams).service)
  const initialService = requestedService || clientServices[0]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="service-intro">
        <div className="service-intro-grid container">
          <div>
            <p className="service-kicker">Good ideas deserve good execution</p>
            <h1>
              What do you
              <br />
              want to <em>build?</em>
            </h1>
          </div>
          <div className="service-intro-copy">
            <p>A new product. A better website. A smarter way of working. Choose your starting point and we’ll shape the right solution.</p>
            <Link href="/contact" className="text-link">
              Talk through your idea <Arrow diagonal />
            </Link>
          </div>
        </div>
      </section>
      <section className="service-catalogue" aria-label="Explore development services">
        <div className="container">
          <div className="service-catalogue-topline">
            <p className="service-kicker">{String(clientServices.length).padStart(2, '0')} ways I can help</p>
            <p>Select a service to see what we can do together.</p>
          </div>
          <ServiceExplorer key={initialService.slug} initialId={initialService.slug} />
        </div>
      </section>
      <section className="service-engagements" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="service-section-heading">
            <div>
              <p className="service-kicker">Working together</p>
              <h2 id="engagement-heading">Start where you are.</h2>
            </div>
            <p>You work directly with me. We agree on the scope, stay close to the work and make the next step clear.</p>
          </div>
          <div className="service-engagement-grid">
            {engagements.map((engagement) => (
              <article key={engagement.number} className="service-engagement">
                <span>{engagement.number}</span>
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="service-faq" aria-labelledby="service-faq-heading">
        <div className="service-faq-grid container">
          <div>
            <p className="service-kicker">Before we begin</p>
            <h2 id="service-faq-heading">A few useful answers.</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactCta heading="Let’s make it happen." description="Share the idea, the challenge or the product you already have. We’ll figure out a useful next step." />
    </>
  )
}
