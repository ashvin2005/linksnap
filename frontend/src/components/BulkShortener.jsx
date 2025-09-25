import React from 'react'

const BulkShortener = ({ isVisible }) => {
  if (!isVisible) return null

  return (
    <div className="bulk-form show">
      <div className="form-group">
        <label htmlFor="bulkUrls">Enter multiple URLs (one per line)</label>
        <textarea 
          id="bulkUrls" 
          className="form-input"
          style={{ minHeight: '120px', resize: 'vertical' }}
          placeholder="https://example1.com&#10;https://example2.com&#10;https://example3.com"
        />
      </div>
      <button type="button" className="btn btn-primary">
        Shorten All URLs
      </button>
    </div>
  )
}

export default BulkShortener