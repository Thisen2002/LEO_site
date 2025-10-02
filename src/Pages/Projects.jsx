import React, { useEffect } from 'react'
import './Projects.css'
import projects from '../json files/Projects.json'

function Projects() {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed'
      case 'Ongoing': return 'status-ongoing'
      case 'Upcoming': return 'status-upcoming'
      default: return 'status-default'
    }
  }

  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="container">
          <p className="eyebrow">Our Impact</p>
          <h1>Projects & Initiatives</h1>
          <p className="subtitle">
            Discover how we're making a difference in our community through meaningful projects 
            that create lasting positive change.
          </p>
        </div>
      </header>

      <main>
        <section className="projects-grid-section">
          <div className="container">
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className={`status-badge ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <span className="impact">{project.impact}</span>
                      <button className="learn-more-btn">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="get-involved-section">
          <div className="container">
            <div className="get-involved-content">
              <h2>Want to Get Involved?</h2>
              <p>
                Join us in creating positive change in our community. Whether you want to volunteer 
                for existing projects or propose new initiatives, we welcome your participation.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">Join a Project</button>
                <button className="btn-secondary">Propose an Idea</button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}

export default Projects
