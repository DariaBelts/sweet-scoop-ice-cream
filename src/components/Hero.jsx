import ScoopIllustration from './ScoopIllustration'
import Icon from './Icon'
import { business } from '../data/siteData'
import './Hero.css'

const HERO_SCOOPS = [
  { base: '#8f5d3f', shade: '#6d4129', topping: 'shavings' },
  { base: '#fbeecb', shade: '#efd79c', topping: 'specks' },
  { base: '#f9b8c7', shade: '#f08aa4', topping: 'sprinkles' },
]

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__blob hero__blob--pink" />
        <span className="hero__blob hero__blob--mint" />
        <span className="hero__blob hero__blob--vanilla" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Small-batch ice cream in {business.city.split(',')[0]}
          </p>
          <h1 id="hero-title" className="hero__title">
            Happiness in <span className="hero__highlight">Every Scoop</span>
          </h1>
          <p className="hero__description">
            Handcrafted ice cream made fresh with premium ingredients and a whole lot of love.
          </p>
          <div className="hero__actions">
            <a href="#flavors" className="btn btn--primary btn--lg">
              Explore Flavors
              <Icon name="arrow" size={20} />
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              Visit Us
            </a>
          </div>
          <ul className="hero__highlights">
            <li>
              <Icon name="check" size={18} /> Churned fresh every morning
            </li>
            <li>
              <Icon name="check" size={18} /> Dairy-free options daily
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__plate" aria-hidden="true" />
          <ScoopIllustration
            className="hero__cone"
            scoops={HERO_SCOOPS}
            cherry
            title="Triple scoop waffle cone with chocolate, vanilla and strawberry ice cream"
          />
          <div className="hero__float hero__float--rating">
            <span className="hero__float-value">4.9 ★</span>
            <span className="hero__float-label">2,300+ reviews</span>
          </div>
          <div className="hero__float hero__float--fresh">
            <span className="hero__float-emoji" aria-hidden="true">🍓</span>
            <span className="hero__float-label">Made fresh today</span>
          </div>
          <span className="hero__sprinkle hero__sprinkle--1" aria-hidden="true" />
          <span className="hero__sprinkle hero__sprinkle--2" aria-hidden="true" />
          <span className="hero__sprinkle hero__sprinkle--3" aria-hidden="true" />
          <span className="hero__sprinkle hero__sprinkle--4" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default Hero
