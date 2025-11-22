import { Link } from 'react-router-dom'
import { Heart, Stethoscope, BookOpen, Users, Zap } from 'lucide-react'
import './DivisionsOverview.css'

export default function DivisionsOverview() {
  const divisions = [
    { name: 'Community Development', slug: 'community-development', icon: Users },
    { name: 'School Education', slug: 'school-education', icon: BookOpen },
    { name: 'Medical Centre', slug: 'medical-centre', icon: Stethoscope },
    { name: 'Pharmacy', slug: 'pharmacy', icon: Heart },
    { name: 'Diagnostic Centre', slug: 'diagnostic-centre', icon: Zap },
    { name: 'Radiology', slug: 'radiology', icon: Zap },
    { name: 'Physiotherapy', slug: 'physiotherapy', icon: Users },
    { name: 'Blood Donation', slug: 'blood-donation', icon: Heart },
    { name: 'Mental Health', slug: 'mental-health', icon: Users },
    { name: 'Women Empowerment', slug: 'women-empowerment', icon: Users },
    { name: 'Skill Development', slug: 'skill-development', icon: BookOpen }
  ]

  return (
    <section className="divisions">
      <div className="divisions-container">
        <div className="divisions-header">
          <h2>Our Services</h2>
          <p>Comprehensive programs designed to improve lives and strengthen communities</p>
        </div>

        <div className="divisions-grid">
          {divisions.map((division) => {
            const IconComponent = division.icon
            return (
              <Link key={division.slug} to={`/services/${division.slug}`} className="division-card">
                <div className="division-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{division.name}</h3>
                <p>Learn more about our {division.name.toLowerCase()} initiatives</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
