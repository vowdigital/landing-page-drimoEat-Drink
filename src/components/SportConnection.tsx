import { ArrowUpRight } from 'lucide-react'
import { buildWhatsappLink, whatsappMessages } from '../config/links'
import { ButtonLink } from './ButtonLink'

export function SportConnection() {
  return (
    <section className="sport-connection">
      <div className="shell sport-connection__inner" data-reveal>
        <p className="sport-connection__number">01</p>
        <div><p className="eyebrow">Nossa origem</p><h2>Entre o esporte<br />e a boa mesa.</h2></div>
        <div className="sport-connection__text">
          <p>Integrada ao universo Drimo, a Eat &amp; Drink recebe quem quer completar o dia com uma boa refeição, um drink ou um encontro sem pressa.</p>
          <ButtonLink href={buildWhatsappLink(whatsappMessages.information)} cta="sport-whatsapp" event="ClickWhatsApp" payload={{ location: 'sport_connection' }} variant="primary">Conhecer a Drimo <ArrowUpRight size={16} /></ButtonLink>
        </div>
      </div>
    </section>
  )
}
