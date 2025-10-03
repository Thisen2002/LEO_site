import React from 'react'
import './Homepage.css' // Make sure to create this CSS file

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="../public/leo-logo-black-and-white.png" alt="Leo Society Logo" className="logo" />
          <h1>Leo Society</h1>
          <h2>University of Peradeniya</h2>
          <p className="tagline">We Serve with Pride</p>
          <button className="cta-button">Join Our Mission</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            The Leo Society of University of Peradeniya is a vibrant community of young leaders 
            dedicated to serving our university and the broader community. As part of Leo Clubs 
            International, we embody the spirit of Leadership, Experience, and Opportunity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide the youth of the world with an opportunity for development and 
                contribution, individually and collectively, as responsible members of the 
                local, national and international community.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be the global leader in community and humanitarian service, empowering 
                volunteers to serve their communities, meet humanitarian needs, encourage 
                peace and promote international understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="icon">🎓</div>
              <h3>Education</h3>
              <p>Supporting education initiatives and scholarship programs for underprivileged students</p>
            </div>
            <div className="activity-card">
              <div className="icon">🌱</div>
              <h3>Environment</h3>
              <p>Organizing tree planting campaigns and environmental conservation projects</p>
            </div>
            <div className="activity-card">
              <div className="icon">❤️</div>
              <h3>Community Service</h3>
              <p>Conducting blood donation camps, health clinics, and community development programs</p>
            </div>
            <div className="activity-card">
              <div className="icon">🤝</div>
              <h3>Leadership</h3>
              <p>Developing leadership skills through workshops, seminars, and hands-on projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>150+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>10,000+</h3>
              <p>Lives Impacted</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join us in our mission to serve the community and develop leadership skills</p>
          <div className="cta-buttons">
            <button className="primary-button">Become a Member</button>
            <button className="secondary-button">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}

export default Homepage