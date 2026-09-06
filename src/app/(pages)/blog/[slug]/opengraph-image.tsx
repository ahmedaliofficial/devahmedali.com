import { getAllPosts, getPost } from '@/lib/blog'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType

export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }))

type Props = {
  params: Promise<{ slug: string }>
}

const Image = async ({ params }: Props) => {
  const { slug } = await params
  const post = getPost(slug)

  return renderOgImage({
    eyebrow: 'Blog',
    title: post?.title ?? 'Blog post',
    description: post?.description ?? '',
  })
}

export default Image
