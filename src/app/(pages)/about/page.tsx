import ContactCta from '@/components/ContactCta'
import StatsBand from '@/components/portfolio/StatsBand'
import Chip from '@/components/ui/Chip'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/content/site'
import { headlineStats, skillGroups } from '@/content/skills'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Ahmed Ali is a software architect and engineering lead with six years across FinTech, AI and SaaS. How I work, what I believe about architecture, and the experience behind it.',
  alternates: { canonical: '/about' },
}

const principles = [
  {
    title: 'Architecture is a series of trade-offs, stated out loud',
    description: 'There is no best design, only the one whose costs you have chosen deliberately. I would rather write down why we picked Kafka over a queue than let the reason evaporate in six months.',
    icon: 'lucide:scale',
  },
  {
    title: 'Design the failure path first',
    description: 'The happy path is not the one that wakes you at 3am. Retries, circuit breakers and dead-letter queues belong in the first diagram, not the second incident review.',
    icon: 'lucide:shield-alert',
  },
  {
    title: 'Boundaries are an organisational tool',
    description: 'Service boundaries decide who can ship without asking permission. Getting them right cut cross-team integration issues by more than half on my current team.',
    icon: 'lucide:git-fork',
  },
  {
    title: 'Build for the engineer who inherits it',
    description: 'Clever code is a liability the moment its author moves on. I optimise for the person reading it a year from now, which is often me.',
    icon: 'lucide:users',
  },
]

const domains = [
  {
    title: 'FinTech & regulated systems',
    description: 'Personal finance platforms delivered to digital banks, where precision is non-negotiable and downtime is a headline. Multi-database consolidation, encrypted transaction flow, audit trails and bank-grade availability.',
    tags: ['Golang', 'Kafka', 'Multi-database', 'gRPC'],
    icon: 'lucide:landmark',
  },
  {
    title: 'AI & intelligent products',
    description: 'Real-time computer vision and alerting, RAG pipelines, advisory chatbots and multi-agent platforms that generate working software. AI built as a service with evaluation and failure paths, not a demo.',
    tags: ['LangChain', 'FastAPI', 'Multi-agent', 'MCP'],
    icon: 'lucide:brain-circuit',
  },
  {
    title: 'SaaS & product engineering',
    description: 'Founding and shipping a live SaaS end to end: desktop agent, microservices, billing, admin portal and the deployment pipeline underneath. Plus MVPs taken from nothing to production for other teams.',
    tags: ['NestJS', 'Rust · Tauri', 'Kubernetes', 'BullMQ'],
    icon: 'lucide:rocket',
  },
  {
    title: 'Ecommerce, CMS & ERP delivery',
    description: 'Hundreds of client platforms across ecommerce, content management and ERP integration, covering high-traffic storefronts, admin systems and the third-party integrations that hold a business together.',
    tags: ['Next.js', 'Laravel', 'REST', 'Integrations'],
    icon: 'lucide:shopping-cart',
  },
]

const leadership = [
  { value: '20+', label: 'Engineers led', description: 'Across AI, ecommerce and CMS product lines' },
  { value: '50%+', label: 'Fewer integration issues', description: 'From clear service boundaries and ownership' },
  { value: '~70%', label: 'Less deployment effort', description: 'Kubernetes and Docker replacing manual releases' },
]

const certifications = ['Microservices Foundations (Kong)', 'Docker Foundations (Docker)', 'Microsoft Azure AI Essentials (Microsoft)', 'Generative AI with Multi-Agent LangChain', 'Machine Learning Foundations: Statistics']

const Page = () => (
  <>
    <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
      <div className="container">
        <p className="text-default-500 text-sm font-medium tracking-wide uppercase">About</p>
        <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">I build the systems underneath the product</h1>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-default-500 flex flex-col gap-4 text-lg md:text-xl">
              <p>
                I&apos;m {site.name}, a software architect and engineering lead. Six years in, my work has moved from writing FinTech backends to designing the systems around them and leading the teams that build them.
              </p>
              <p>
                Most of what I do sits at the point where a product starts outgrowing its original architecture. That is rarely a coding problem. It is usually a boundaries problem, a data-flow problem, or a set of trade-offs nobody wrote down when the first version shipped.
              </p>
              <p>I also founded TrackHRS, which taught me the parts of software that architecture diagrams leave out: pricing, support, deployment on a Sunday, and the difference between a system that works and a product people pay for.</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <h2 className="font-heading text-default-900 text-lg font-semibold">At a glance</h2>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="text-default-500 text-sm">Role</dt>
                  <dd className="text-default-900 font-medium">{site.roleFull}</dd>
                  <dd className="text-default-500 mt-0.5 text-sm">{site.specialisms}</dd>
                </div>
                <div>
                  <dt className="text-default-500 text-sm">Availability</dt>
                  <dd className="text-default-900 font-medium">{site.availability}</dd>
                </div>
                <div>
                  <dt className="text-default-500 text-sm">Education</dt>
                  <dd className="text-default-900 font-medium">BS Software Engineering, Virtual University of Pakistan</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="border-default-200 mt-12 border-t pt-10">
          <StatsBand stats={headlineStats} columns={4} />
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container">
        <SectionHeading align="left" eyebrow="How I work" title="Four things I keep coming back to" />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <span className="bg-default-100 text-default-700 mb-5 inline-grid size-11 place-items-center rounded-full">
                <Icon icon={principle.icon} className="size-5" />
              </span>
              <h3 className="font-heading text-default-900 text-lg font-semibold md:text-xl">{principle.title}</h3>
              <p className="text-default-500 mt-2.5 text-base">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container">
        <SectionHeading align="left" eyebrow="Domains" title="Where I&apos;ve done it" description="The kinds of systems I've spent the most time inside, and what each one taught me about designing for its particular failure mode." />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {domains.map((domain) => (
            <div key={domain.title} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <span className="bg-default-100 text-default-700 mb-5 inline-grid size-11 place-items-center rounded-full">
                <Icon icon={domain.icon} className="size-5" />
              </span>

              <h3 className="font-heading text-default-900 text-xl font-semibold">{domain.title}</h3>
              <p className="text-default-500 mt-2.5 text-base">{domain.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {domain.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-default-200 mt-10 rounded-3xl border bg-white p-6 md:p-8">
          <h3 className="font-heading text-default-900 text-base font-semibold">Leading teams</h3>
          <p className="text-default-500 mt-2 max-w-2xl text-base">Alongside the architecture work, I lead engineering teams, setting standards, drawing service boundaries and mentoring engineers on system design and what it takes to run production well.</p>
          <div className="mt-6">
            <StatsBand stats={leadership} columns={3} />
          </div>
        </div>
      </div>
    </section>

    <section id="toolkit" className="scroll-mt-32 py-12 md:py-20">
      <div className="container">
        <SectionHeading align="left" eyebrow="Toolkit" title="What I work with" />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-default-200 rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-2.5">
                <span className="bg-default-100 text-default-700 grid size-9 place-items-center rounded-full">
                  <Icon icon={group.icon} className="size-4.5" />
                </span>
                <h3 className="font-heading text-default-900 text-base font-semibold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-default-200 mt-10 rounded-2xl border bg-white p-6 md:p-8">
          <h3 className="font-heading text-default-900 text-base font-semibold">Certifications</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification} className="text-default-600 flex items-start gap-2.5 text-base">
                <Icon icon="lucide:circle-check" className="text-default-400 mt-1 size-4 shrink-0" />
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <ContactCta />
  </>
)

export default Page
