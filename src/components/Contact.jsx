import SectionHeading from './SectionHeading'
import BusinessHours from './BusinessHours'
import Icon from './Icon'
import { business } from '../data/siteData'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Visit Us"
          title="Come Say Hello"
          description="Stop by for a scoop, grab a pint to go, or reach out about parties and catering."
        />

        <div className="contact__grid">
          <div className="contact-card">
            <address className="contact-card__address">
              <h3 className="contact-card__name">{business.fullName}</h3>
              <ul className="contact-card__list">
                <li>
                  <span className="contact-card__icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <span>
                    {business.street}
                    <br />
                    {business.city}
                  </span>
                </li>
                <li>
                  <span className="contact-card__icon">
                    <Icon name="phone" size={20} />
                  </span>
                  <a href={business.phoneHref}>{business.phone}</a>
                </li>
                <li>
                  <span className="contact-card__icon">
                    <Icon name="mail" size={20} />
                  </span>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              </ul>
            </address>

            <div className="contact-card__hours">
              <h3 className="contact-card__subtitle">
                <Icon name="clock" size={20} />
                Hours
              </h3>
              <BusinessHours highlightToday />
            </div>

            <div className="contact-card__actions">
              <a href={`mailto:${business.email}`} className="btn btn--primary">
                <Icon name="mail" size={18} />
                Contact Us
              </a>
              <a href={business.phoneHref} className="btn btn--outline">
                <Icon name="phone" size={18} />
                Call the Shop
              </a>
            </div>
          </div>

          <div className="map-card">
            <div className="map-card__canvas" aria-hidden="true">
              <span className="map-card__street map-card__street--h1" />
              <span className="map-card__street map-card__street--h2" />
              <span className="map-card__street map-card__street--v1" />
              <span className="map-card__street map-card__street--v2" />
              <span className="map-card__park" />
              <span className="map-card__water" />
              <span className="map-card__label map-card__label--street">Sprinkle St</span>
              <span className="map-card__label map-card__label--park">Waffle Park</span>
              <span className="map-card__pin">
                <Icon name="pin" size={30} />
              </span>
            </div>
            <div className="map-card__footer">
              <div>
                <p className="map-card__title">Find us on Sprinkle Street</p>
                <p className="map-card__text">
                  Street parking available · Two blocks from the Blue Line
                </p>
              </div>
              <a
                href={business.directionsUrl}
                className="btn btn--outline btn--sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
