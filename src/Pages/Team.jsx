import React, { useEffect } from 'react'
import './Team.css'

function Team() {
  useEffect(() => {
    document.title = 'Team | Leo Society UOP'
  }, [])

  const executiveBoard = [
    {
      id: 1,
      name: "Sahan Perera",
      position: "President",
      department: "Engineering Faculty",
      year: "3rd Year",
      image: "/team-president.jpg",
      bio: "Leading the Leo Society with passion for community service and youth development.",
      email: "president@leosocietyuop.org",
      linkedin: "https://linkedin.com/in/sahanperera"
    },
    {
      id: 2,
      name: "Kavya Fernando",
      position: "Vice President",
      department: "Medicine Faculty",
      year: "2nd Year",
      image: "/team-vp.jpg",
      bio: "Dedicated to supporting community health initiatives and member development.",
      email: "vp@leosocietyuop.org",
      linkedin: "https://linkedin.com/in/kavyafernando"
    },
    {
      id: 3,
      name: "Ravindu Silva",
      position: "Secretary",
      department: "Science Faculty",
      year: "3rd Year",
      image: "/team-secretary.jpg",
      bio: "Ensuring smooth operations and maintaining excellent communication channels.",
      email: "secretary@leosocietyuop.org",
      linkedin: "https://linkedin.com/in/ravindusilva"
    },
    {
      id: 4,
      name: "Tharushi Wijesinghe",
      position: "Treasurer",
      department: "Arts Faculty",
      year: "2nd Year",
      image: "/team-treasurer.jpg",
      bio: "Managing finances with transparency and supporting sustainable growth.",
      email: "treasurer@leosocietyuop.org",
      linkedin: "https://linkedin.com/in/tharushiwijesinghe"
    }
  ]

  const departmentHeads = [
    {
      id: 5,
      name: "Mihiri Jayawardena",
      position: "Project Director",
      department: "Engineering Faculty",
      year: "2nd Year",
      image: "/team-projects.jpg",
      bio: "Coordinating impactful community service projects and initiatives."
    },
    {
      id: 6,
      name: "Kasun Rathnayake",
      position: "Events Director",
      department: "Science Faculty",
      year: "3rd Year",
      image: "/team-events.jpg",
      bio: "Creating memorable experiences and organizing successful events."
    },
    {
      id: 7,
      name: "Amara Bandara",
      position: "Public Relations Director",
      department: "Arts Faculty",
      year: "2nd Year",
      image: "/team-pr.jpg",
      bio: "Building relationships and managing our public image and communications."
    },
    {
      id: 8,
      name: "Nadeesha Kumari",
      position: "Membership Director",
      department: "Medicine Faculty",
      year: "1st Year",
      image: "/team-membership.jpg",
      bio: "Welcoming new members and fostering a strong Leo community."
    }
  ]

  const advisors = [
    {
      id: 9,
      name: "Prof. Chaminda Jayasekara",
      position: "Faculty Advisor",
      department: "Faculty of Engineering",
      image: "/advisor-1.jpg",
      bio: "Providing guidance and mentorship to ensure our activities align with university values."
    },
    {
      id: 10,
      name: "Dr. Samanthi Rodrigo",
      position: "Leo Advisor",
      department: "Lions Club of Kandy",
      image: "/advisor-2.jpg",
      bio: "Supporting our connection with Lions International and providing Leo guidance."
    }
  ]

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

        {/* Advisors */}
        <section className="advisors-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Advisors</h2>
              <p>Experienced mentors guiding our journey and supporting our growth.</p>
            </div>
            <div className="advisors-grid">
              {advisors.map(advisor => (
                <div key={advisor.id} className="advisor-card">
                  <div className="advisor-image">
                    <img src={advisor.image} alt={advisor.name} />
                  </div>
                  <div className="advisor-content">
                    <h3>{advisor.name}</h3>
                    <p className="position">{advisor.position}</p>
                    <p className="department">{advisor.department}</p>
                    <p className="bio">{advisor.bio}</p>
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
