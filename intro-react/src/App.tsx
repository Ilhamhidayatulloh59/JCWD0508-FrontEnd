import Navbar from "./components/navbar"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import HomePage from "./pages/home"
import { Routes, Route } from 'react-router-dom'

function App() {
  const nama: string = "Budi"
  return (
    <div>
      <Navbar name={nama} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
