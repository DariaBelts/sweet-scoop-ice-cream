function StarRating({ rating, max = 5 }) {
  return (
    <div className="star-rating" role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className={index < rating ? 'star-rating__star is-filled' : 'star-rating__star'}
          aria-hidden="true"
        >
          <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
        </svg>
      ))}
    </div>
  )
}

export default StarRating
