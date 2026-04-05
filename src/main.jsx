import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Services from './views/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
