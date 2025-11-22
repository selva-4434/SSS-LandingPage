import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: 'Community Development', slug: 'community-development' },
    { name: 'School Education', slug: 'school-education' },
    { name: 'Medical Centre', slug: 'medical-centre' },
    { name: 'Pharmacy', slug: 'pharmacy' },
    { name: 'Diagnostic Centre', slug: 'diagnostic-centre' },
    { name: 'Radiology', slug: 'radiology' },
    { name: 'Physiotherapy', slug: 'physiotherapy' },
    { name: 'Blood Donation', slug: 'blood-donation' },
    { name: 'Mental Health', slug: 'mental-health' },
    { name: 'Women Empowerment', slug: 'women-empowerment' },
    { name: 'Skill Development', slug: 'skill-development' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-text">
            <span className="logo-sss">SSS</span>
            <span className="logo-divider">|||</span>
            <span className="logo-shanthi">SHANTHI</span>
          </div>
          <div className="logo-subtitle">Social Services</div>
        </Link>

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="services-dropdown">
            <span>Services ▼</span>
            <div className="dropdown-menu">
              {services.map(service => (
                <Link 
                  key={service.slug} 
                  to={`/services/${service.slug}`}
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/career" onClick={() => setIsOpen(false)} className="career-btn">Careers</Link>
        </nav>
      </div>
    </header>
  )
}
