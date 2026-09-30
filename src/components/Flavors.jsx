import SectionHeading from './SectionHeading'
import FlavorCard from './FlavorCard'
import { flavors } from '../data/siteData'
import './Flavors.css'

function Flavors() {
  return (
    <section id="flavors" className="section flavors" aria-labelledby="flavors-title">
      <div className="container">
        <SectionHeading
          id="flavors-title"
          eyebrow="Our Flavors"
          title="Scooped Fresh, Loved Daily"
          description="From timeless classics to playful favorites, every flavor is made in small batches right here in our shop."
        />
        <div className="flavors__grid">
          {flavors.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>
        <p className="flavors__note">
          Waffle cone +$1.00 · Add hot fudge, caramel, or sprinkles for $0.75 · Dairy-free sorbets rotate weekly
        </p>
      </div>
    </section>
  )
}

export default Flavors
