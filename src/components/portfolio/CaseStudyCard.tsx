import Arrow from '@/components/ui/Arrow'
import type { CaseStudy } from '@/content/case-studies'
import { projectPresentation } from '@/content/portfolio'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectVisual({ slug, preload = false }: { slug: string; preload?: boolean }) {
  const presentation = projectPresentation[slug]
  if (slug === 'hysab-kytab')
    return (
      <div className="official-product-visual">
        <div className="official-product-label" aria-hidden="true">
          <span>hysab kytab</span>
          <p>
            A clearer picture
            <br />
            of your money.
          </p>
        </div>
        <Image src={presentation.image} alt={presentation.alt} width={1200} height={1489} sizes="(max-width: 767px) 80vw, 55vw" preload={preload} />
      </div>
    )
  if (!presentation?.image) {
    return (
      <div className="vision-visual" aria-label="Illustrative OmniVision workflow: capture, detect and alert">
        <div className="vision-header">
          <span className="vision-logo">◎</span> OmniVision <span className="vision-status">Safety intelligence</span>
        </div>
        <div className="vision-frame">
          <div className="vision-crosshair" />
          <span className="vision-scan-label">Computer vision</span>
          <span className="vision-caption">
            A clearer view.
            <br />A faster response.
          </span>
        </div>
        <div className="vision-flow">
          <span>Capture</span>
          <Arrow />
          <span>Detect</span>
          <Arrow />
          <span>Alert</span>
        </div>
      </div>
    )
  }
  return <Image src={presentation.image} alt={presentation.alt} width={1536} height={1024} sizes="(max-width: 767px) 100vw, 70vw" preload={preload} className="project-image" />
}

export default function CaseStudyCard({ study, size = 'default', className = '', preload = false }: { study: CaseStudy; size?: 'default' | 'large'; className?: string; preload?: boolean }) {
  const p = projectPresentation[study.slug]
  return (
    <article className={'project-card ' + (size === 'large' ? 'project-featured ' : '') + className}>
      <Link href={'/work/' + study.slug} className="project-visual-link" aria-label={'View ' + study.hero.title + ' case study'} style={{ background: p?.color }}>
        <ProjectVisual slug={study.slug} preload={preload} />
        <span className="project-open">
          <Arrow diagonal />
        </span>
      </Link>
      <p className="image-note">{study.slug === 'hysab-kytab' ? 'Official product artwork' : study.slug === 'trackhrs' || study.slug === 'agentx' ? 'Product mockup · Demo data' : 'Illustrative workflow'}</p>
      <div className="project-info">
        <div>
          <p className="eyebrow">{p?.category ?? study.hero.eyebrow}</p>
          <h3>
            <Link href={'/work/' + study.slug}>
              {study.hero.title} <Arrow diagonal />
            </Link>
          </h3>
          <p>{p?.description ?? study.hero.subtitle}</p>
        </div>
        {size === 'large' && (
          <Link href={'/work/' + study.slug} className="text-link">
            Explore the project <Arrow />
          </Link>
        )}
      </div>
    </article>
  )
}
