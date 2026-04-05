import "./Home.css"
import Card from "../../Components/Card/Card"
import flowerImage1 from "../../assets/flower-1-img.jpeg"
import flowerImage2 from "../../assets/flower-2-img.jpeg"
import flowerImage3 from "../../assets/flower-3-img.jpeg"

const flowersData = [
  {
    id: 1,
    name: "Lily",
    image: flowerImage1,
    description: "Beautiful white lily with elegant petals"
  },
  {
    id: 2,
    name: "Tulip",
    image: flowerImage2,
    description: "Vibrant tulip perfect for spring gardens"
  },
  {
    id: 3,
    name: "Daisy",
    image: flowerImage3,
    description: "Classic daisy with cheerful white and yellow blooms"
  },
  {
    id: 4,
    name: "Rose",
    image: flowerImage1,
    description: "Elegant rose symbolizing love and romance"
  },
  {
    id: 5,
    name: "Sunflower",
    image: flowerImage2,
    description: "Bright sunflower bringing joy to any garden"
  },
  {
    id: 6,
    name: "Orchid",
    image: flowerImage3,
    description: "Exotic orchid with stunning purple blooms"
  },
  {
    id: 7,
    name: "Marigold",
    image: flowerImage1,
    description: "Golden marigold with vibrant orange hues"
  },
  {
    id: 8,
    name: "Lavender",
    image: flowerImage2,
    description: "Fragrant lavender perfect for relaxation"
  },
  {
    id: 9,
    name: "Hibiscus",
    image: flowerImage3,
    description: "Tropical hibiscus with large colorful petals"
  }
]

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our React Router DOM example.</p>
      <div className="cards-container">
        {flowersData.map((flower) => (
          <Card key={flower.id} flower={flower} />
        ))}
      </div>
    </div>

  )
}

export default Home
