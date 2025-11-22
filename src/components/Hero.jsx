import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Shanthi Social Services</h1>
        <p>“Service to Humanity is Service to God.” </p>
        <p>Dedicated to serving humanity through healthcare, education, and community development</p>
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">Explore Services</Link>
          <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
        </div>
      </div>
    </section>
  )
}
