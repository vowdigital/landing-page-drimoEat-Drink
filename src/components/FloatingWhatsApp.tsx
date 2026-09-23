import { MessageCircle } from 'lucide-react'
import { buildWhatsappLink, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'

export function FloatingWhatsApp() {
  return <ButtonLink href={buildWhatsappLink(whatsappMessages.information)} cta="floating-whatsapp" event="ClickWhatsApp" payload={{ location: 'floating' }} variant="light" className="floating-whatsapp" ariaLabel="Fale com a Drimo pelo WhatsApp"><MessageCircle aria-hidden="true" size={24} /><span>Fale com a Drimo</span></ButtonLink>
}
