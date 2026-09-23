import { drimoAssets } from '../config/assets'

interface BrandMarkProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function BrandMark({ variant = 'dark', className = '' }: BrandMarkProps) {
  const logo = variant === 'light' ? drimoAssets.logoLight : drimoAssets.logoDark
  if (logo) return <img className={className} src={logo} width="150" height="48" alt="Drimo Eat & Drink" />

  return (
    <span className={`brand-wordmark ${className}`} aria-label="Drimo Eat & Drink">
      <strong>DRIMO</strong><span>EAT &amp; DRINK</span>
    </span>
  )
}
