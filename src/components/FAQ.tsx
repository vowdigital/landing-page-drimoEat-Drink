import { Plus } from 'lucide-react'
import { faqItems } from '../config/faq'
import { SectionHeading } from './SectionHeading'

export function FAQ() {
  return (
    <section className="section faq">
      <div className="shell faq__grid">
        <div data-reveal><SectionHeading eyebrow="Perguntas frequentes" title="Tudo para aproveitar a sua experiência." /></div>
        <div className="faq__list" data-reveal>
          {faqItems.map((item) => <details key={item.question}><summary><span>{item.question}</span><Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  )
}
