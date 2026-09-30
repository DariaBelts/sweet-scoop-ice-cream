import { business } from '../data/siteData'

function Logo({ variant = 'default' }) {
  return (
    <a href="#home" className={`logo logo--${variant}`} aria-label={`${business.fullName} home`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64">
          <path d="M20 34h24L32 62z" fill="#e9b872" />
          <path d="M24 38l12 12M28 36l10 10M36 36l-10 14M40 38L30 52" stroke="#c98d45" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="24" r="16" fill="#f7a1b8" />
          <g fill="#f28ba5">
            <circle cx="18" cy="34" r="5" />
            <circle cx="26" cy="35" r="5" />
            <circle cx="34" cy="35" r="5" />
            <circle cx="42" cy="35" r="5" />
            <circle cx="46" cy="33" r="4" />
          </g>
          <circle cx="32" cy="8" r="5" fill="#e03e5c" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__name">{business.name}</span>
        <span className="logo__sub">Ice Cream</span>
      </span>
    </a>
  )
}

export default Logo
