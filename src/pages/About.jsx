import './About.css'

export default function About() {
  const milestones = [
    { year: 2010, event: 'Founded Shanthi Social Services' },
    { year: 2012, event: 'Opened first medical centre' },
    { year: 2014, event: 'Launched school education program' },
    { year: 2016, event: 'Established pharmacy services' },
    { year: 2018, event: 'Opened diagnostic centre' },
    { year: 2020, event: 'Expanded blood donation program' }
  ]

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Shanthi Social Services</h1>
        <p>Our Journey of Service and Compassion</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <section className="about-section">
          <h2>Founder</h2>
          <p>The founder of the trust Shanthi Social Services is P. Subramanian.He was a first-generation industrialist from Coimbatore, Tamil Nadu, who founded the gear manufacturing company Shanthi Gears Ltd.In 1996 he established Shanthi Social Services in memory of his late wife, Mrs. Shanthi.
His guiding motto was: “Service to Humanity is Service to God.”</p>
        </section>
          <h2>Our Story</h2>
          <p>Shanthi Social Services was founded with a vision to serve humanity through quality healthcare, education, and community development. Over the years, we have touched millions of lives through our dedicated work and commitment to social welfare.</p>
        </section>

        <section className="about-section">
          <h2>Mission</h2>
          <p>Guided by the belief that “Service to Humanity is Service to God,” our mission is to provide selfless, high-quality support to those in need. We work to ensure that every person—regardless of background—has access to essential services that promote health, education, and overall well-being. We are dedicated to operating with integrity, kindness, and a deep sense of social responsibility.</p>        
        </section>

        <section className="about-section">
          <h2>Vision</h2>
          <p>Our vision is to create a world where kindness and service transcend all boundaries—where quality healthcare, education, and basic necessities are accessible to all, and where communities thrive through compassion, integrity, and collective well-being.</p>
        </section>

        <section className="about-section">
          <h2>Timeline of Milestones</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{milestone.year}</h4>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
