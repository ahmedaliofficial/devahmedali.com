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
  description: 'Ahmed Ali — solution architect with six years across FinTech, AI and SaaS. How I work, what I believe about architecture, and the experience behind it.',
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
    description: 'Clever code is a liability the moment its author moves on. I optimise for the person reading it a year from now — which is often me.',
    icon: 'lucide:users',
  },
]

const experience = [
  {
    role: 'Senior Technical Officer',
    company: 'TeamX Pakistan',
    period: 'Apr 2026 – Present',
    description: 'Leading 20+ engineers across AgentX and client-facing AI, ecommerce and CMS products. Set the architecture standards and service boundaries that cut cross-team integration issues by over 50%, and mentor engineers on system design and running production well.',
    tags: ['Leadership', 'AI platforms', 'System design'],
  },
  {
    role: 'Backend Engineer',
    company: 'Jaffer Business Systems (JBS Global)',
    period: 'Oct 2024 – Apr 2026',
    description: 'Architected the backend for Hysab Kytab, a personal finance platform used by digital banks including Temenos and Interswitch. Built OmniVision, a real-time AI workplace safety platform. Brought GCP costs down ~25% through infrastructure and observability work.',
    tags: ['FinTech', 'Kafka', 'Golang', 'Multi-database'],
  },
  {
    role: 'Team Lead & Senior Software Engineer',
    company: 'TeamX Pakistan',
    period: 'Feb 2022 – Oct 2024',
    description: 'Led a 5-person team building chat, CMS and ecommerce platforms serving thousands of concurrent users. Introduced Kubernetes and Docker, cutting manual deployment effort by ~70% and keeping environment issues out of production.',
    tags: ['Kubernetes', 'NestJS', 'Next.js'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Deevloopers',
    period: 'Nov 2020 – Jan 2022',
    description: 'Built six client web applications on React, Node.js and Laravel with REST APIs and ERP integrations, owning the full delivery cycle from database design through to hosting.',
    tags: ['React', 'Node.js', 'Laravel'],
  },
]

const certifications = ['Microservices Foundations — Kong', 'Docker Foundations — Docker', 'Microsoft Azure AI Essentials — Microsoft', 'Generative AI with Multi-Agent LangChain', 'Machine Learning Foundations: Statistics']

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
                I&apos;m {site.name}, a solution architect based in {site.location}. Six years in, my work has moved from writing FinTech backends to designing the systems around them and leading the teams that build them.
              </p>
              <p>
                Most of what I do sits at the point where a product starts outgrowing its original architecture. That is rarely a coding problem. It is usually a boundaries problem, a data-flow problem, or a set of trade-offs nobody wrote down when the first version shipped.
              </p>
              <p>I also founded TrackHRS, which taught me the parts of software that architecture diagrams leave out — pricing, support, deployment on a Sunday, and the difference between a system that works and a product people pay for.</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <h2 className="font-heading text-default-900 text-lg font-semibold">At a glance</h2>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="text-default-500 text-sm">Role</dt>
                  <dd className="text-default-900 font-medium">{site.roleFull}</dd>
                </div>
                <div>
                  <dt className="text-default-500 text-sm">Based in</dt>
                  <dd className="text-default-900 font-medium">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-default-500 text-sm">Availability</dt>
                  <dd className="text-default-900 font-medium">{site.availability}</dd>
                </div>
                <div>
                  <dt className="text-default-500 text-sm">Education</dt>
                  <dd className="text-default-900 font-medium">BS Software Engineering, Virtual University of Pakistan (2025)</dd>
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
        <SectionHeading align="left" eyebrow="Experience" title="Where I&apos;ve done it" />

        <div className="mt-10 flex flex-col gap-4">
          {experience.map((role) => (
            <div key={`${role.company}-${role.period}`} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <div>
                  <h3 className="font-heading text-default-900 text-xl font-semibold">{role.role}</h3>
                  <p className="text-default-600 mt-0.5 text-base font-medium">{role.company}</p>
                </div>
                <p className="text-default-500 shrink-0 text-sm">{role.period}</p>
              </div>

              <p className="text-default-500 mt-4 text-base">{role.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-20">
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
