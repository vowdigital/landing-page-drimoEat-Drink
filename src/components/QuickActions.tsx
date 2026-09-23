import { CalendarDays, MapPin, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { buildWhatsappLink, links, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'

const actions = [
  { label: 'Ver cardápio', note: 'Conheça nossos sabores', href: links.menu, icon: UtensilsCrossed, cta: 'quick-menu', event: 'ClickMenu' as const },
  { label: 'Pedir delivery', note: 'Drimo onde você estiver', href: links.delivery, icon: ShoppingBag, cta: 'quick-delivery', event: 'ClickDelivery' as const },
  { label: 'Fazer reserva', note: 'Garanta a sua mesa', href: buildWhatsappLink(whatsappMessages.reservation), icon: CalendarDays, cta: 'quick-reservation', event: 'ClickReservation' as const },
  { label: 'Como chegar', note: 'Estamos em Dourados/MS', href: '#localizacao', icon: MapPin, cta: 'quick-location', event: 'ClickLocation' as const },
]

export function QuickActions() {
  return (
    <section id="acoes" className="quick-actions" aria-label="Ações rápidas">
      <div className="shell quick-actions__grid">
        {actions.map(({ label, note, href, icon: Icon, cta, event }, index) => (
          <ButtonLink key={label} href={href} cta={cta} event={event} payload={{ location: 'quick_actions' }} variant="ghost" className="quick-action">
            <span className="quick-action__number">0{index + 1}</span>
            <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
            <span><strong>{label}</strong><small>{note}</small></span>
          </ButtonLink>
        ))}
      </div>
    </section>
  )
}
