import { Instagram } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { restaurant } from '../config/restaurant'
import { buildWhatsappLink, links, whatsappMessages } from '../config/links'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__main">
          <div><BrandMark variant="light" /><p>Boa mesa, bons encontros<br />e experiências para compartilhar.</p></div>
          <nav aria-label="Links do rodapé"><a href="#cardapio">Cardápio</a><a href="#programacao">Programação</a><a href="#delivery">Delivery</a><a href="#localizacao">Localização</a></nav>
          <div className="site-footer__contact"><a href={links.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> Instagram</a><a href={buildWhatsappLink(whatsappMessages.information)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a></div>
        </div>
        <div className="site-footer__bottom"><span>{restaurant.phone}</span><span>{restaurant.city}</span><span>© {new Date().getFullYear()} Drimo Eat &amp; Drink</span></div>
      </div>
    </footer>
  )
}
