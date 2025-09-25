import React from 'react'
import { useURL } from '../contexts/URLContext'

const URLList = () => {
  const { urls } = useURL()

  if (urls.length === 0) {
    return (
      <div className="glass-card">
        <div className="empty-state">
          <div className="empty-icon">🔗</div>
          <p>No URLs shortened yet. Create your first short link above!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card">
      <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Your Shortened URLs</h3>
      <div className="url-cards">
        {urls.slice(0, 5).map((url) => (
          <div key={url.id} className="url-card">
            <div className="url-info">
              <div>
                <strong style={{ color: '#60a5fa' }}>{url.shortUrl}</strong>
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                {url.originalUrl.length > 60 ? url.originalUrl.substring(0, 60) + '...' : url.originalUrl}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                Created: {new Date(url.createdAt).toLocaleDateString()} • Clicks: {url.clicks}
              </div>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => navigator.clipboard.writeText(url.shortUrl)}
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default URLList