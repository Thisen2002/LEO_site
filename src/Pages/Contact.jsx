import React, { useEffect, useState } from 'react'
import './Contact.css'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'contact@leosocietyuop.org',
      description: 'Send us an email and we\'ll respond within 24 hours.'
    },
    {
      icon: '📱',
      title: 'Call Us',
      details: '+94 81 238 9999',
      description: 'Available Monday to Friday, 9:00 AM - 5:00 PM.'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'University of Peradeniya, Peradeniya 20400',
      description: 'Leo Club Room, Student Center Building.'
    },
    {
      icon: '💬',
      title: 'Social Media',
      details: '@leosocietyuop',
      description: 'Follow us on Facebook, Instagram, and LinkedIn.'
    }
  ]

  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/leosocietyuop',
      icon: '📘'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/leosocietyuop',
      icon: '📷'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/leosocietyuop',
      icon: '💼'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/leosocietyuop',
      icon: '🐦'
    }
  ]

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="container">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
          <p className="subtitle">
            Have questions about our activities? Want to get involved? 
            We'd love to hear from you and help you become part of our community.
          </p>
        </div>
      </header>

      <main>
        <section className="contact-content">
          <div className="container">
            <div className="contact-layout">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership/Collaboration</option>
                      <option value="events">Event Information</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <h2>Get in Touch</h2>
                <p className="info-description">
                  Choose the best way to reach us. We're here to help and answer any questions you might have.
                </p>
                
                <div className="contact-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-card">
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-details">
                        <h3>{info.title}</h3>
                        <p className="contact-detail">{info.details}</p>
                        <p className="contact-description">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="social-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.platform}
                      >
                        <span className="social-icon">{social.icon}</span>
                        <span className="social-name">{social.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section className="location-section">
          <div className="container">
            <div className="location-content">
              <h2>Find Us on Campus</h2>
              <p>
                Visit us at our club room in the Student Center Building. 
                We're always happy to welcome new visitors and potential members!
              </p>
              <div className="location-details">
                <div className="location-item">
                  <strong>Address:</strong> University of Peradeniya, Peradeniya 20400, Sri Lanka
                </div>
                <div className="location-item">
                  <strong>Room:</strong> Leo Club Room, Student Center Building, 2nd Floor
                </div>
                <div className="location-item">
                  <strong>Office Hours:</strong> Monday - Friday, 2:00 PM - 6:00 PM
                </div>
              </div>
              
              {/* Placeholder for map */}
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="map-icon">🗺️</div>
                  <h3>Interactive Map</h3>
                  <p>Campus map and directions coming soon!</p>
                  <button className="directions-btn">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
