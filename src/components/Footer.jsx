import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/leo-logo.png" alt="Leo Society Logo" />
              <h3>Leo Society UOP</h3>
            </div>
            <p className="footer-tagline">We Serve with Pride</p>
            <p className="footer-description">
              Empowering young leaders at the University of Peradeniya through meaningful service and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="contact-info">
              <p>📧 contact@leosocietyuop.org</p>
              <p>📞 +94 81 238 9999</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com/leosocietyuop" className="social-link" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://instagram.com/leosocietyuop" className="social-link" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://linkedin.com/company/leosocietyuop" className="social-link" target="_blank" rel="noopener noreferrer">💼</a>
              <a href="mailto:contact@leosocietyuop.org" className="social-link">✉️</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Leo Society UOP. All rights reserved.</p>
          <p className="footer-affiliation">Part of Leo Clubs International</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
