import { adsense } from '@/config/adsense'

// Authorised Digital Sellers declaration. Google looks for this at the domain root
// and lists a missing file as an "earnings at risk" warning in AdSense.
// f08c47fec0942fa0 is Google's own certification authority id, the same for every publisher.
export const GET = () => {
  if (!adsense.enabled) {
    return new Response('Not found', { status: 404 })
  }

  return new Response(`google.com, ${adsense.publisherId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
