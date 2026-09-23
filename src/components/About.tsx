import { drimoAssets } from '../config/assets'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="shell about__grid">
        <div className="about__image-wrap" data-reveal>
          <PhotoFrame src={drimoAssets.about} alt="Ambiente e cozinha da Drimo Eat & Drink" label="Ambiente ou cozinha" className="about__photo" />
          <span className="about__caption">Gastronomia · encontros · experiências</span>
        </div>
        <div className="about__content" data-reveal>
          <SectionHeading id="about-title" eyebrow="Nossa história" title="Uma experiência que vai muito além da mesa." />
          <div className="about__text">
            <p>A Drimo Eat &amp; Drink nasceu dentro de um universo de esporte, encontros e experiências. O que começou como uma proposta gastronômica mais simples evoluiu para um restaurante completo, com cozinha própria e personalidade.</p>
            <p>Um lugar acolhedor para o jantar a dois, a mesa em família, o encontro entre amigos ou aquele happy hour que pede mais uma conversa.</p>
          </div>
          <div className="about__details" aria-label="Destaques da Drimo">
            <span>Cozinha contemporânea</span><span>Ambiente confortável</span><span>Sabores para compartilhar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
