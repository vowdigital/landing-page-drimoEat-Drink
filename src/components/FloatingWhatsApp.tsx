import { buildWhatsappLink, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'
import { WhatsAppIcon } from './WhatsAppIcon'

export function FloatingWhatsApp() {
  return <ButtonLink href={buildWhatsappLink(whatsappMessages.information)} cta="floating-whatsapp" event="ClickWhatsApp" payload={{ location: 'floating' }} variant="light" className="floating-whatsapp" ariaLabel="Fale com a Drimo pelo WhatsApp"><WhatsAppIcon size={25} /><span>Fale com a Drimo</span></ButtonLink>
}
