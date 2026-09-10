'use client'

import { adsense } from '@/config/adsense'

type PrivacySettingsButtonProps = {
  className?: string
}

// Re-opens Google's consent message so EEA/UK/Swiss visitors can change or withdraw
// their choice, which GDPR requires to be as easy as giving it. Google's CMP exposes
// this as googlefc.showRevocationMessage(); if the CMP has not finished loading yet the
// call is queued until it has. Outside regulated regions the CMP shows nothing, which
// is the intended behaviour.
const PrivacySettingsButton = ({ className }: PrivacySettingsButtonProps) => {
  if (!adsense.enabled) return null

  const openConsentMessage = () => {
    const fc = (window.googlefc ??= {})
    if (typeof fc.showRevocationMessage === 'function') {
      fc.showRevocationMessage()
      return
    }
    ;(fc.callbackQueue ??= []).push({ CONSENT_DATA_READY: () => window.googlefc?.showRevocationMessage?.() })
  }

  return (
    <button type="button" onClick={openConsentMessage} className={className}>
      Privacy settings
    </button>
  )
}

export default PrivacySettingsButton
