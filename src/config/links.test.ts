import { describe, expect, it } from 'vitest'
import { buildWhatsappLink, links, whatsappMessages } from './links'

describe('Drimo links', () => {
  it('builds an encoded reservation WhatsApp link', () => {
    const url = new URL(buildWhatsappLink(whatsappMessages.reservation))
    expect(url.hostname).toBe('api.whatsapp.com')
    expect(url.searchParams.get('phone')).toBe('5567996182583')
    expect(url.searchParams.get('text')).toContain('fazer uma reserva')
  })

  it('keeps the commercial destinations centralized', () => {
    expect(links.menu).toContain('goomer.app/menu')
    expect(links.delivery).toBe(links.menu)
    expect(links.instagram).toContain('instagram.com/drimodourados')
  })
})
