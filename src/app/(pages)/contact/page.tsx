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

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Let's work together</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.08] font-medium tracking-[-0.045em] md:text-[4.5rem]">
              Big idea?
              <br />
              <span className="text-primary">Let's talk.</span>
            </h1>
            <p className="text-default-600 mt-6 max-w-md text-lg leading-relaxed">Tell me what you&apos;re building, or what you want to improve. A few sentences are a great start.</p>
            <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="bg-primary mt-8 inline-flex items-center gap-8 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2446c4]">
              Book a 30-minute call <span aria-hidden="true">↗</span>
            </a>
            <div className="border-default-200 mt-10 border-t pt-6">
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
          <div className="border-default-200 rounded-3xl border bg-white p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-medium tracking-tight">A little about your project</h2>
            <p className="text-default-500 mt-2 mb-8 text-sm leading-relaxed">I&apos;ll read your message and get back to you personally.</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="border-default-200 border-t py-16 md:py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Before we say hello.</h2>
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
