import { useState } from 'react'
import './Gallery.css'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const images = [
    { id: 1, category: 'medical', title: 'Medical Centre', src: '/hero.jpeg' },
    { id: 2, category: 'education', title: 'School Classes', src: '/child.jpeg' },
    { id: 3, category: 'community', title: 'Community Event', src: '/home.jpeg' },
    { id: 4, category: 'medical', title: 'Patient Care', src: '/patient care.jpg' },
    { id: 5, category: 'education', title: 'Student Activities', src: '/home2.jpeg' },
    { id: 6, category: 'pharmacy', title: 'Pharmacy Services', src: '/Pharmacy.jpeg' },
    { id: 7, category: 'community', title: 'Outreach Program', src: '/outreach.jpg' },
    { id: 8, category: 'medical', title: 'Equipment', src: '/equip.jpg' }
  ]

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'medical', label: 'Medical' },
    { value: 'education', label: 'Education' },
    { value: 'community', label: 'Community' },
    { value: 'pharmacy', label: 'Pharmacy' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>Gallery</h1>
        <p>Explore our facilities and programs</p>
      </div>

      <div className="gallery-container">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.value}
              className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src || "/placeholder.svg"} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
