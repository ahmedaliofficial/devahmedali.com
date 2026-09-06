import Accordion from '@/components/ui/Accordion'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/content/site'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactForm from './components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ahmed Ali about architecture reviews, backend and distributed systems work, infrastructure and scaling, or building an AI system that has to reach production.',
  alternates: { canonical: '/contact' },
}

const faqs = [
  {
    question: 'What kind of work do you take on?',
    answer:
      'Architecture and system design, backend and API engineering, event-driven pipelines, infrastructure and scaling, and AI systems that need to run in production rather than in a notebook. I also take on MVPs where getting the foundations right matters more than shipping in two weeks.',
  },
  {
    question: 'Do you work with teams outside Pakistan?',
    answer: `Yes — ${site.availability.toLowerCase()}. Most of my work is with distributed teams, and I'm used to overlapping across time zones.`,
  },
  {
    question: 'Can you review an architecture we already have?',
    answer: 'Often the most useful thing I do. If you have a system that is creaking under load, costing more than it should, or about to be rewritten, a review will usually tell you which of those is actually the problem.',
  },
  {
    question: 'How quickly do you reply?',
    answer: 'Usually within a day. If you include what you are building and where it is getting difficult, the first reply will be a lot more useful than a scheduling message.',
  },
]

const Page = () => (
  <>
    <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
      <div className="container">
        <p className="text-default-500 text-sm font-medium tracking-wide uppercase">Contact</p>
        <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">Let&apos;s talk about what you&apos;re building</h1>
        <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">Tell me the shape of the problem — the system, the constraint, and what &quot;working&quot; would look like. I&apos;ll tell you how I&apos;d approach it.</p>
      </div>
    </section>

    <section className="pb-12 md:pb-20">
      <div className="container">
        <div className="border-default-200 grid grid-cols-1 overflow-hidden rounded-3xl border bg-white lg:grid-cols-12">
          <div className="bg-default-900 relative overflow-hidden p-6 md:p-10 lg:col-span-5">
            <span aria-hidden="true" className="bg-primary/20 absolute -top-24 -right-16 size-72 rounded-full blur-3xl" />

            <div className="relative flex h-full flex-col">
              <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">Reach me directly</h2>
              <p className="mt-3 text-base text-white/70">No forms required if you&apos;d rather not — email and LinkedIn both reach me.</p>

              <div className="mt-8 flex flex-col gap-4">
                <a href={`mailto:${site.email}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                    <Icon icon="lucide:mail" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/50">Email</span>
                    <span className="block truncate text-base font-medium text-white">{site.email}</span>
                  </span>
                </a>

                <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                    <Icon icon="tabler:brand-linkedin" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/50">LinkedIn</span>
                    <span className="block truncate text-base font-medium text-white">devahmedali</span>
                  </span>
                </a>

                <a href={site.socials.github} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                    <Icon icon="tabler:brand-github" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/50">GitHub</span>
                    <span className="block truncate text-base font-medium text-white">ahmedaliofficial</span>
                  </span>
                </a>
              </div>

              <div className="mt-auto pt-8">
                <p className="flex items-center gap-2 text-sm text-white/60">
                  <Icon icon="lucide:map-pin" className="size-4" />
                  {site.location}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
                  <Icon icon="lucide:clock" className="size-4" />
                  Usually replies within a day
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 lg:col-span-7">
            <Suspense fallback={<div className="bg-default-100 h-125 animate-pulse rounded-2xl" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionHeading align="left" eyebrow="Before you ask" title="Common questions" />
        <Accordion items={faqs} className="mt-10 max-w-3xl" />
      </div>
    </section>
  </>
)

export default Page
