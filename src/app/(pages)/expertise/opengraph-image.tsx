import { site } from '@/content/site'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType
export const alt = `${site.name}, expertise role by role`

const Image = () =>
  renderOgImage({
    eyebrow: 'Expertise',
    title: 'What I do, role by role',
    description: `Software architect and engineer in ${site.location.label}, working remotely with teams in the US, UK and Europe.`,
  })

export default Image
