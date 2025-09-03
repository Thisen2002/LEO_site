import React, { useEffect } from 'react'
import './Projects.css'

function Projects() {
  useEffect(() => {
    document.title = 'Projects | Leo Society UOP'
  }, [])

  const projects = [
    {
      id: 1,
      title: "Project Diyakanda",
      category: "Community Development",
      description: "A comprehensive community development initiative focused on improving living conditions and educational opportunities in rural areas.",
      image: "/project-diyakanda.jpg",
      status: "Ongoing",
      impact: "500+ families benefited"
    },
    {
      id: 2,
      title: "Green Campus Initiative",
      category: "Environment",
      description: "An environmental awareness and conservation project aimed at making our university campus more sustainable and eco-friendly.",
      image: "/project-green.jpg",
      status: "Completed",
      impact: "1000+ trees planted"
    },
    {
      id: 3,
      title: "Education Support Program",
      category: "Education",
      description: "Providing educational resources and tutoring support to underprivileged students in the local community.",
      image: "/project-education.jpg",
      status: "Ongoing",
      impact: "200+ students supported"
    },
    {
      id: 4,
      title: "Health Awareness Campaign",
      category: "Health",
      description: "Conducting health awareness programs and free medical checkups in rural communities around Peradeniya.",
      image: "/project-health.jpg",
      status: "Upcoming",
      impact: "Expected: 300+ people"
    },
    {
      id: 5,
      title: "Digital Literacy Drive",
      category: "Technology",
      description: "Teaching basic computer and internet skills to elderly community members and rural populations.",
      image: "/project-digital.jpg",
      status: "Ongoing",
      impact: "150+ people trained"
    },
    {
      id: 6,
      title: "Clean Water Project",
      category: "Community Service",
      description: "Installing water purification systems and promoting clean water practices in underserved areas.",
      image: "/project-water.jpg",
      status: "Completed",
      impact: "5 villages served"
    }
  ]

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

        <section className="get-involved-section">
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
        </section>
      </main>
    </div>
  )
}

export default Projects
