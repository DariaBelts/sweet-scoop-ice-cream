import Logo from './Logo'
import Icon from './Icon'
import BusinessHours from './BusinessHours'
import { business, navLinks, socialLinks } from '../data/siteData'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo variant="footer" />
          <p className="site-footer__tagline">{business.tagline}</p>
          <p className="site-footer__text">
            {business.street}, {business.city}
          </p>
          <ul className="site-footer__social" aria-label="Social media">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="site-footer__social-link"
                  aria-label={`${business.fullName} on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={social.icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__hours">
          <h2 className="site-footer__heading">Hours</h2>
          <BusinessHours variant="footer" />
        </div>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">Say Hello</h2>
          <ul>
            <li>
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {CURRENT_YEAR} {business.fullName}. All rights reserved.
        </p>
        <p>Made with 🍦 in Chicago</p>
      </div>
    </footer>
  )
}

export default Footer
