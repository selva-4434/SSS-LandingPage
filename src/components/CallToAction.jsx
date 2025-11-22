import { Link } from 'react-router-dom'
import './CallToAction.css'

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Make a Difference Today</h2>
        <p>Join us in our mission to serve humanity. Whether as a volunteer, donor, or partner, your contribution matters.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Donate Now</Link>
          <Link to="/career" className="btn btn-outline">Join Our Team</Link>
        </div>
      </div>
    </section>
  )
}
