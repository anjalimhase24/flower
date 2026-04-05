import "./About.css"
import flowerImage from "../../assets/flower-2-img.jpeg"

const highlights = [
  {
    title: "Fresh Every Morning",
    description: "We hand-pick seasonal flowers daily so every bouquet feels lively, bright, and long-lasting."
  },
  {
    title: "Made With Care",
    description: "Each arrangement is styled with attention to color, texture, and the feeling behind your gift."
  },
  {
    title: "For Every Occasion",
    description: "From birthdays to weddings, we create floral designs that match the mood of the moment."
  }
]

function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <div className="about-copy">
          <p className="about-label">About Us</p>
          <h1>Flowers that make everyday moments feel special.</h1>
          <p className="about-text">
            We are a small flower studio focused on fresh blooms, thoughtful bouquet design,
            and warm service. Our goal is simple: help people express care, joy, and celebration
            through flowers that feel personal.
          </p>
          
        </div>

        <div className="about-image-card">
          <img src={flowerImage} alt="Fresh bouquet arrangement" />
        </div>
      </div>

      <div className="about-highlights">
        {highlights.map((item) => (
          <article key={item.title} className="about-highlight-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
