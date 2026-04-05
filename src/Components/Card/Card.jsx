import './Card.css'

function Card({ flower }) {
  return (
    <div className="card">
      <img src={flower.image} alt={flower.name} className="card-image" />
      <h3 className="card-title">{flower.name}</h3>
      {flower.description && <p className="card-description">{flower.description}</p>}
    </div>
  )
}

export default Card
