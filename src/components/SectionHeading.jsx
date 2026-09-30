function SectionHeading({ eyebrow, title, description, align = 'center', id }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}

export default SectionHeading
