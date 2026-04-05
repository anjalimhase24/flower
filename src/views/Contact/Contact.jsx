import "./Contact.css"
import Card from "../../Components/Card/Card"

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <p className="contact-label">Contact Us</p>
        <h1>Visit Our Flower Studio</h1>
        <p className="contact-text">
          Drop by to explore fresh flowers, custom bouquets, and gifting ideas.
        </p>

        <div className="contact-grid">
          <Card
            className="card-form"
            title="Send Us a Message"
            description="We will get back to you with bouquet ideas, pricing, and delivery help."
          >
            <form className="contact-form">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your email" />
              <input type="tel" name="phone" placeholder="Phone number" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what kind of flowers or occasion you have in mind"
              />
              <button type="submit">Send Message</button>
            </form>
          </Card>

          <Card
            className="card-map"
            title="Our Location"
            description="Pune, Maharashtra"
          >
            <div className="map-frame">
              <iframe
                title="Flower studio location map"
                src="https://www.google.com/maps?q=Pune%2C%20Maharashtra&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
