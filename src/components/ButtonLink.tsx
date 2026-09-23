import type { ReactNode } from 'react'
import { trackEvent, type AnalyticsEventName, type AnalyticsPayload } from '../lib/analytics'
import { appendTrackingParams } from '../lib/utm'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  cta: string
  event: AnalyticsEventName
  payload?: AnalyticsPayload
  ariaLabel?: string
}

export function ButtonLink({ href, children, className = '', variant = 'primary', cta, event, payload = {}, ariaLabel }: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      href={isExternal ? appendTrackingParams(href) : href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`button button--${variant} ${className}`}
      data-cta={cta}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, payload)}
    >
      {children}
    </a>
  )
}
