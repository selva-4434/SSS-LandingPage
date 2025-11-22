import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Career.css'

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const jobs = [
    { id: 1, title: 'Doctor (MBBS/MD)', department: 'Medical', experience: '3+ years' },
    { id: 2, title: 'Nursing Staff', department: 'Medical', experience: '2+ years' },
    { id: 3, title: 'School Teacher', department: 'Education', experience: '2+ years' },
    { id: 4, title: 'Pharmacist', department: 'Pharmacy', experience: '1+ years' },
    { id: 5, title: 'Lab Technician', department: 'Diagnostic', experience: '2+ years' },
    { id: 6, title: 'Counselor', department: 'Mental Health', experience: '2+ years' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', message: '' })
    }, 3000)
  }

  return (
    <div className="career-page">
      <div className="career-hero">
        <h1>Careers at Shanthi</h1>
        <p>Join our team and make a difference</p>
      </div>

      <div className="career-container">
        <section className="opportunities-section">
          <h2>Open Positions</h2>
          <div className="jobs-grid">
            {jobs.map(job => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <p className="department">{job.department}</p>
                <p className="experience">Experience: {job.experience}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Join Shanthi?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Meaningful Work</h3>
              <p>Contribute to society and make a real difference in people's lives</p>
            </div>
            <div className="benefit-card">
              <h3>Growth Opportunities</h3>
              <p>Professional development and career advancement programs</p>
            </div>
            <div className="benefit-card">
              <h3>Competitive Salary</h3>
              <p>Fair compensation and benefits package</p>
            </div>
            <div className="benefit-card">
              <h3>Team Environment</h3>
              <p>Work with dedicated professionals in a supportive culture</p>
            </div>
          </div>
        </section>

        <section className="application-section">
          <h2>Apply Now</h2>
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Position Applied For</label>
              <select 
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a position</option>
                {jobs.map(job => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Years of Experience</label>
              <input 
                type="text" 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message / Cover Letter</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit Application</button>

            {submitted && <p className="success-message">Thank you! Your application has been received.</p>}
          </form>
        </section>
      </div>
    </div>
  )
}
