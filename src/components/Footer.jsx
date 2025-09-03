import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Leo Society UOP</h4>
              <p>University of Peradeniya<br />Peradeniya, Sri Lanka</p>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Email">✉️</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/projects">Our Projects</a></li>
                <li><a href="/events">Upcoming Events</a></li>
                <li><a href="/gallery">Gallery</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Leo Society - University of Peradeniya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
