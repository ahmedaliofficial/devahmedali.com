import { site } from '@/content/site'
import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

type RenderOgImageOptions = {
  eyebrow: string
  title: string
  description: string
}

/** Shared social previews use the same restrained palette and mark as the website. */
export const renderOgImage = ({ eyebrow, title, description }: RenderOgImageOptions) =>
  new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#f8f9fc',
        padding: '62px 72px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '17px',
            background: '#17202e',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '8px',
            paddingRight: '3px',
            fontSize: '46px',
            fontWeight: 700,
            letterSpacing: '-4px',
          }}
        >
          a<span style={{ color: '#aabcff' }}>.</span>
        </div>
        <div style={{ display: 'flex', color: '#17202e', fontSize: '28px', fontWeight: 700, letterSpacing: '-1px' }}>
          ahmed ali<span style={{ color: '#3159ee' }}>.</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: '#3159ee', fontSize: '18px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>{eyebrow}</div>
        <div style={{ color: '#17202e', fontSize: title.length > 46 ? '52px' : '68px', fontWeight: 600, lineHeight: 1.12, letterSpacing: '-2px' }}>{title}</div>
        <div style={{ color: '#657084', fontSize: '25px', lineHeight: 1.45, marginTop: '20px', maxWidth: '960px' }}>{description}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #dfe4ed', paddingTop: '24px' }}>
        <div style={{ color: '#657084', fontSize: '20px' }}>{site.url.replace('https://', '')}</div>
        <div style={{ width: '44px', height: '5px', borderRadius: '3px', background: '#3159ee' }} />
      </div>
    </div>,
    ogSize
  )
