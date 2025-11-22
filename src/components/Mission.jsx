import './Mission.css'

export default function Mission() {
  const values = [
    {
      title: 'Compassion',
      description: 'We care deeply for the welfare of those we serve'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and strong moral principles'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in all services'
    },
    {
      title: 'Community',
      description: 'We believe in the power of collective action'
    }
  ]

  return (
    <section className="mission">
      <div className="mission-container">
        <div className="mission-header">
          <h2>Our Mission & Values</h2>
          <p>At Shanthi Social Services, we are committed to improving lives through comprehensive healthcare, quality education, and sustainable community development.</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{index + 1}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
