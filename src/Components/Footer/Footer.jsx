import { Link } from 'react-router-dom'
import { Flower2, Home, Info, Briefcase, Mail, Code, Star, Share } from 'lucide'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <Flower2 className="footer-icon" />
            <span>Flower</span>
          </div>
          <p className="footer-tagline">Bringing natural beauty to your space</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">
                <Home className="footer-link-icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Info className="footer-link-icon" />
                About
              </Link>
            </li>
            <li>
              <Link to="/services">
                <Briefcase className="footer-link-icon" />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Mail className="footer-link-icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <Code className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Star className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Share className="social-icon" />
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
