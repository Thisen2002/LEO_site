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

        {/* Department Heads */}
        <section className="department-section">
          <div className="container">
            <div className="section-header">
              <h2>Department Directors</h2>
              <p>Specialized leaders managing different aspects of our organization.</p>
            </div>
            <div className="team-grid">
              {departmentHeads.map(member => (
                <div key={member.id} className="member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
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

        {/* Join Team CTA */}
        <section className="join-team-section">
          <div className="container">
            <div className="join-team-content">
              <h2>Want to Join Our Team?</h2>
              <p>
                We're always looking for passionate individuals who want to make a difference. 
                Join us and become part of something bigger than yourself.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">Apply Now</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Team
