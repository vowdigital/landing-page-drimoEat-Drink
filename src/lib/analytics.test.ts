import { describe, expect, it, vi } from 'vitest'
import { trackEvent } from './analytics'

describe('trackEvent', () => {
  it('does not require an analytics provider and emits a browser event', () => {
    const listener = vi.fn()
    window.addEventListener('drimo:analytics', listener)

    trackEvent('ClickMenu', { location: 'hero' })

    expect(listener).toHaveBeenCalledOnce()
    expect(listener.mock.calls[0][0]).toMatchObject({ detail: { name: 'ClickMenu', payload: { location: 'hero' } } })
    window.removeEventListener('drimo:analytics', listener)
  })

  it('pushes to an existing data layer', () => {
    window.dataLayer = []
    trackEvent('PageView', { location: 'landing_page' })
    expect(window.dataLayer).toEqual([{ event: 'PageView', location: 'landing_page' }])
    window.dataLayer = undefined
  })
})
