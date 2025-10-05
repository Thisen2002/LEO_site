import React, { useEffect, useState } from 'react'
import './Gallery.css'
import galleryItems from '../json files/gallery.json'

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  // const galleryItems = [
    
  // ]

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

        {/* Photo Submission CTA
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
        </section> */}
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
