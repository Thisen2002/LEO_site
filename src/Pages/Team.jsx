import React, { useEffect } from 'react'
import './Team.css'
import executiveBoard from '../json files/executiveBoard.json'
import avenuedirectors from '../json files/avenuedirectors.json'

function Team() {

  return (
    <div className="team-page">
      <header className="team-hero">
        <div className="container">
          <p className="eyebrow">Meet Our Team</p>
          <h1>Leadership & Excellence</h1>
          <p className="subtitle">
            Meet the dedicated individuals who drive our mission forward and make 
            a positive impact in our community every day.
          </p>
        </div>
      </header>

      <main>
        {/* Executive Board */}
        <section className="executive-section">
          <div className="container">
            <div className="section-header">
              <h2>Executive Board</h2>
              <p>Our leadership team committed to serving with excellence and integrity.</p>
            </div>
            <div className="team-grid executive-grid">
              {executiveBoard.map(member => (
                <div key={member.id} className="member-card executive-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="member-overlay">
                      <div className="member-social">
                        <a href={`mailto:${member.email}`} className="social-link">
                          📧
                        </a>
                        <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                          💼
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="member-content">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="department">{member.department} • {member.year}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Team
