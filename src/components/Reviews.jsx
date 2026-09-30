import SectionHeading from './SectionHeading'
import StarRating from './StarRating'
import { reviews } from '../data/siteData'
import './Reviews.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function Reviews() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeading
          id="reviews-title"
          eyebrow="Customer Love"
          title="What Our Neighbors Say"
        />
        <div className="reviews__grid">
          {reviews.map((review) => (
            <figure key={review.name} className="review-card">
              <StarRating rating={review.rating} />
              <blockquote className="review-card__quote">
                <p>“{review.quote}”</p>
              </blockquote>
              <figcaption className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                  {getInitials(review.name)}
                </span>
                <span>
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__detail">{review.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
