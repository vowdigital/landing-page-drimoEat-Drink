import { useEffect } from 'react'
import { faqItems } from '../config/faq'
import { drimoAssets } from '../config/assets'
import { restaurant } from '../config/restaurant'

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, '')

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }
  meta.content = content
}

function upsertSchema(id: string, schema: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(schema)
}

export function SEO() {
  useEffect(() => {
    const siteUrl = restaurant.canonical?.replace(/\/+$/, '') || configuredSiteUrl
    const canonicalUrl = siteUrl ? `${siteUrl}/` : undefined

    if (canonicalUrl) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = canonicalUrl
      upsertMeta('property', 'og:url', canonicalUrl)
    }

    if (drimoAssets.favicon) {
      let icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
      if (!icon) {
        icon = document.createElement('link')
        icon.rel = 'icon'
        document.head.appendChild(icon)
      }
      icon.href = drimoAssets.favicon
    }

    if (drimoAssets.hero) {
      const ogImage = new URL(drimoAssets.hero, window.location.href).toString()
      upsertMeta('property', 'og:image', ogImage)
      upsertMeta('name', 'twitter:image', ogImage)
    }

    upsertMeta('name', 'twitter:title', 'Drimo Eat & Drink | Restaurante em Dourados/MS')
    upsertMeta('name', 'twitter:description', 'Gastronomia contemporânea, drinks, pratos para compartilhar, happy hour e delivery em Dourados/MS.')

    const restaurantSchema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      ...(canonicalUrl ? { '@id': `${canonicalUrl}#restaurant`, url: canonicalUrl } : {}),
      name: restaurant.name,
      telephone: restaurant.phone,
      sameAs: [restaurant.instagram].filter(Boolean),
      areaServed: restaurant.city,
      servesCuisine: 'Gastronomia contemporânea',
      menu: restaurant.menu,
      ...(restaurant.maps ? { hasMap: restaurant.maps } : {}),
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

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    }

    upsertSchema('drimo-restaurant-schema', restaurantSchema)
    upsertSchema('drimo-faq-schema', faqSchema)
  }, [])

  return null
}
