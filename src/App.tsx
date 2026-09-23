import { useEffect } from 'react'
import { About } from './components/About'
import { ChefSection } from './components/ChefSection'
import { Delivery } from './components/Delivery'
import { Experience } from './components/Experience'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { MenuHighlights } from './components/MenuHighlights'
import { MobileCTA } from './components/MobileCTA'
import { QuickActions } from './components/QuickActions'
import { SEO } from './components/SEO'
import { ShareSection } from './components/ShareSection'
import { SportConnection } from './components/SportConnection'
import { WeeklyActions } from './components/WeeklyActions'
import { trackEvent } from './lib/analytics'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  useEffect(() => { trackEvent('PageView', { location: 'landing_page' }) }, [])

  return <>
    <SEO /><Header /><main>
      <Hero /><QuickActions /><About /><MenuHighlights /><ShareSection /><WeeklyActions />
      <Delivery /><ChefSection /><Experience /><Gallery /><SportConnection /><Location /><FAQ /><FinalCTA />
    </main><Footer /><FloatingWhatsApp /><MobileCTA />
  </>
}
