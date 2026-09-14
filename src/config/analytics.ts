/**
 * Google Analytics 4 wiring.
 *
 * The measurement ID for this property is the default below, so analytics works from a
 * plain checkout with no env setup. NEXT_PUBLIC_GA_MEASUREMENT_ID overrides it, which is
 * what a fork or a staging deployment should set; setting it to an empty string turns
 * analytics off entirely and the privacy policy then correctly says the site runs none.
 *
 * Like the AdSense id, it is read at BUILD time because the pages that use it are
 * prerendered. The shape is validated so a typo'd override fails loudly here rather than
 * shipping a tag that silently reports to nothing.
 */
const raw = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-0X052TCNFT').trim().toUpperCase()

const enabled = /^G-[A-Z0-9]{6,}$/.test(raw)
const measurementId = enabled ? raw : ''

export const analytics = {
  enabled,
  measurementId,
  scriptSrc: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
} as const
