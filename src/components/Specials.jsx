import { useState } from 'react'
import ScoopIllustration from './ScoopIllustration'
import Icon from './Icon'
import { perks, weeklyDeal } from '../data/siteData'
import './Specials.css'

const DEAL_SCOOPS = [
  { base: '#f9b8c7', shade: '#f08aa4', topping: 'berries' },
  { base: '#bff0dd', shade: '#8fdcc0', topping: 'chips' },
  { base: '#fff1d2', shade: '#f5dca5', topping: 'sprinkles' },
]

function Specials() {
  const [dealRevealed, setDealRevealed] = useState(false)

  return (
    <section id="specials" className="section specials" aria-labelledby="specials-title">
      <div className="container">
        <div className="deal">
          <div className="deal__content">
            <p className="deal__eyebrow">
              <Icon name="tag" size={18} />
              {weeklyDeal.eyebrow}
            </p>
            <h2 id="specials-title" className="deal__title">
              {weeklyDeal.title}
            </h2>
            <p className="deal__description">{weeklyDeal.description}</p>

            {dealRevealed ? (
              <div className="deal__coupon" role="status">
                <span className="deal__coupon-label">Show this code at the counter</span>
                <span className="deal__coupon-code">{weeklyDeal.code}</span>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn--light btn--lg"
                onClick={() => setDealRevealed(true)}
              >
                Get This Deal
              </button>
            )}
            <p className="deal__fine-print">{weeklyDeal.finePrint}</p>
          </div>

          <div className="deal__visual" aria-hidden="true">
            {DEAL_SCOOPS.map((scoop, index) => (
              <div key={scoop.base} className={`deal__cone deal__cone--${index + 1}`}>
                {index === 2 && <span className="deal__free">FREE</span>}
                <ScoopIllustration scoops={[scoop]} />
              </div>
            ))}
          </div>
        </div>

        <ul className="perks">
          {perks.map((perk) => (
            <li key={perk.title} className={`perk perk--${perk.accent}`}>
              <h3 className="perk__title">{perk.title}</h3>
              <p className="perk__description">{perk.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Specials
