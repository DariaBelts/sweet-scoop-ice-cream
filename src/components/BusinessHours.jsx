import { hours } from '../data/siteData'

const TODAY = new Date().getDay()

function BusinessHours({ variant = 'default', highlightToday = false }) {
  return (
    <dl className={`hours hours--${variant}`}>
      {hours.map((entry) => {
        const isToday = highlightToday && entry.days.includes(TODAY)
        return (
          <div key={entry.label} className={`hours__row${isToday ? ' is-today' : ''}`}>
            <dt className="hours__day">
              {entry.label}
              {isToday && <span className="hours__today">Today</span>}
            </dt>
            <dd className="hours__time">{entry.time}</dd>
          </div>
        )
      })}
    </dl>
  )
}

export default BusinessHours
