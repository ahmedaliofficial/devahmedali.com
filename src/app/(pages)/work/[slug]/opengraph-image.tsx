import { caseStudies, getCaseStudy } from '@/content/case-studies'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType

export const generateStaticParams = async () => caseStudies.map((study) => ({ slug: study.slug }))

type Props = {
  params: Promise<{ slug: string }>
}

const Image = async ({ params }: Props) => {
  const { slug } = await params
  const study = getCaseStudy(slug)

  return renderOgImage({
    eyebrow: study?.hero.eyebrow ?? 'Case study',
    title: study?.hero.title ?? 'Case study',
    description: study?.hero.subtitle ?? '',
  })
}

export default Image
