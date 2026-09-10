/**
 * Google AdSense wiring.
 *
 * Everything keys off one env var so the site stays truthful in both states:
 * with the id set, every page carries the AdSense script, /ads.txt is served and the
 * privacy policy and footer show the advertising disclosures. Without it, none of that
 * renders and the policy correctly says there is no advertising.
 *
 * NEXT_PUBLIC_ADSENSE_CLIENT is the "ca-pub-XXXXXXXXXXXXXXXX" publisher id from
 * AdSense → Account → Settings → Account information. It must be present at build
 * time, because the pages that read it are prerendered.
 */
const client = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '').trim()

export const adsense = {
  enabled: /^ca-pub-\d+$/.test(client),
  client,
  /** ads.txt wants the id without the "ca-" prefix, e.g. "pub-1234567890123456" */
  publisherId: client.replace(/^ca-/, ''),
  scriptSrc: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`,
} as const
