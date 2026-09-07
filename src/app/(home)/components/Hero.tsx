'use client'

import TerminalCard from '@/components/portfolio/TerminalCard'
import MovingBorderButton from '@/components/ui/aceternity/MovingBorderButton'
import NumberTicker from '@/components/ui/aceternity/NumberTicker'
import Spotlight from '@/components/ui/aceternity/Spotlight'
import TextGenerateEffect from '@/components/ui/aceternity/TextGenerateEffect'
import RollUpButton from '@/components/ui/RollUpButton'
import { site } from '@/content/site'
import { headlineStats } from '@/content/skills'
import { Icon } from '@iconify/react'
import { motion, type Variants } from 'motion/react'

const terminalLines = [
  { prompt: '$', text: 'kafka-consumer --topic activity --group activity-workers', tone: 'info' as const },
  { text: 'consumer group balanced · 3 partitions · lag 0', tone: 'dim' as const },
  { text: '✓ redis dedup      12,481 events   0 duplicates', tone: 'ok' as const },
  { text: '✓ batch writer     100 items / 5s window', tone: 'ok' as const },
  { text: '✓ bullmq classify  queued 312 · failed 0', tone: 'ok' as const },
  { text: '✓ cache invalidate dashboards fresh', tone: 'ok' as const },
  { text: 'p99 write latency  38ms', tone: 'dim' as const },
]

/** Each block of the hero enters on the same curve, a beat after the one above it. */
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

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

    <Spotlight />

    <span aria-hidden="true" className="bg-primary/25 animate-aurora absolute -top-20 left-1/4 size-128 rounded-full blur-[120px]" />
    <span aria-hidden="true" className="bg-primary-6/20 animate-aurora absolute top-1/3 right-0 size-112 rounded-full blur-[120px] [animation-delay:-9s]" />

    <div className="relative z-10 container">
      <motion.div className="flex flex-col items-center text-center" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.span variants={rise} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pe-4 text-sm backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="bg-primary-2 absolute inline-flex size-full animate-ping rounded-full opacity-75" />
            <span className="bg-primary-2 relative inline-flex size-2 rounded-full" />
          </span>
          <span className="text-white/80">Founder of TrackHRS · live on the market</span>
        </motion.span>

        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-medium tracking-tight text-white md:text-6xl lg:mt-7.5 lg:text-[84px]">
          <TextGenerateEffect words={site.tagline} delay={0.25} />
        </h1>

        <motion.p variants={rise} className="mt-5 max-w-2xl text-lg text-white/70 md:text-xl lg:mt-7">
          I&apos;m {site.name}, a software architect and engineering lead. I design and build event-driven backends, web and ecommerce platforms, cloud infrastructure and production AI systems, and lead the teams that ship them.
        </motion.p>

        <motion.div variants={rise} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10">
          <MovingBorderButton href={site.socials.calendly} label="Get a consultation" icon="lucide:arrow-right" external />
          <RollUpButton href={site.socials.calendly} label="Hire me" variant="glass" external />
        </motion.div>

        <motion.div variants={rise} className="mt-6 flex items-center gap-2 text-sm text-white/50">
          <Icon icon="lucide:globe" className="size-4" />
          <span>{site.availability}</span>
        </motion.div>

        <motion.div variants={rise} className="w-full">
          <TerminalCard lines={terminalLines} animated className="mx-auto mt-10 w-full max-w-3xl text-start lg:mt-12" />
        </motion.div>

        <div className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 text-start lg:mt-12 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <motion.div key={stat.label} variants={rise}>
              <p className="font-heading text-3xl leading-none font-semibold text-white md:text-4xl">
                <NumberTicker value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="mt-0.5 text-sm text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <div aria-hidden="true" className="from-body-bg absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t to-transparent md:h-24" />
  </section>
)

export default Hero
