import { drimoAssets } from '../config/assets'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

export function ChefSection() {
  if (!drimoAssets.chefDiego) return null

  return (
    <section className="section chef">
      <div className="shell chef__grid">
        <div className="chef__content" data-reveal>
          <SectionHeading eyebrow="Da nossa cozinha para a sua mesa" title="Quem está por trás dos sabores da Drimo." />
          <p>Chef Diego participa ativamente da construção gastronômica atual da Drimo — da criação dos pratos ao cuidado em cada finalização.</p>
          <p>Sua presença aproxima a cozinha de quem chega à mesa e traduz uma proposta feita de sabor, personalidade e acolhimento.</p>
        </div>
        <PhotoFrame
          src={drimoAssets.chefDiego}
          alt="Chef Diego em pé com o uniforme oficial da Drimo"
          label="Chef Diego na cozinha"
          className="chef__photo"
          imageClassName="chef__portrait"
          width={3024}
          height={4032}
        />
      </div>
    </section>
  )
}
