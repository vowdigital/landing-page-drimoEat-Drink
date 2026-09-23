import { useRef, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

const galleryItems = [
  { category: 'Pratos', src: drimoAssets.gallery.dishes, alt: 'Prato preparado na cozinha Drimo' },
  { category: 'Drinks', src: drimoAssets.gallery.drinks, alt: 'Drink servido na Drimo' },
  { category: 'Ambiente', src: drimoAssets.gallery.environment, alt: 'Ambiente da Drimo Eat & Drink' },
  { category: 'Chef', src: drimoAssets.gallery.chef, alt: 'Chef em ação na cozinha' },
  { category: 'Experiência', src: drimoAssets.gallery.experience, alt: 'Momento à mesa na Drimo' },
  { category: 'Bastidores', src: drimoAssets.gallery.behindScenes, alt: 'Chef Diego nos bastidores da Drimo' },
]

export function Gallery() {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const open = (item: (typeof galleryItems)[number]) => {
    if (!item.src) return
    setActive(item)
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)
  }

  return (
    <section className="section gallery" aria-labelledby="gallery-title">
      <div className="shell">
        <div data-reveal><SectionHeading id="gallery-title" eyebrow="Olhares da Drimo" title="Sabores, detalhes e momentos." text="Um pouco da experiência que acontece por aqui." /></div>
        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <button className={`gallery__item gallery__item--${index + 1}`} type="button" key={item.category} disabled={!item.src} onClick={() => open(item)} aria-label={item.src ? `Ampliar: ${item.alt}` : undefined} data-reveal>
              <PhotoFrame src={item.src} alt={item.alt} label={item.category} className="gallery__photo" />
              <span className="gallery__label">{item.category}</span>
              {item.src && <Expand className="gallery__expand" aria-hidden="true" size={18} />}
            </button>
          ))}
        </div>
      </div>
      {active?.src && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onMouseDown={() => setActive(null)} onKeyDown={(event) => event.key === 'Escape' && setActive(null)}>
          <button ref={closeButtonRef} type="button" onClick={() => setActive(null)} aria-label="Fechar imagem"><X /></button>
          <img src={active.src} alt={active.alt} onMouseDown={(event) => event.stopPropagation()} />
          <span>{active.category}</span>
        </div>
      )}
    </section>
  )
}
