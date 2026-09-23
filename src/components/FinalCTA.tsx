import { ArrowUpRight } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { buildWhatsappLink, links, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__background" aria-hidden="true">
        <PhotoFrame
          src={drimoAssets.finalCta}
          alt="Drinks preparados no bar da Drimo Eat & Drink"
          label="Fotografia de drinks"
          className="final-cta__photo"
          width={4032}
          height={3024}
        />
      </div>
      <div className="shell final-cta__content" data-reveal>
        <p className="eyebrow">Seu próximo momento</p>
        <h2>Já escolheu seu próximo momento na Drimo?</h2>
        <p>Reserve sua mesa, confira nosso cardápio ou peça seus favoritos pelo delivery.</p>
        <div className="button-row">
          <ButtonLink href={links.menu} cta="final-menu" event="ClickMenu" payload={{ location: 'final_cta' }}>Ver cardápio <ArrowUpRight size={17} /></ButtonLink>
          <ButtonLink href={buildWhatsappLink(whatsappMessages.reservation)} cta="final-reservation" event="ClickReservation" payload={{ location: 'final_cta' }} variant="light">Fazer reserva</ButtonLink>
          <ButtonLink href={links.delivery} cta="final-delivery" event="ClickDelivery" payload={{ location: 'final_cta' }} variant="ghost">Pedir delivery</ButtonLink>
        </div>
      </div>
    </section>
  )
}
