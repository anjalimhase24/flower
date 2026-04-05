import { Link } from 'react-router-dom'
import './Navbar.css'
import HomeIcon from '../../assets/home.png'
import AboutIcon from '../../assets/page.png'
import ServicesIcon from '../../assets/customer-care.png'
import ContactIcon from '../../assets/phone-call.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={HomeIcon} alt="Flower logo" className="navbar-icon" />
        <span>Flower</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            <img src={HomeIcon} alt="" className="navbar-link-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            <img src={AboutIcon} alt="" className="navbar-link-icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-link">
            <img src={ServicesIcon} alt="" className="navbar-link-icon" />
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            <img src={ContactIcon} alt="" className="navbar-link-icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
