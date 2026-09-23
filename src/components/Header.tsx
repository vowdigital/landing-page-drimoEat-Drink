import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { ButtonLink } from './ButtonLink'
import { links } from '../config/links'

const navigation = [
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Localização', href: '#localizacao' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.body.classList.add('menu-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}>
      <div className="shell site-header__inner">
        <a href="#inicio" className="site-header__brand" aria-label="Drimo Eat & Drink — início"><BrandMark variant={scrolled || open ? 'dark' : 'light'} /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="site-header__actions">
          <ButtonLink href={links.menu} cta="header-menu" event="ClickMenu" payload={{ location: 'header' }} className="header-menu-cta">Ver cardápio</ButtonLink>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegação mobile">
        <div className="shell">
          {navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
        </div>
      </nav>
    </header>
  )
}
