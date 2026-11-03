import { site } from '@/content/site'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const alt = `${site.name}, ${site.roleFull}`
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOgImage({
    eyebrow: site.roleFull,
    title: site.tagline,
    description: site.intro,
  })
}
