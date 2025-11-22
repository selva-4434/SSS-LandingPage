import { useParams, Link } from 'react-router-dom'
import './ServiceDetail.css'

const serviceDetails = {
  'community-development': {
    title: 'Community Development',
    description: 'Empowering communities through sustainable development initiatives',
    content: 'Our community development programs focus on sustainable growth and social welfare. We work with local communities to identify needs and implement solutions that create lasting positive impact.',
    features: ['Infrastructure Development', 'Skill Training', 'Livelihood Programs', 'Social Welfare']
  },
  'school-education': {
    title: 'School Education',
    description: 'Quality education for all children',
    content: 'This was started in the year March 2014 initially to provide additional resources to the local balwadis and subsequently started its own child care centres.',
    content2:'Currently it has 4 play schools in Stanes Colony (Aththi vruksham play school), SIHS Colony (Kadamba Vruksham play school), Irugur ( Maruda vruksham play school) and Kannampalayam (Vanni vruksham play school) and a day care centre at Kamatchipuram.',
    features: ['Primary Education', 'Secondary Education', 'Special Education', 'Scholarship Programs']
  },
  'medical-centre': {
    title: 'Medical Centre',
    description: 'Comprehensive healthcare services',
    content: 'Medical Centre was started on April 14th, 2010.',
    content2: 'Our medical centre offers state-of-the-art healthcare facilities with experienced doctors and compassionate staff. We provide general medicine, specialty services, and emergency care.',
    features: ['Out-Patient Services', 'In-Patient Facilities', 'Emergency Care', 'Specialist Consultations']
  },
  'pharmacy': {
    title: 'Pharmacy',
    description: 'Quality medicines and pharmaceutical services',
    content: 'This Pharmacy was started on October 4th,2006. ',
    content2:'This is a 24*7 operating Pharmacy with round-the-clock-operation. Medicines are offered at 20% discount on MRP Price. Scheduled drugs are offered only against the current prescription of Doctors and Schedule X license is also available.',
    features: ['Generic Medicines', 'Branded Medicines', 'Pharmaceutical Counseling', 'Medicine Home Delivery']
  },
  'diagnostic-centre': {
    title: 'Diagnostic Centre',
    description: 'Advanced laboratory and diagnostic services',
    content: 'Our diagnostic centre is equipped with modern equipment for accurate and timely diagnosis. We offer comprehensive laboratory tests at competitive prices.',
    features: ['Blood Tests', 'Pathology Services', 'Home Sample Collection', 'Quick Reports']
  },
  'radiology': {
    title: 'Radiology',
    description: 'Advanced imaging and radiological services',
    content: 'Our radiology department provides advanced imaging services using latest technology. We offer accurate diagnostics to support clinical decision-making.',
    features: ['X-Ray Services', 'Ultrasound', 'CT Scan', 'Digital Imaging']
  },
  'physiotherapy': {
    title: 'Physiotherapy',
    description: 'Rehabilitation and physical therapy services',
    content: 'Our physiotherapy department provides rehabilitation services for various conditions. We focus on restoring mobility and improving quality of life.',
    features: ['Orthopedic Rehabilitation', 'Neurological Rehabilitation', 'Sports Medicine', 'Pain Management']
  },
  'blood-donation': {
    title: 'Blood Donation',
    description: 'Life-saving blood donation and transfusion services',
    content: 'We organize regular blood donation camps and maintain a blood bank. Every donation saves lives and contributes to community health.',
    features: ['Blood Collection', 'Blood Storage', 'Blood Testing', 'Transfusion Services']
  },
  'mental-health': {
    title: 'Mental Health',
    description: 'Comprehensive mental health and counseling services',
    content: 'Our mental health services provide support for emotional and psychological well-being. We offer counseling, therapy, and mental health awareness programs.',
    features: ['Counseling Services', 'Therapy Sessions', 'Mental Health Awareness', 'Crisis Support']
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    description: 'Programs for women development and safety',
    content: 'We work towards empowering women through education, skill development, and awareness programs. Our initiatives focus on safety, health, and economic independence.',
    features: ['Skill Training', 'Self-Help Groups', 'Health Programs', 'Legal Aid']
  },
  'skill-development': {
    title: 'Skill Development',
    description: 'Career-oriented skill training programs',
    content: 'We provide vocational training and skill development programs to enhance employability. Our courses are industry-aligned and placement-focused.',
    features: ['Technical Training', 'Soft Skills', 'Job Placement', 'Entrepreneurship']
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceDetails[slug] || serviceDetails['community-development']

  return (
    <div className="service-detail">
      <div className="service-hero">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className="service-container">
        <div className="service-content">
          <h2>About This Service</h2>
          <p>{service.content}</p>
          <p>{service.content2}</p>

          <h3>Key Features</h3>
          <ul className="features-list">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="service-actions">
            <Link to="/contact" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>

        <aside className="service-sidebar">
          <div className="sidebar-box">
            <h3>Need Assistance?</h3> 
            <p>Contact our team for more information about this service.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>

          <div className="sidebar-box">
            <h3>Quick Forms</h3>
            <p>Submit your inquiry or request here.</p>
            <button className="btn btn-primary">Submit Request</button>
    
          </div>
        </aside>
      </div>
    </div>
  )
}
