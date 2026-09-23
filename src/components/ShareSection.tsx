import { ArrowUpRight } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { links } from '../config/links'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'

export function ShareSection() {
  return (
    <section className="section sharing">
      <div className="shell sharing__grid">
        <div className="sharing__content" data-reveal>
          <p className="eyebrow">Feito para dividir</p>
          <h2>Porque alguns momentos ficam melhores quando são compartilhados.</h2>
          <p>Pratos preparados para dividir a mesa, prolongar a conversa e transformar uma refeição em experiência.</p>
          <ButtonLink href={links.menu} cta="sharing-menu" event="ClickMenu" payload={{ location: 'sharing' }}>Ver opções para compartilhar <ArrowUpRight aria-hidden="true" size={17} /></ButtonLink>
        </div>
        <div className="sharing__visual" data-reveal>
          <PhotoFrame src={drimoAssets.sharing} alt="Prato generoso da Drimo para compartilhar" label="Prato para compartilhar" className="sharing__photo" />
          <div className="sharing__note"><strong>Mesa cheia.</strong><span>Conversa sem pressa.</span></div>
        </div>
      </div>
    </section>
  )
}
