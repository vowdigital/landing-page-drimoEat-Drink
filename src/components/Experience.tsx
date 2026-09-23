import { drimoAssets } from '../config/assets'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="shell">
        <div className="experience__intro" data-reveal>
          <SectionHeading eyebrow="Espaço & experiência" title="Um lugar feito para bons encontros." text="Para um jantar a dois, encontro entre amigos, família ou happy hour, a Drimo combina boa comida com um ambiente confortável e acolhedor." align="center" />
        </div>
        <div className="experience__composition" data-reveal>
          <PhotoFrame src={drimoAssets.experience} alt="Salão acolhedor da Drimo Eat & Drink" label="Salão e atmosfera" className="experience__main-photo" />
          <div className="experience__quote"><span>“</span><p>A mesa é o lugar onde o sabor encontra a conversa.</p></div>
          <div className="experience__aside"><strong>Drimo</strong><span>Dourados · MS</span></div>
        </div>
      </div>
    </section>
  )
}
