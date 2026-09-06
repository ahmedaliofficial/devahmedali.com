import { site } from '@/content/site'
import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

type RenderOgImageOptions = {
  eyebrow: string
  title: string
  description: string
}

/** Shared social-preview renderer for per-route OG images (case studies, blog posts). */
export const renderOgImage = ({ eyebrow, title, description }: RenderOgImageOptions) =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#18181b',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '999px',
              background: '#ffffff',
              color: '#18181b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600 }}>{site.name}</div>
            <div style={{ color: '#a1a1aa', fontSize: '18px' }}>{eyebrow}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#ffffff', fontSize: title.length > 46 ? '52px' : '64px', fontWeight: 600, lineHeight: 1.15 }}>{title}</div>
          <div style={{ color: '#a1a1aa', fontSize: '26px', marginTop: '20px', maxWidth: '920px' }}>{description}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '120px', height: '6px', borderRadius: '999px', background: '#0022ff' }} />
          <div style={{ color: '#71717a', fontSize: '22px' }}>{site.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    ogSize,
  )
