export type AnalyticsEventName =
  | 'PageView'
  | 'ClickMenu'
  | 'ClickDelivery'
  | 'ClickWhatsApp'
  | 'ClickReservation'
  | 'ClickLocation'
  | 'ViewWeeklyAction'
  | 'ClickWeeklyAction'
  | 'ViewMenuSection'

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    fbq?: (command: 'trackCustom' | 'track', event: string, payload?: AnalyticsPayload) => void
  }
}

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  window.dataLayer?.push({ event: name, ...payload })
  window.fbq?.(name === 'PageView' ? 'track' : 'trackCustom', name, payload)
  window.dispatchEvent(new CustomEvent('drimo:analytics', { detail: { name, payload } }))
}
