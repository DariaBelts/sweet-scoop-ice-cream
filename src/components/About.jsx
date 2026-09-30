import ScoopIllustration from './ScoopIllustration'
import { business, stats } from '../data/siteData'
import './About.css'

const ABOUT_SCOOPS = [
  { base: '#bff0dd', shade: '#8fdcc0', topping: 'chips' },
  { base: '#ebbd82', shade: '#d69a52', topping: 'drizzle' },
]

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__frame">
            <ScoopIllustration className="about__cone" scoops={ABOUT_SCOOPS} />
          </div>
          <div className="about__stamp">
            <span className="about__stamp-small">Since</span>
            <span className="about__stamp-year">{business.foundedYear}</span>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">About Sweet Scoop</p>
          <h2 id="about-title" className="about__title">
            Our Story
          </h2>
          <p>
            Sweet Scoop started in {business.foundedYear} with one secondhand ice cream machine, a
            handful of family recipes, and a tiny storefront on Sprinkle Street. We wanted to build
            the kind of neighborhood shop we grew up loving: a place where everyone knows your
            favorite flavor and the waffle cones are still warm.
          </p>
          <p>
            Ten years later, we still make every flavor in small batches, right behind the counter.
            We use real cream, fresh fruit, and ingredients from local Chicago farms and bakeries,
            and we never cut corners. From first dates to Little League victories, we are proud to be
            part of our neighbors’ sweetest moments.
          </p>

          <dl className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <dt className="about__stat-label">{stat.label}</dt>
                <dd className="about__stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
