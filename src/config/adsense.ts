/**
 * Google AdSense wiring.
 *
 * Everything keys off one env var so the site stays truthful in both states:
 * with the id set, every page carries the AdSense script, /ads.txt is served and the
 * privacy policy and footer show the advertising disclosures. Without it, none of that
 * renders and the policy correctly says there is no advertising.
 *
 * NEXT_PUBLIC_ADSENSE_CLIENT is your publisher id, from AdSense → Account → Settings →
 * Account information. Google shows it in two forms depending on where you copy it from:
 * "ca-pub-1234567890123456" in the ad code and "pub-1234567890123456" in the ads.txt
 * snippet. Either is accepted here and normalised below, because getting the wrong one
 * would otherwise leave the site silently running with no ads.
 *
 * It must be present at BUILD time, because the pages that read it are prerendered.
 */
const raw = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '').trim().toLowerCase()

/** "pub-1234567890123456", the form ads.txt wants */
const publisherId = raw.replace(/^ca-/, '')
const enabled = /^pub-\d{10,20}$/.test(publisherId)

/** "ca-pub-1234567890123456", the form the ad script wants */
const client = enabled ? `ca-${publisherId}` : ''

export const adsense = {
  enabled,
  client,
  publisherId,
  scriptSrc: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`,
} as const
