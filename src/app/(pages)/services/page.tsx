import ContactCta from '@/components/ContactCta'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'

const SERVICES_DESCRIPTION = 'Web products, AI automation and software architecture by Ahmed Ali. From a new idea to a reliable product your customers can use.'

export const metadata: Metadata = {
  title: 'Product Development, AI & Architecture Services',
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: '/services' },
  keywords: [...site.seo.keywords],
  openGraph: { type: 'website', title: 'Work with Ahmed Ali', description: SERVICES_DESCRIPTION, url: '/services' },
  twitter: { card: 'summary_large_image', title: 'Work with Ahmed Ali', description: SERVICES_DESCRIPTION },
}

const services = [
  {
    number: '01',
    id: 'product-development',
    title: 'Build your product.',
    for: 'For founders and growing businesses',
    description: 'Turn an idea into a website, app or platform people can actually use. I connect the customer experience with the systems behind it, from the first plan through launch.',
    deliverables: ['Websites, SaaS apps & MVPs', 'Ecommerce, dashboards & portals', 'APIs, payments & integrations'],
    project: 'See TrackHRS',
    href: '/work/trackhrs',
  },
  {
    number: '02',
    id: 'ai-automation',
    title: 'Put AI to work.',
    for: 'For teams spending too much time on manual work',
    description: 'Give your team tools that find information, connect your systems and handle repetitive tasks. Built around a clear use case, with human review where it matters.',
    deliverables: ['AI assistants & document search', 'Agents & business workflows', 'Evaluation, monitoring & handover'],
    project: 'See AgentX',
    href: '/work/agentx',
  },
  {
    number: '03',
    id: 'architecture-scaling',
    title: 'Make growth easier.',
    for: 'For products outgrowing their first version',
    description: 'Understand what is slowing your product down, then make a practical plan to fix it. I help with architecture, performance and infrastructure, and work alongside your team to deliver the changes.',
    deliverables: ['Architecture & code reviews', 'Performance & cloud optimisation', 'Technical direction & team support'],
    project: 'See Hysab Kytab',
    href: '/work/hysab-kytab',
  },
]

const steps = [
  { number: '01', title: 'Talk it through', description: 'We discuss your goals, users and what needs to change.' },
  { number: '02', title: 'Agree on a plan', description: 'You get a clear scope, priorities and delivery milestones.' },
  { number: '03', title: 'Build together', description: 'Regular demos keep you involved and the work on track.' },
  { number: '04', title: 'Launch with clarity', description: 'Testing, documentation and a handover your team can use.' },
]

const faqs = [
  { question: 'Can we start with a small piece of work?', answer: 'Yes. We can begin with a review, a prototype or one clearly defined feature, then decide on the next step together.' },
  { question: 'Can you work with our existing team?', answer: 'Yes. I can own a project or join your team as a software architect and engineering lead. We will agree on responsibilities and how we communicate before starting.' },
  { question: 'How much will my project cost?', answer: 'The scope, existing system and timeline determine the cost. Share a short brief and we can discuss a suitable approach before committing to the work.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container">
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">How I can help</p>
          <h1 className="mt-5 max-w-3xl text-[2.75rem] leading-[1.08] font-medium tracking-[-0.045em] md:text-[4.5rem]">
            Your next idea.
            <br />
            <span className="text-primary">Built to work.</span>
          </h1>
          <p className="text-default-600 mt-6 max-w-xl text-lg leading-relaxed">A new product, a smarter workflow, or a system ready to grow. Let&apos;s make the next step clear.</p>
          <Link href="/contact" className="bg-primary mt-8 inline-flex items-center gap-8 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2446c4]">
            Tell me about your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section aria-label="Services" className="pb-16 md:pb-24">
        <div className="border-default-200 container border-t">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="border-default-200 grid scroll-mt-28 gap-6 border-b py-10 md:grid-cols-[60px_1fr_1.15fr] md:gap-10 md:py-14">
              <span className="text-default-500 text-sm">{service.number}</span>
              <div>
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{service.title}</h2>
                <p className="text-default-500 mt-3 max-w-xs text-sm leading-relaxed">{service.for}</p>
              </div>
              <div>
                <p className="text-default-600 max-w-xl text-base leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="text-default-700 flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="text-primary">
                        ✓
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-primary mt-7 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
                  {service.project}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Working together</p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            A simple process.
            <br />
            No guessing what happens next.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="border-default-200 border-t pt-5">
                <span className="text-primary text-xs font-semibold">{step.number}</span>
                <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                <p className="text-default-600 mt-3 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <h2 className="text-3xl font-medium tracking-tight">A few useful answers.</h2>
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
      <ContactCta heading="Have something in mind?" description="Share what you want to build. We can figure out the right starting point together." />
    </>
  )
}
