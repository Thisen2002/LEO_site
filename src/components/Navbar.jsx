import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <img src="../public/leo-logo-black-and-white.png" alt="Leo Logo" className="nav-logo" />
          <span className="nav-title">Leo Society UOP</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`} onClick={closeMenu}>Projects</Link>
          {/* <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`} onClick={closeMenu}>Events</Link> */}
          <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`} onClick={closeMenu}>Team</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
          <button className="nav-cta-button">Join Us</button>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'bar1' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar2' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar3' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar