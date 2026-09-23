import { ArrowUpRight, Clock3, MousePointerClick, ShoppingBag } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { buildWhatsappLink, links, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'

const benefits = [
  { icon: MousePointerClick, label: 'Cardápio online' },
  { icon: Clock3, label: 'Pedido prático' },
  { icon: ShoppingBag, label: 'Drimo em casa' },
]

export function Delivery() {
  return (
    <section id="delivery" className="section delivery">
      <div className="shell delivery__grid">
        <div className="delivery__visual" data-reveal>
          <PhotoFrame src={drimoAssets.delivery} alt="Prato da Drimo disponível para delivery" label="Prato para delivery" className="delivery__photo" />
          <span className="delivery__stamp">Do nosso<br /><strong>menu</strong><br />para você</span>
        </div>
        <div className="delivery__content" data-reveal>
          <p className="eyebrow">Delivery Drimo</p><h2>A Drimo também vai até você.</h2>
          <p>Escolha seus favoritos e aproveite a experiência Drimo onde estiver.</p>
          <div className="delivery__benefits">
            {benefits.map(({ icon: Icon, label }) => <span key={label}><Icon aria-hidden="true" size={20} />{label}</span>)}
          </div>
          <div className="button-row">
            <ButtonLink href={links.delivery} cta="delivery-order" event="ClickDelivery" payload={{ location: 'delivery' }}>Pedir delivery <ArrowUpRight aria-hidden="true" size={17} /></ButtonLink>
            <ButtonLink href={buildWhatsappLink(whatsappMessages.information)} cta="delivery-whatsapp" event="ClickWhatsApp" payload={{ location: 'delivery' }} variant="secondary">Falar pelo WhatsApp</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
