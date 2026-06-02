import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from './pages/About'
import Projects from './pages/Projects'
import PortfolioNature from './pages/PortfolioNature'
import PortfolioCity from './pages/PortfolioCity'
import PortfolioPortrait from './pages/PortfolioPortrait'
import PortfolioWebsite from './pages/PortfolioWebsite'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    // Update data-theme attribute and localStorage when theme changes
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onThemeToggle={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio/nature" element={<PortfolioNature />} />
        <Route path="/portfolio/city" element={<PortfolioCity />} />
        <Route path="/portfolio/portraits" element={<PortfolioPortrait />} />
        <Route path="/portfolio/website" element={<PortfolioWebsite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App