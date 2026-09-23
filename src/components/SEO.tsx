import { useEffect } from 'react'
import { restaurant } from '../config/restaurant'
import { drimoAssets } from '../config/assets'

export function SEO() {
  useEffect(() => {
    if (restaurant.canonical) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
      canonical.href = restaurant.canonical
    }
    if (drimoAssets.favicon) {
      let icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
      if (!icon) { icon = document.createElement('link'); icon.rel = 'icon'; document.head.appendChild(icon) }
      icon.href = drimoAssets.favicon
    }
    if (drimoAssets.hero) {
      let ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
      if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property', 'og:image'); document.head.appendChild(ogImage) }
      ogImage.content = new URL(drimoAssets.hero, window.location.href).toString()
    }

    const schema = {
      '@context': 'https://schema.org', '@type': 'Restaurant', name: restaurant.name,
      telephone: restaurant.phone, sameAs: [restaurant.instagram], areaServed: restaurant.city,
      ...(restaurant.address ? {
        address: {
          '@type': 'PostalAddress',
          streetAddress: restaurant.address,
          addressLocality: 'Dourados',
          addressRegion: 'MS',
          postalCode: '79800-000',
          addressCountry: 'BR',
        },
      } : {}),
      ...(restaurant.hours.length ? { openingHours: restaurant.hours } : {}),
    }
    const existing = document.getElementById('drimo-restaurant-schema')
    if (existing) existing.textContent = JSON.stringify(schema)
    else { const script = document.createElement('script'); script.id = 'drimo-restaurant-schema'; script.type = 'application/ld+json'; script.textContent = JSON.stringify(schema); document.head.appendChild(script) }
  }, [])
  return null
}
