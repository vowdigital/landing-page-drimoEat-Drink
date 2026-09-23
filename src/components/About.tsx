import { useEffect, useState } from 'react'
import { drimoAssets } from '../config/assets'
import { PhotoFrame } from './PhotoFrame'
import { SectionHeading } from './SectionHeading'

export function About() {
  const slides = drimoAssets.aboutCarousel
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || isPaused || slides.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4800)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="shell about__grid">
        <div className="about__image-wrap" data-reveal>
          <div
            className="about__carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-label="Fotos do ambiente da Drimo"
          >
            {slides.map((src, index) => (
              <PhotoFrame
                key={src}
                src={src}
                alt={`Ambiente da Drimo, foto ${index + 1}`}
                label="Ambiente da Drimo"
                className={`about__photo about__carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
                priority={index === 0}
              />
            ))}
            <div className="about__carousel-controls" aria-label="Selecionar foto do ambiente">
              {slides.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={`about__carousel-dot ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar foto ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>
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
