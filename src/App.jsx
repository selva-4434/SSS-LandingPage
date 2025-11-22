import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Career from './pages/Career'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
