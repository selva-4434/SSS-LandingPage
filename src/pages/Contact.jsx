import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with Shanthi Social Services</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>Project Division</h3>
            <p>Landline : +91 422 2205500</p>
            <p>Mobile	:	+91 8489933108</p>
          </div>

          <div className="info-card">
            <h3>Petrol Bunk</h3>
            <p>Landline	:	+91 422 2592425 / 2205500</p>
            <p>Mobile	:	+91 8489933141 / 8489933142</p>
            <p>Mail ID	:	petrolbunk@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Pharmacy</h3>
            <p>Landline	:	+91 422 2205525</p>
            <p>Mobile	:	+91 8489933155 / 8489933156</p>
            <p>Mail ID	:	pharmacy@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Diagnostic Centre</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:	+91 8489933111 / 8489933133</p>
            <p>Mail ID	:	lab@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Medical Centre</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:	+91 8489933111 / 8489933133</p>
            <p>Mail ID	:	medicalcentre@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Blood Bank</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:	+91 8489933122 / 8489933126</p>
            <p>Mail ID	:	bloodbank@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Radiology Services</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:	+91 8489933125 / 8489933130</p>
            <p>Mail ID	:	radiology@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Canteen</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:		+91 8489933163 / 8489933164</p>
          </div>

          <div className="info-card">
            <h3>LPG Crematorium</h3>
            <p>Landline	:	+91 422 2573723 / 2205500</p>
            <p>Mobile	:	+91 8489933188</p>
          </div>

          <div className="info-card">
            <h3>Dialysis Services</h3>
            <p>Landline	:	+91 422 2205500</p>
            <p>Mobile	:	+91 8489933135</p>
          </div>

          <div className="info-card">
            <h3>Opticare Division</h3>
            <p>SNR_Landline	:	+91 422 2205500</p>
            <p>SNR_Mobile	:	+91 8489933136</p>
            <p>SBC_Mobile	:	+91 8489911400</p>
            <p>Mail ID	:	opticare@shanthisocialservices.org</p>
          </div>

          <div className="info-card">
            <h3>Address for communication </h3>
            <p>S.F.No.128/2, (2249), </p>
            <p>Trichy Road, Singanallur,</p>
            <p>Coimbatore – 641 005.</p>
            <p>TamilNadu, INDIA.</p>
          </div>

        </div>

        {/* <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

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
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>

          {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form> */}
      </div>
    </div>
  )
}
