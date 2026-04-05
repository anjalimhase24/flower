import { Link } from 'react-router-dom'
import './Footer.css'
import BrandIcon from '../../assets/flower-1-img.jpeg'
import HomeIcon from '../../assets/home.png'
import AboutIcon from '../../assets/page.png'
import ServicesIcon from '../../assets/customer-care.png'
import ContactIcon from '../../assets/phone-call.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img src={BrandIcon} alt="Flower logo" className="footer-icon" />
            <span>Flower</span>
          </div>
          <p className="footer-tagline">Bringing natural beauty to your space</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="" className="footer-link-icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src={AboutIcon} alt="" className="footer-link-icon" />
                About
              </Link>
            </li>
            <li>
              <Link to="/services">
                <img src={ServicesIcon} alt="" className="footer-link-icon" />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src={ContactIcon} alt="" className="footer-link-icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <img src={HomeIcon} alt="" className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <img src={AboutIcon} alt="" className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <img src={ContactIcon} alt="" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Flower Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
