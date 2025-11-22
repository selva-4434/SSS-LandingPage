import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
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
    <div className="services-page">
      <div className="services-hero">
        <h1>All Services</h1>
        <p>Comprehensive healthcare, education, and community development programs</p>
      </div>

      <div className="services-container">
        <div className="services-list">
          {services.map(service => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="service-item">
              <h3>{service.name}</h3>
              <p>Learn more →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
