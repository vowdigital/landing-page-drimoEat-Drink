import { CalendarDays, UtensilsCrossed } from 'lucide-react'
import { buildWhatsappLink, links, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'

export function MobileCTA() {
  return <div className="mobile-cta"><ButtonLink href={links.menu} cta="mobile-menu" event="ClickMenu" payload={{ location: 'mobile_fixed' }} variant="light"><UtensilsCrossed size={17} /> Cardápio</ButtonLink><ButtonLink href={buildWhatsappLink(whatsappMessages.reservation)} cta="mobile-reservation" event="ClickReservation" payload={{ location: 'mobile_fixed' }}><CalendarDays size={17} /> Reservar</ButtonLink></div>
}
