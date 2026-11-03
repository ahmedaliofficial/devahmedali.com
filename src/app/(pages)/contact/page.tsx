import Arrow from '@/components/ui/Arrow'
import { getClientService } from '@/content/client-services'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

const CONTACT_DESCRIPTION = 'Have a product to build or a system to improve? Start a conversation with Ahmed Ali about your project, or book a 30-minute call.'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: { type: 'website', title: 'Start a project with Ahmed Ali', description: CONTACT_DESCRIPTION, url: '/contact' },
  twitter: { card: 'summary_large_image', title: 'Start a project with Ahmed Ali', description: CONTACT_DESCRIPTION },
}

const faqs = [
  { question: 'Do I need a finished brief?', answer: 'No. A few sentences about your idea, your users and what you want to achieve are enough to start the conversation.' },
  { question: 'Can you help with an existing product?', answer: 'Yes. I can review what you have, help your team with a specific problem, or plan the next stage of the product.' },
  { question: 'Do you work with international clients?', answer: `Yes. ${site.availability}. We can agree on a schedule and communication approach that works across our time zones.` },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
}

type ContactPageProps = { searchParams: Promise<{ service?: string | string[] }> }

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const selectedService = getClientService((await searchParams).service)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="studio-contact-hero">
        <div className="studio-contact-grid container">
          <div className="studio-contact-copy">
            <p className="studio-page-kicker">
              <span aria-hidden="true" /> It starts with a conversation
            </p>
            <h1 className="studio-page-title">
              Your next
              <br />
              big thing.
              <br />
              <em>Let’s talk.</em>
            </h1>
            <p className="studio-contact-description">A new product, a better website, or an extra pair of hands for your agency. Tell me what you have in mind.</p>
            <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="button-primary service-contact-button">
              Book a 30-minute call <Arrow diagonal />
            </a>
            <div className="studio-contact-direct">
              <p className="text-default-500 text-xs font-medium">Prefer email?</p>
              <a href={`mailto:${site.email}`} className="text-default-900 decoration-default-300 hover:text-primary mt-2 inline-block text-base font-medium break-all underline underline-offset-4 transition-colors">
                {site.email}
              </a>
              <p className="text-default-600 mt-6 flex items-start gap-2.5 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#25816a]" />
                {site.availability}
              </p>
              <div className="text-default-700 mt-6 flex gap-6 text-sm font-medium">
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href={site.socials.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="studio-enquiry-panel">
            <div className="studio-enquiry-top">
              <span>YOUR NEXT CHAPTER</span>
              <Arrow diagonal />
            </div>
            <h2>A little about your project.</h2>
            <p className="studio-enquiry-intro">Straight to my inbox. I&apos;ll get back to you personally.</p>
            {selectedService && (
              <p className="service-contact-selected">
                Let’s talk about<strong>{selectedService.title}</strong>You can change the service below.
              </p>
            )}
            <ContactForm initialService={selectedService?.slug} />
          </div>
        </div>
      </section>
      <section className="studio-contact-faq">
        <div className="studio-contact-faq-grid container">
          <div>
            <p className="studio-page-kicker">A few useful details</p>
            <h2>
              Before we
              <br />
              <em>say hello.</em>
            </h2>
            <Link href="/services" className="text-primary mt-5 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
              Explore services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-default-200 border-b py-5 first:border-t">
                <summary className="text-default-900 flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="text-primary shrink-0 text-xl font-normal transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-default-600 mt-4 pr-8 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
