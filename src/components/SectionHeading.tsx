interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
  light?: boolean
  id?: string
}

export function SectionHeading({ eyebrow, title, text, align = 'left', light = false, id }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </header>
  )
}
