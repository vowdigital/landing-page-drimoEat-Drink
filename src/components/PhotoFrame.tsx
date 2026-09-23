import { ImageIcon } from 'lucide-react'

interface PhotoFrameProps {
  src?: string
  alt: string
  label: string
  className?: string
  imageClassName?: string
  priority?: boolean
  width?: number
  height?: number
}

export function PhotoFrame({ src, alt, label, className = '', imageClassName = '', priority = false, width = 1200, height = 900 }: PhotoFrameProps) {
  return (
    <div className={`photo-frame ${src ? 'has-photo' : 'is-placeholder'} ${className}`}>
      {src ? (
        <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" className={imageClassName} />
      ) : (
        <div className="photo-placeholder" aria-label={`${label}: fotografia oficial pendente`} role="img">
          <span className="photo-placeholder__line" />
          <ImageIcon aria-hidden="true" size={22} strokeWidth={1.4} />
          <span>{label}</span><small>fotografia oficial</small>
        </div>
      )}
    </div>
  )
}
