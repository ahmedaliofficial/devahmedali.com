'use client'

import Arrow from '@/components/ui/Arrow'
import { site } from '@/content/site'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import HeroAutomationDemo from './HeroAutomationDemo'

const directions = [
  {
    id: 'web',
    label: 'A website',
    service: 'websites',
    number: '01',
    description: 'A thoughtful website that makes your business clear and gives people a reason to get in touch.',
    project: 'TrackHRS',
    category: 'A connected web product',
    image: '/images/work/trackhrs-board.webp',
    alt: 'TrackHRS project board from real documentation with demo project data',
    width: 1440,
    height: 900,
    note: 'TrackHRS documentation screenshot. Demo workspace shown.',
    href: '/work/trackhrs',
    tags: ['Clear experiences', 'Solid engineering'],
  },
  {
    id: 'mobile',
    label: 'A mobile app',
    service: 'mobile-apps',
    number: '02',
    description: 'An app that feels natural to use, with the thoughtful details and solid foundation your product deserves.',
    project: 'TrackHRS Mobile',
    category: 'Your workspace, wherever you are',
    image: '/images/work/trackhrs-mobile-mockup.webp',
    alt: 'Illustrative TrackHRS mobile mockup with Home and Projects on two phones',
    width: 1536,
    height: 1024,
    note: 'Source-based mobile mockup. Demo data; app in development.',
    href: '/work/trackhrs',
    tags: ['Built for real life', 'Connected to your product'],
  },
  {
    id: 'ai',
    label: 'An AI product',
    service: 'ai-agents',
    number: '03',
    description: 'AI that works with your knowledge and tools, helping your customers and team get useful things done.',
    project: 'AgentX',
    category: 'From a prompt to a working product',
    image: '/images/work/agentx-workflow-mockup.webp',
    alt: 'AgentX product mockup with editable code and a mobile application preview',
    width: 1536,
    height: 1024,
    note: 'AgentX mockup based on product documentation. Demo content.',
    href: '/work/agentx',
    tags: ['Practical intelligence', 'Human control'],
  },
  {
    id: 'automation',
    label: 'Less busywork',
    service: 'workflow-automation',
    number: '04',
    description: 'Connect your tools, simplify the handoffs, and give your team more time for the work that matters.',
    project: 'A smoother workflow',
    category: 'Try a small example',
    image: '',
    alt: '',
    width: 0,
    height: 0,
    note: 'Illustrative workflow with sample data. Nothing is sent or saved.',
    href: '/work/trackhrs',
    tags: ['Connected tools', 'Fewer manual steps'],
  },
] as const

function DirectionIcon({ type }: { type: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {type === 'web' && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        </>
      )}
      {type === 'mobile' && (
        <>
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <path d="M10 5h4M11 19h2" />
        </>
      )}
      {type === 'ai' && (
        <>
          <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
          <path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5L20 2Z" />
        </>
      )}
      {type === 'automation' && (
        <>
          <rect x="3" y="3" width="6" height="6" rx="2" />
          <rect x="15" y="15" width="6" height="6" rx="2" />
          <path d="M9 6h7a2 2 0 0 1 2 2v7M15 12l3 3 3-3M6 9v9h5" />
        </>
      )}
    </svg>
  )
}

function revealPreview(preview: HTMLDivElement | null, reducedMotion: boolean | null) {
  if (!preview) return
  preview.focus({ preventScroll: true })
  preview.scrollIntoView({ block: 'start', behavior: reducedMotion ? 'instant' : 'smooth' })
}

export default function InteractiveHero() {
  const [selectedId, setSelectedId] = useState<(typeof directions)[number]['id']>('web')
  const selected = directions.find((direction) => direction.id === selectedId) || directions[0]
  const reducedMotion = useReducedMotion()
  const previewRef = useRef<HTMLDivElement>(null)
  const revealAfterSelection = useRef(false)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 22 })
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 22 })
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5])
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4])
  const labelX = useTransform(smoothX, [-0.5, 0.5], [-10, 10])
  const labelY = useTransform(smoothY, [-0.5, 0.5], [-7, 7])

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }
  useEffect(() => {
    if (!revealAfterSelection.current) return
    revealAfterSelection.current = false
    revealPreview(previewRef.current, reducedMotion)
  }, [selectedId, reducedMotion])

  const selectDirection = (id: (typeof directions)[number]['id']) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (id === selectedId) revealPreview(previewRef.current, reducedMotion)
      else revealAfterSelection.current = true
    }
    setSelectedId(id)
    resetPointer()
  }
  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <section className="playground-hero container" aria-labelledby="intro-heading">
      <div className="playground-layout">
        <div className="playground-copy">
          <p className="playground-eyebrow">
            <span aria-hidden="true" /> Independent developer. Your product partner.
          </p>
          <h1 id="intro-heading">
            Let’s build
            <br />
            <em className="editorial-accent">what’s next.</em>
          </h1>
          <p className="playground-intro">
            Websites, apps, and AI. Thoughtfully designed.
            <br className="playground-desktop-break" /> Built around your business.
          </p>
          <div id="hero-choices" className="playground-picker" role="group" aria-label="What would you like to build?" tabIndex={-1}>
            <p>What do you have in mind?</p>
            <div className="playground-options">
              {directions.map((direction) => (
                <button key={direction.id} type="button" aria-pressed={direction.id === selectedId} aria-controls="hero-preview" onClick={() => selectDirection(direction.id)}>
                  <DirectionIcon type={direction.id} />
                  <span>{direction.label}</span>
                  <span className="playground-option-dot" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
          <div className="playground-actions">
            <Link href={'/contact?service=' + selected.service} className="button-primary">
              Let’s make it happen <Arrow diagonal />
            </Link>
            <a href="#selected-work" className="text-link">
              Explore my work <Arrow />
            </a>
          </div>
          <div className="playground-proof">
            <span>
              <strong>{site.experience.label}</strong> years of building
            </span>
            <span>
              <i aria-hidden="true" /> Available for select projects
            </span>
          </div>
        </div>

        <div ref={previewRef} id="hero-preview" className="playground-preview" role="region" aria-labelledby="preview-heading" tabIndex={-1} data-direction={selected.id}>
          <p className="sr-only" role="status">
            Selected {selected.label}. {selected.description}
          </p>
          <div className="playground-canvas" onPointerMove={movePointer} onPointerLeave={resetPointer} onPointerCancel={resetPointer}>
            <div className="playground-canvas-top">
              <span>THE POSSIBILITIES</span>
              <span>
                {selected.number} <span>/ 04</span>
              </span>
            </div>
            <motion.div className="playground-float-tag" aria-hidden="true" style={{ x: reducedMotion ? 0 : labelX, y: reducedMotion ? 0 : labelY }}>
              <span /> {selected.tags[0]}
            </motion.div>
            <div className="playground-window-perspective">
              <motion.div className="playground-window" style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY }}>
                <div className="playground-window-bar">
                  <div aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>{selected.project}</span>
                  <DirectionIcon type={selected.id} />
                </div>
                <div className="playground-window-body">
                  {selected.id === 'automation' ? (
                    <HeroAutomationDemo />
                  ) : (
                    <Image key={selected.id} src={selected.image} alt={selected.alt} width={selected.width} height={selected.height} sizes="(max-width: 767px) 90vw, (max-width: 1000px) 80vw, 45vw" preload={selected.id === 'web'} />
                  )}
                </div>
              </motion.div>
            </div>
            <div className="playground-canvas-bottom">
              <span>
                <span aria-hidden="true">↳</span> {selected.tags[1]}
              </span>
              <span className="playground-pointer-hint">Move your cursor to explore</span>
            </div>
          </div>
          <div className="playground-preview-caption">
            <div>
              <h2 id="preview-heading">{selected.category}</h2>
              <p>{selected.description}</p>
            </div>
            <Link href={selected.href} className="playground-project-link" aria-label={'Explore ' + (selected.id === 'automation' ? 'TrackHRS workflows' : selected.project)}>
              <Arrow diagonal />
            </Link>
          </div>
          <p className="playground-image-note">{selected.note}</p>
          <a href="#hero-choices" className="playground-back-link">
            Choose another direction
          </a>
        </div>
      </div>
    </section>
  )
}
