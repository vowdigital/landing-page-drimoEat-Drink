import { useEffect, type RefObject } from 'react'
import { trackEvent, type AnalyticsEventName, type AnalyticsPayload } from '../lib/analytics'

const viewedSections = new Set<string>()

export function useSectionView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  key: string,
  event: AnalyticsEventName,
  payload: AnalyticsPayload,
) {
  useEffect(() => {
    const element = ref.current
    if (!element || viewedSections.has(key)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          viewedSections.add(key)
          trackEvent(event, payload)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [event, key, payload, ref])
}
