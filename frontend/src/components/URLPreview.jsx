import React from 'react'

const URLPreview = ({ url }) => {
  if (!url || !isValidUrl(url)) {
    return null
  }

  const domain = new URL(url).hostname

  return (
    <div className="url-preview show">
      <div className="preview-title">
        <img 
          className="preview-favicon" 
          src={`https://www.google.com/s2/favicons?domain=${domain}`}
          alt=""
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <span>{domain}</span>
      </div>
      <div className="preview-description">
        Preview for {domain}
      </div>
    </div>
  )
}

const isValidUrl = (string) => {
  try {
    new URL(string)
    return true
  } catch {
    return false
  }
}

export default URLPreview