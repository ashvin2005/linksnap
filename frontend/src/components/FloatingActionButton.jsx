import React from 'react'
import { ArrowUp } from 'lucide-react'

const FloatingActionButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button className="fab" onClick={scrollToTop} title="Back to Top">
      <ArrowUp size={24} />
    </button>
  )
}

export default FloatingActionButton