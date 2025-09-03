import React, { useEffect, useState } from 'react'
import './Gallery.css'

function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | Leo Society UOP'
  }, [])

  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: "Annual Leo Convention 2024",
      category: "events",
      image: "/gallery-convention.jpg",
      description: "Our biggest event of the year with inspiring speakers and workshops."
    },
    {
      id: 2,
      title: "Community Clean-up Drive",
      category: "projects",
      image: "/gallery-cleanup.jpg",
      description: "Making our community cleaner and greener together."
    },
    {
      id: 3,
      title: "Executive Board Meeting",
      category: "team",
      image: "/gallery-meeting.jpg",
      description: "Planning future initiatives and projects."
    },
    {
      id: 4,
      title: "Christmas Charity Distribution",
      category: "projects",
      image: "/gallery-charity.jpg",
      description: "Spreading joy and hope during the holiday season."
    },
    {
      id: 5,
      title: "New Member Orientation",
      category: "events",
      image: "/gallery-orientation.jpg",
      description: "Welcoming new members to our Leo family."
    },
    {
      id: 6,
      title: "Team Building Activities",
      category: "team",
      image: "/gallery-team-building.jpg",
      description: "Strengthening bonds and building friendships."
    },
    {
      id: 7,
      title: "Environmental Awareness Campaign",
      category: "projects",
      image: "/gallery-environment.jpg",
      description: "Educating the community about environmental conservation."
    },
    {
      id: 8,
      title: "Leadership Workshop",
      category: "events",
      image: "/gallery-workshop.jpg",
      description: "Developing leadership skills and personal growth."
    },
    {
      id: 9,
      title: "Fundraising Gala",
      category: "events",
      image: "/gallery-gala.jpg",
      description: "Raising funds for our community service projects."
    },
    {
      id: 10,
      title: "School Renovation Project",
      category: "projects",
      image: "/gallery-renovation.jpg",
      description: "Improving educational facilities for local students."
    },
    {
      id: 11,
      title: "Leo Youth Summit",
      category: "events",
      image: "/gallery-summit.jpg",
      description: "Connecting with Leo clubs from other universities."
    },
    {
      id: 12,
      title: "Board Planning Retreat",
      category: "team",
      image: "/gallery-retreat.jpg",
      description: "Strategic planning for the upcoming year."
    }
  ]

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'events', name: 'Events', count: galleryItems.filter(item => item.category === 'events').length },
    { id: 'projects', name: 'Projects', count: galleryItems.filter(item => item.category === 'projects').length },
    { id: 'team', name: 'Team', count: galleryItems.filter(item => item.category === 'team').length }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  return (
    <div className="gallery-page">
      <header className="gallery-hero">
        <div className="container">
          <p className="eyebrow">Our Memories</p>
          <h1>Photo Gallery</h1>
          <p className="subtitle">
            Explore moments from our events, projects, and community activities. 
            Each photo tells a story of service, friendship, and positive impact.
          </p>
        </div>
      </header>

      <main>
        <section className="gallery-content">
          <div className="container">
            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-item"
                  onClick={() => openLightbox(item)}
                >
                  <div className="gallery-image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className="view-btn">View Full Size</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Submission CTA */}
        <section className="photo-submission-section">
          <div className="container">
            <div className="submission-content">
              <h2>Share Your Leo Moments</h2>
              <p>
                Have photos from our events or projects? We'd love to feature them in our gallery! 
                Help us document our journey and celebrate our achievements together.
              </p>
              <button className="submit-photos-btn">Submit Photos</button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>×</button>
            <button className="nav-btn prev-btn" onClick={prevImage}>‹</button>
            <button className="nav-btn next-btn" onClick={nextImage}>›</button>
            
            <div className="lightbox-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
