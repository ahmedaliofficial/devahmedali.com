import { site } from '@/content/site'
import { ImageResponse } from 'next/og'

export const alt = `${site.name} — ${site.roleFull}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const Image = () =>
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
              width: '64px',
              height: '64px',
              borderRadius: '999px',
              background: '#ffffff',
              color: '#18181b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#ffffff', fontSize: '28px', fontWeight: 600 }}>{site.name}</div>
            <div style={{ color: '#a1a1aa', fontSize: '20px' }}>{site.location}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#ffffff', fontSize: '76px', fontWeight: 600, lineHeight: 1.1 }}>{site.tagline}</div>
          <div style={{ color: '#ffffff', fontSize: '30px', marginTop: '24px' }}>{site.roleFull}</div>
          <div style={{ color: '#a1a1aa', fontSize: '24px', marginTop: '10px' }}>{site.specialisms}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '120px', height: '6px', borderRadius: '999px', background: '#0022ff' }} />
          <div style={{ color: '#71717a', fontSize: '22px' }}>{site.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    size,
  )

export default Image
