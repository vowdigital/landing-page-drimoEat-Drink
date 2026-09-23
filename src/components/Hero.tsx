import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { drimoAssets } from '../config/assets'
import { links, buildWhatsappLink, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'

export function Hero() {
  return (
    <section id="inicio" className={`hero ${drimoAssets.hero ? 'hero--with-photo' : ''}`}>
      {drimoAssets.hero && <div className="hero__background" aria-hidden="true"><img src={drimoAssets.hero} alt="" width="1600" height="1200" loading="eager" fetchPriority="high" decoding="async" /></div>}
      <div className="shell hero__inner">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow hero__eyebrow">Drimo Eat &amp; Drink <span /> Dourados/MS</p>
          <h1>Boa comida,<br />bons encontros<br />e experiências<br /><em>para compartilhar.</em></h1>
          <p className="hero__lead">Gastronomia contemporânea, drinks, pratos para compartilhar e uma programação especial durante a semana.</p>
          <div className="hero__actions">
            <ButtonLink href={links.menu} cta="hero-menu" event="ClickMenu" payload={{ location: 'hero' }}>Ver cardápio <ArrowUpRight aria-hidden="true" size={17} /></ButtonLink>
            <ButtonLink href={buildWhatsappLink(whatsappMessages.reservation)} cta="hero-reservation" event="ClickReservation" payload={{ location: 'hero' }} variant="light">Fazer reserva</ButtonLink>
          </div>
          <p className="hero__microcopy">Uma mesa para cada momento.</p>
        </div>
        {!drimoAssets.hero && (
          <div className="hero__visual" data-reveal>
            <span className="hero__edition">Dourados · MS</span>
            <PhotoFrame src={drimoAssets.hero} alt="Experiência gastronômica da Drimo" label="Prato, mesa ou chef" priority className="hero__photo" width={1000} height={1250} />
            <span className="hero__seal">EAT <i>&amp;</i><br />DRINK</span>
          </div>
        )}
      </div>
      <a className="hero__scroll" href="#acoes" aria-label="Conheça a Drimo"><ArrowDown aria-hidden="true" size={17} /> Descubra</a>
    </section>
  )
}
