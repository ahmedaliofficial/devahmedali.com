'use client'

import Image from 'next/image'
import { useState } from 'react'

const screens = [
  { label: 'Projects', image: '/images/work/trackhrs-board.webp', alt: 'TrackHRS project board with backlog, to do, in progress and review columns', description: 'A shared place to plan the work, see what is moving, and keep the team in sync.' },
  { label: 'Work overview', image: '/images/work/trackhrs-work.webp', alt: 'TrackHRS work overview showing active projects and tasks in a demo workspace', description: 'The team’s priorities, progress and overdue work, brought together in one view.' },
  { label: 'Sales pipeline', image: '/images/work/trackhrs-deals.webp', alt: 'TrackHRS sales pipeline with opportunities organised by deal stage', description: 'Follow opportunities from the first conversation through to a closed deal.' },
  { label: 'Invoices', image: '/images/work/trackhrs-invoices.webp', alt: 'TrackHRS invoicing workspace showing invoice statuses and client billing', description: 'Keep client billing, invoice status and outstanding balances connected to the work.' },
  { label: 'Team workload', image: '/images/work/trackhrs-workload.webp', alt: 'TrackHRS workload view showing team capacity across the week', description: 'See who has room for more work and where the team needs support.' },
  { label: 'People', image: '/images/work/trackhrs-people.webp', alt: 'TrackHRS people directory with employee roles, teams and departments', description: 'People, roles and departments in the same workspace as the projects they deliver.' },
  { label: 'Integrations', image: '/images/work/trackhrs-integrations.webp', alt: 'TrackHRS integrations catalogue with team communication and automation tools', description: 'Connect the tools your team already uses for communication and automation.' },
]

export default function ProductGallery() {
  const [selected, setSelected] = useState(0)
  const screen = screens[selected]
  return (
    <section className="screenshot-gallery" aria-labelledby="gallery-heading">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Explore the platform</p>
          <h2 id="gallery-heading">
            The whole team.
            <br />
            One connected workspace.
          </h2>
        </div>
        <p>
          From the first client conversation
          <br className="hidden md:block" /> to the work that gets delivered.
        </p>
      </div>
      <div className="gallery-tabs" role="group" aria-label="Choose a TrackHRS product screen">
        {screens.map((item, index) => (
          <button key={item.label} type="button" aria-pressed={index === selected} aria-controls="product-screenshot" onClick={() => setSelected(index)}>
            {item.label}
          </button>
        ))}
      </div>
      <figure id="product-screenshot" aria-live="polite">
        <div className="browser-chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <div>TrackHRS / {screen.label}</div>
        </div>
        <Image src={screen.image} alt={screen.alt} width={1440} height={900} sizes="(max-width: 767px) 100vw, 1200px" className="gallery-image" />
        <figcaption>
          <p className="text-default-700 mt-5 text-base">{screen.description}</p>
          <p className="case-caption">{screen.label} · Product documentation screenshot with demo data.</p>
        </figcaption>
      </figure>
    </section>
  )
}
