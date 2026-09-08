import { getAllExpertise, getExpertise } from '@/lib/expertise'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Ahmed Ali, expertise article'

export const generateStaticParams = async () => getAllExpertise().map((entry) => ({ slug: entry.slug }))

type Props = {
  params: Promise<{ slug: string }>
}

const Image = async ({ params }: Props) => {
  const { slug } = await params
  const entry = getExpertise(slug)

  // seoTitle rather than title: the renderer shrinks long headlines and the H1s run long
  return renderOgImage({
    eyebrow: entry?.eyebrow ?? 'Expertise',
    title: entry?.seoTitle ?? 'Expertise',
    description: entry?.description ?? '',
  })
}

export default Image
