import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Eventi from './pages/Eventi'
import Biglietti from './pages/Biglietti'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/biglietti" element={<Biglietti />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
