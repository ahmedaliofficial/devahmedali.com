import ContactCta from '@/components/ContactCta'
import ProcessFlow from '@/components/portfolio/ProcessFlow'
import Chip from '@/components/ui/Chip'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { referenceFlows } from '@/content/reference-flows'
import { engagementModels, serviceCatalog } from '@/content/service-catalog'
import { site } from '@/content/site'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Architecture & AI Engineering Services',
  description: 'Backend engineering, system architecture, AI and agent systems, automation, web and ecommerce platforms, cloud and scaling, plus architecture and code audits, delivered end to end.',
  alternates: { canonical: '/services' },
}

const accentClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  'primary-1': 'bg-primary-1/10 text-primary-1',
  'primary-2': 'bg-primary-2/10 text-primary-2',
  'primary-4': 'bg-primary-4/10 text-primary-4',
  'primary-6': 'bg-primary-6/10 text-primary-6',
  'primary-8': 'bg-primary-8/10 text-primary-8',
}

const Page = () => (
  <>
    <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
      <div className="container">
        <p className="text-default-500 text-sm font-medium tracking-wide uppercase">Services</p>
        <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">What I can build for you</h1>
        <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">
          Ten services across the full stack of a modern product, from the backend and architecture underneath it to the AI, automation and infrastructure around it. Most engagements combine two or three.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <RollUpButton href={site.socials.calendly} label="Get a consultation" icon="lucide:arrow-right" external />
          <RollUpButton href="/work" label="See the work" variant="outline" />
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {serviceCatalog.map((service) => (
            <div key={service.slug} id={service.slug} className="border-default-200 scroll-mt-32 rounded-3xl border bg-white p-6 md:p-8">
              <span className={`inline-grid size-12 place-items-center rounded-full ${accentClasses[service.accent] ?? accentClasses.primary}`}>
                <Icon icon={service.icon} className="size-6" />
              </span>

              <h2 className="font-heading text-default-900 mt-5 text-xl font-semibold md:text-2xl">{service.title}</h2>
              <p className="text-default-500 mt-2.5 text-base">{service.summary}</p>

              <ul className="border-default-200 mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t pt-6 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-default-700 flex items-start gap-2.5 text-sm">
                    <Icon icon="lucide:check" className="text-default-400 mt-0.5 size-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeading align="left" eyebrow="Reference architectures" title="How I&apos;d approach the common ones" description="The shape each of these systems takes before a line is written. Yours will differ in the details, but the structure rarely does." />

        <div className="mt-10 grid grid-cols-1 gap-4">
          {referenceFlows.map((flow) => (
            <div key={flow.id} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-10">
                <div className="lg:w-80 lg:shrink-0">
                  <span className={`inline-grid size-11 place-items-center rounded-full ${accentClasses[flow.accent] ?? accentClasses.primary}`}>
                    <Icon icon={flow.icon} className="size-5" />
                  </span>
                  <h3 className="font-heading text-default-900 mt-4 text-lg font-semibold md:text-xl">{flow.title}</h3>
                  <p className="text-default-500 mt-2 text-sm md:text-base">{flow.description}</p>
                </div>

                <ProcessFlow steps={flow.steps} className="grow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container">
        <SectionHeading align="left" eyebrow="Working together" title="How engagements usually run" description="Whether that is one conversation, a fixed piece of work, or joining your team properly." />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {engagementModels.map((model) => (
            <div key={model.title} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <span className="bg-default-100 text-default-700 inline-grid size-11 place-items-center rounded-full">
                <Icon icon={model.icon} className="size-5" />
              </span>
              <h3 className="font-heading text-default-900 mt-5 text-lg font-semibold md:text-xl">{model.title}</h3>
              <p className="text-default-500 mt-2.5 text-base">{model.description}</p>
              <p className="text-default-400 border-default-200 mt-5 border-t pt-4 text-sm">
                <span className="text-default-600 font-medium">Best for:</span> {model.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCta heading="Not sure which of these you need?" description="Describe the problem in a couple of sentences and I'll tell you what I'd actually do about it, including when the answer is that you don't need me." />
  </>
)

export default Page
