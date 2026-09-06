import TerminalCard from '@/components/portfolio/TerminalCard'
import RollUpButton from '@/components/ui/RollUpButton'
import { site } from '@/content/site'
import { headlineStats } from '@/content/skills'
import { Icon } from '@iconify/react'

const terminalLines = [
  { prompt: '$', text: 'kafka-consumer --topic activity --group activity-workers', tone: 'info' as const },
  { text: 'consumer group balanced · 3 partitions · lag 0', tone: 'dim' as const },
  { text: '✓ redis dedup      12,481 events   0 duplicates', tone: 'ok' as const },
  { text: '✓ batch writer     100 items / 5s window', tone: 'ok' as const },
  { text: '✓ bullmq classify  queued 312 · failed 0', tone: 'ok' as const },
  { text: '✓ cache invalidate dashboards fresh', tone: 'ok' as const },
  { text: 'p99 write latency  38ms', tone: 'dim' as const },
]

const Hero = () => (
  <section className="bg-default-900 relative flex flex-col items-center justify-center overflow-hidden pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44">
    <span
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
      }}
    />
    <span aria-hidden="true" className="bg-primary/25 absolute -top-20 left-1/4 size-128 rounded-full blur-[120px]" />
    <span aria-hidden="true" className="bg-primary-6/20 absolute top-1/3 right-0 size-112 rounded-full blur-[120px]" />

    <div className="relative z-10 container">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pe-4 text-sm backdrop-blur-md">
          <span className="bg-primary-2 size-2 rounded-full" />
          <span className="text-white/80">Founder of TrackHRS · live on the market</span>
        </span>

        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-medium tracking-tight text-white md:text-6xl lg:mt-7.5 lg:text-[84px]">{site.tagline}</h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70 md:text-xl lg:mt-7">
          I&apos;m {site.name}, a software architect and engineering lead. I design and build event-driven backends, web and ecommerce platforms, cloud infrastructure and production AI systems, and lead the teams that ship them.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10">
          <RollUpButton href={site.socials.calendly} label="Get a consultation" variant="light" icon="lucide:arrow-right" external />
          <RollUpButton href={site.socials.linkedin} label="Hire me" variant="glass" external />
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
          <Icon icon="lucide:globe" className="size-4" />
          <span>{site.availability}</span>
        </div>

        <TerminalCard lines={terminalLines} className="mt-10 w-full max-w-3xl text-start lg:mt-12" />

        <div className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 text-start lg:mt-12 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl leading-none font-semibold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="mt-0.5 text-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div aria-hidden="true" className="from-body-bg absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t to-transparent md:h-24" />
  </section>
)

export default Hero
