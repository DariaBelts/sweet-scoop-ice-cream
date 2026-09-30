import ScoopIllustration from './ScoopIllustration'

const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

function FlavorCard({ flavor }) {
  const { name, description, price, tint, badge, scoop } = flavor

  return (
    <article className="flavor-card" style={{ '--card-tint': tint, '--card-accent': scoop.shade }}>
      <div className="flavor-card__media">
        {badge && <span className="flavor-card__badge">{badge}</span>}
        <ScoopIllustration
          className="flavor-card__illustration"
          scoops={[scoop]}
          cherry={scoop.cherry}
          title={`${name} ice cream cone`}
        />
      </div>
      <div className="flavor-card__body">
        <h3 className="flavor-card__name">{name}</h3>
        <p className="flavor-card__description">{description}</p>
        <div className="flavor-card__footer">
          <span className="flavor-card__price">{priceFormatter.format(price)}</span>
          <span className="flavor-card__meta">Cup or cone</span>
        </div>
      </div>
    </article>
  )
}

export default FlavorCard
