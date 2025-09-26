import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { URLProvider } from './contexts/URLContext'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import URLShortener from './components/URLShortener'
import URLList from './components/URLList'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import FloatingActionButton from './components/FloatingActionButton'
import QRModal from './components/QRModal'
import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <URLProvider>
        <div className="app">
          {/* Background decoration */}
          <div className="bg-decoration">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>

          <ThemeToggle />

          <div className="container">
            <Header />
            <StatsCard />
            <URLShortener />
            <URLList />
          </div>

          <Footer />
          <FloatingActionButton />
          <QRModal />
        </div>
      </URLProvider>
    </ThemeProvider>
  )
}

export default App