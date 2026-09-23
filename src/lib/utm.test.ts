import { describe, expect, it } from 'vitest'
import { appendTrackingParams } from './utm'

describe('appendTrackingParams', () => {
  it('copies supported parameters without duplicating destination values', () => {
    const result = appendTrackingParams(
      'https://example.com/menu?utm_source=existing&foo=bar',
      '?utm_source=meta&utm_campaign=summer&fbclid=abc&ignored=no',
    )
    const url = new URL(result)

    expect(url.searchParams.get('utm_source')).toBe('existing')
    expect(url.searchParams.get('utm_campaign')).toBe('summer')
    expect(url.searchParams.get('fbclid')).toBe('abc')
    expect(url.searchParams.get('ignored')).toBeNull()
    expect(url.searchParams.get('foo')).toBe('bar')
  })

  it('returns empty values unchanged', () => {
    expect(appendTrackingParams('', '?utm_source=meta')).toBe('')
  })
})
