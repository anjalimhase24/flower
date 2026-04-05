import './Card.css'

function Card({ flower, title, description, image, alt, children, className = '' }) {
  const cardTitle = title ?? flower?.name
  const cardDescription = description ?? flower?.description
  const cardImage = image ?? flower?.image
  const imageAlt = alt ?? cardTitle ?? 'Card image'

  return (
    <div className={`card ${className}`.trim()}>
      {cardImage && <img src={cardImage} alt={imageAlt} className="card-image" />}
      {cardTitle && <h3 className="card-title">{cardTitle}</h3>}
      {cardDescription && <p className="card-description">{cardDescription}</p>}
      {children}
    </div>
  )
}

export default Card
