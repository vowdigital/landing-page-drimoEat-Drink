import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { buildWhatsappLink, whatsappMessages } from '../config/links'
import { appendTrackingParams } from '../lib/utm'
import { ButtonLink } from './ButtonLink'
import { SectionHeading } from './SectionHeading'

export function Location() {
  return (
    <section id="localizacao" className="section location">
      <div className="shell location__grid">
        <div data-reveal>
          <SectionHeading eyebrow="Dourados/MS" title="Venha viver a experiência Drimo." text="Uma boa mesa espera por você. Fale com a gente para reservar ou saber mais." />
          <div className="location__contacts">
            <a href={`tel:+5567996182583`}><Phone aria-hidden="true" /> <span><small>Telefone</small>{restaurant.phone}</span></a>
            <a href={appendTrackingParams(restaurant.instagram)} target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" /> <span><small>Instagram</small>@drimodourados</span></a>
            <div><MapPin aria-hidden="true" /> <span><small>Onde estamos</small>{restaurant.city}</span></div>
          </div>
          <div className="button-row">
            {restaurant.maps && <ButtonLink href={restaurant.maps} cta="location-maps" event="ClickLocation" payload={{ location: 'location' }}>Ver localização</ButtonLink>}
            <ButtonLink href={buildWhatsappLink(whatsappMessages.reservation)} cta="location-reservation" event="ClickReservation" payload={{ location: 'location' }}>Fazer reserva</ButtonLink>
            <ButtonLink href={buildWhatsappLink(whatsappMessages.information)} cta="location-whatsapp" event="ClickWhatsApp" payload={{ location: 'location' }} variant="secondary"><MessageCircle size={17} /> Falar no WhatsApp</ButtonLink>
          </div>
        </div>
        <div className="location__map-placeholder" data-reveal>
          <span>DRIMO</span><MapPin aria-hidden="true" size={36} strokeWidth={1.2} /><strong>Dourados · Mato Grosso do Sul</strong><small>Mapa disponível após confirmação da localização oficial</small>
        </div>
      </div>
    </section>
  )
}
