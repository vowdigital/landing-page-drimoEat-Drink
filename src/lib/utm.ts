export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const

export function appendTrackingParams(url: string, sourceSearch?: string): string {
  if (!url) return url

  try {
    const destination = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://drimo.local')
    const source = new URLSearchParams(
      sourceSearch ?? (typeof window !== 'undefined' ? window.location.search : ''),
    )

    for (const key of TRACKING_PARAMS) {
      const value = source.get(key)
      if (value && !destination.searchParams.has(key)) {
        destination.searchParams.set(key, value)
      }
    }

    return destination.toString()
  } catch {
    return url
  }
}
