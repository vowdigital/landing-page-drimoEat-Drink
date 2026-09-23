import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, X } from 'lucide-react'
import { visibleWeeklyActions, type WeeklyAction } from '../config/weeklyActions'
import { trackEvent } from '../lib/analytics'
import { ButtonLink } from './ButtonLink'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

export function WeeklyActions() {
  const [selected, setSelected] = useState<WeeklyAction | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => scrollRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  const openDetails = (action: WeeklyAction) => {
    setSelected(action)
    trackEvent('ViewWeeklyAction', { action: action.id })
  }

  return (
    <section id="programacao" className="section weekly" aria-labelledby="weekly-title">
      <div className="shell">
        <div className="weekly__header" data-reveal>
          <SectionHeading id="weekly-title" eyebrow="Programação semanal" title="Cada dia tem um motivo diferente para vir à Drimo." text="Confira nossa programação e escolha seu dia." light />
          <div className="weekly__arrows" aria-label="Navegar pela programação">
            <button type="button" onClick={() => scroll(-1)} aria-label="Ações anteriores"><ArrowLeft /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Próximas ações"><ArrowRight /></button>
          </div>
        </div>
        <div className="weekly__rail" ref={scrollRef}>
          {visibleWeeklyActions.map((action, index) => (
            <article className={`weekly-card ${action.comingSoon ? 'is-coming' : ''}`} key={action.id} data-reveal>
              <div className="weekly-card__visual">
                <PhotoFrame src={action.image} alt={action.title} label={action.title} className="weekly-card__photo" />
                <span className="weekly-card__index">0{index + 1}</span>
                {action.badge && <span className="weekly-card__badge">{action.badge}</span>}
              </div>
              <div className="weekly-card__body">
                <p className="weekly-card__day"><CalendarDays size={15} aria-hidden="true" /> {action.day}</p>
                <h3>{action.title}</h3><p>{action.shortDescription}</p>
                {action.price && <strong className="weekly-card__price">{action.price}</strong>}
                <div className="weekly-card__actions">
                  {(action.details || action.description) && <button type="button" onClick={() => openDetails(action)}>Ver detalhes</button>}
                  {action.ctaUrl && action.ctaLabel && !action.comingSoon && (
                    <ButtonLink href={action.ctaUrl} cta={`weekly-${action.id}`} event="ClickWeeklyAction" payload={{ location: 'weekly_actions', action: action.id }} variant="ghost">{action.ctaLabel} <ArrowUpRight size={15} /></ButtonLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div className="action-modal" role="dialog" aria-modal="true" aria-labelledby="action-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Fechar detalhes"><X /></button>
            <p className="eyebrow">{selected.day}</p><h3 id="action-modal-title">{selected.title}</h3><p>{selected.description}</p>
            {selected.details && <ul>{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
            {selected.ctaUrl && selected.ctaLabel && !selected.comingSoon && <ButtonLink href={selected.ctaUrl} cta={`weekly-modal-${selected.id}`} event="ClickWeeklyAction" payload={{ location: 'weekly_modal', action: selected.id }}>{selected.ctaLabel}</ButtonLink>}
          </div>
        </div>
      )}
    </section>
  )
}
