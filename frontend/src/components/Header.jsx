import React from 'react'
import { Link } from 'lucide-react'

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <Link className="logo-icon" size={56} />
        LinkSnap
      </h1>
      <p>Transform long URLs into powerful, trackable short links</p>
    </header>
  )
}

export default Header