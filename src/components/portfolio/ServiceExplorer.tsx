'use client'

import Arrow from '@/components/ui/Arrow'
import { clientServices, getClientService } from '@/content/client-services'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function revealHeading(heading: HTMLHeadingElement | null) {
  if (!heading) return
  heading.focus({ preventScroll: true })
  heading.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}

export default function ServiceExplorer({ initialId }: { initialId?: string }) {
  const [selectedId, setSelectedId] = useState(initialId || clientServices[0].slug)
  const selected = getClientService(selectedId) || clientServices[0]
  const headingRef = useRef<HTMLHeadingElement>(null)
  const revealAfterSelection = useRef(false)

  useEffect(() => {
    if (!revealAfterSelection.current) return
    revealAfterSelection.current = false
    revealHeading(headingRef.current)
  }, [selectedId])

  const selectService = (slug: string) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (slug === selectedId) revealHeading(headingRef.current)
      else revealAfterSelection.current = true
    }
    setSelectedId(slug)
  }

  return (
    <div className="service-explorer">
      <div className="service-picker" role="group" aria-label="Choose a service">
        {clientServices.map((service) => (
          <button key={service.slug} type="button" aria-pressed={selected.slug === service.slug} aria-controls="service-detail" onClick={() => selectService(service.slug)} className="service-choice">
            <span className="service-choice-number" aria-hidden="true">
              {service.number}
            </span>
            <span>{service.shortTitle}</span>
            <Arrow diagonal />
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {selected.title}.
      </p>
      <section id="service-detail" className="service-detail" aria-labelledby="service-detail-heading">
        <div className="service-detail-topline">
          <span className="service-kicker">What we can build</span>
          <span className="service-detail-number" aria-hidden="true">
            {selected.number} / {String(clientServices.length).padStart(2, '0')}
          </span>
        </div>
        <h2 ref={headingRef} id="service-detail-heading" tabIndex={-1}>
          {selected.outcome}
        </h2>
        <p className="service-detail-summary">{selected.summary}</p>
        <h3 className="service-kicker">A typical scope</h3>
        <ul className="service-deliverables">
          {selected.deliverables.map((deliverable) => (
            <li key={deliverable}>
              <span aria-hidden="true">↗</span>
              {deliverable}
            </li>
          ))}
        </ul>
        <p className="service-for">
          <span>A good fit for</span>
          {selected.forWho}
        </p>
        <div className="service-detail-actions">
          <Link href={`/contact?service=${selected.slug}`} className="button-primary">
            Let’s talk about it <Arrow diagonal />
          </Link>
          {selected.relatedWork && (
            <Link href={selected.relatedWork.href} className="text-link">
              {selected.relatedWork.label} <Arrow diagonal />
            </Link>
          )}
        </div>
        {selected.relatedWork?.note && <p className="service-project-note">{selected.relatedWork.note}</p>}
      </section>
    </div>
  )
}
