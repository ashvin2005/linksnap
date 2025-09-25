import React, { useState } from 'react'
import { Link2, Calendar, Upload, Download, Wand2 } from 'lucide-react'
import { useURL } from '../contexts/URLContext'
import ErrorBanner from './ErrorBanner'
import URLPreview from './URLPreview'
import BulkShortener from './BulkShortener'
import './URLShortener.css'

const URLShortener = () => {
  const { addUrl, exportData, importData, showNotification } = useURL()
  const [formData, setFormData] = useState({
    originalUrl: '',
    customAlias: '',
    expiryDate: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showBulk, setShowBulk] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const validateUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateUrl(formData.originalUrl)) {
      setError('Please enter a valid URL')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      await addUrl(formData)
      setFormData({ originalUrl: '', customAlias: '', expiryDate: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleImport = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      await importData(file)
    } catch (err) {
      showNotification(err.message, 'error')
    }
    e.target.value = ''
  }

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0]
  }

  return (
    <>
      <ErrorBanner error={error} onClose={() => setError('')} />
      
      <div className="glass-card">
        <form className="shorten-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="originalUrl">Enter your URL</label>
            <input
              type="url"
              id="originalUrl"
              name="originalUrl"
              className="form-input"
              placeholder="https://example.com/very-long-url"
              value={formData.originalUrl}
              onChange={handleInputChange}
              required
            />
          </div>

          <URLPreview url={formData.originalUrl} />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="customAlias">Custom Alias (Optional)</label>
              <input
                type="text"
                id="customAlias"
                name="customAlias"
                className="form-input"
                placeholder="my-custom-link"
                pattern="[a-zA-Z0-9-_]+"
                title="Only letters, numbers, hyphens, and underscores allowed"
                value={formData.customAlias}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date (Optional)</label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                className="form-input"
                min={getTodayDate()}
                value={formData.expiryDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner" />
                Shortening...
              </>
            ) : (
              <>
                <Link2 size={20} />
                Shorten URL
              </>
            )}
          </button>
        </form>

        {/* Bulk URL Shortener */}
        <div className="bulk-section">
          <button 
            type="button"
            className="bulk-toggle-btn"
            onClick={() => setShowBulk(!showBulk)}
          >
            <Wand2 size={20} />
            Bulk Shorten URLs
          </button>
          <BulkShortener isVisible={showBulk} />
        </div>

        {/* Data Management */}
        <div className="data-management">
          <button className="btn btn-secondary" onClick={exportData}>
            <Download size={20} />
            Export Data
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => document.getElementById('importInput').click()}
          >
            <Upload size={20} />
            Import Data
          </button>
          <input
            type="file"
            id="importInput"
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleImport}
          />
        </div>
      </div>
    </>
  )
}

export default URLShortener