import React from 'react'
import { X, AlertCircle } from 'lucide-react'
import './ErrorBanner.css'

const ErrorBanner = ({ error, onClose }) => {
  if (!error) return null

  return (
    <div className="error-banner show">
      <AlertCircle className="error-icon" size={20} />
      <span className="error-message">{error}</span>
      <button className="error-close" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  )
}

export default ErrorBanner