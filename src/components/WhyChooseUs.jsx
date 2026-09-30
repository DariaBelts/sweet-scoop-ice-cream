import SectionHeading from './SectionHeading'
import Icon from './Icon'
import { features } from '../data/siteData'
import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className="section why" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          id="why-title"
          eyebrow="Why Choose Us"
          title="The Scoop on Sweet Scoop"
          description="A few reasons our neighbors keep coming back, one cone at a time."
        />
        <ul className="why__grid">
          {features.map((feature) => (
            <li key={feature.title} className={`feature-card feature-card--${feature.accent}`}>
              <span className="feature-card__icon">
                <Icon name={feature.icon} size={28} />
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyChooseUs
