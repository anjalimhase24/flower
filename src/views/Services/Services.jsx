import "./Services.css"
import Card from "../../Components/Card/Card"
import serviceImage1 from "../../assets/flower-1-img.jpeg"
import serviceImage2 from "../../assets/flower-2-img.jpeg"
import serviceImage3 from "../../assets/flower-3-img.jpeg"

const servicesData = [
  {
    id: 1,
    title: "Custom Bouquets",
    image: serviceImage1,
    description: "Handcrafted flower arrangements for birthdays, anniversaries, and special surprises."
  },
  {
    id: 2,
    title: "Event Decoration",
    image: serviceImage2,
    description: "Elegant floral styling for weddings, receptions, and intimate celebrations."
  },
  {
    id: 3,
    title: "Same Day Delivery",
    image: serviceImage3,
    description: "Fresh flowers delivered quickly across the city for last-minute gifting needs."
  }
]

function Services() {
  return (
    <div className="services">
      <p className="services-label">Our Services</p>
      <h1>What We Offer</h1>
      <p className="services-text">
        From thoughtful bouquets to event-ready floral styling, we help every moment feel special.
      </p>

      <div className="services-grid">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
