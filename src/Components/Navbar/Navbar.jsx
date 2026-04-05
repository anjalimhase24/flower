import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Flower</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
