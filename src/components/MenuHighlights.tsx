import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { links } from '../config/links'
import { useSectionView } from '../hooks/useSectionView'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

const categories = [
  { title: 'Gastronomia contemporânea', description: 'Pratos que combinam técnica, conforto e sabores próximos.', image: drimoAssets.menu.contemporary, label: 'Prato contemporâneo' },
  { title: 'Pratos para compartilhar', description: 'Porções generosas para reunir todo mundo ao redor da mesa.', image: drimoAssets.menu.sharing, label: 'Prato para compartilhar' },
  { title: 'Parmegianas', description: 'Clássicos da casa em diferentes versões e acompanhamentos.', image: drimoAssets.menu.parmegiana, label: 'Parmegiana Drimo' },
  { title: 'Grelhados & assados', description: 'Cortes e preparos para uma pausa saborosa ou um encontro descontraído.', image: drimoAssets.menu.burgers, label: 'Grelhados e assados Drimo' },
  { title: 'Petiscos', description: 'Escolhas que combinam com conversa, chopp e bons encontros.', image: drimoAssets.menu.snacks, label: 'Petiscos Drimo' },
  { title: 'Drinks & bebidas', description: 'Clássicos, combinações da casa e brindes para todos os momentos.', image: drimoAssets.menu.drinks, label: 'Drinks da casa' },
]

export function MenuHighlights() {
  const sectionRef = useRef<HTMLElement>(null)
  useSectionView(sectionRef, 'menu-section', 'ViewMenuSection', { location: 'menu_highlights' })

  return (
    <section ref={sectionRef} id="cardapio" className="section menu-highlights" aria-labelledby="menu-title">
      <div className="shell">
        <div data-reveal><SectionHeading id="menu-title" eyebrow="Nosso cardápio" title="Tem Drimo para cada momento." text="Do jantar a dois ao encontro entre amigos, encontre o prato certo para aproveitar a experiência." /></div>
        <div className="menu-grid">
          {categories.map((category, index) => (
            <article className={`menu-card menu-card--${index + 1}`} key={category.title} data-reveal>
              <PhotoFrame src={category.image} alt={category.label} label={category.label} className="menu-card__photo" />
              <div className="menu-card__overlay" />
              <div className="menu-card__content">
                <span>0{index + 1}</span><h3>{category.title}</h3><p>{category.description}</p>
                <ButtonLink href={links.menu} cta={`menu-${index + 1}`} event="ClickMenu" payload={{ location: 'menu_category', category: category.title }} variant="ghost">Ver no cardápio <ArrowUpRight aria-hidden="true" size={16} /></ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
