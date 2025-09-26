import React, { createContext, useContext, useState, useEffect } from 'react'

const URLContext = createContext()

export const useURL = () => {
  const context = useContext(URLContext)
  if (!context) {
    throw new Error('useURL must be used within a URLProvider')
  }
  return context
}

export const URLProvider = ({ children }) => {
  const [urls, setUrls] = useState(() => {
    const saved = localStorage.getItem('shortenedUrls')
    return saved ? JSON.parse(saved) : []
  })
  
  const [currentFilter, setCurrentFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [qrModalUrl, setQrModalUrl] = useState(null)
  const [notification, setNotification] = useState(null)

  const urlsPerPage = 5

  useEffect(() => {
    localStorage.setItem('shortenedUrls', JSON.stringify(urls))
  }, [urls])

  const generateShortCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }


  const addUrl = (urlData) => {
    const { originalUrl, customAlias, expiryDate } = urlData
    

    if (customAlias && urls.some(url => url.shortCode === customAlias)) {
      throw new Error('Custom alias already exists. Please choose a different one.')
    }

    const shortCode = customAlias || generateShortCode()
    const newUrl = {
      id: Date.now(),
      originalUrl,
      shortCode,
      shortUrl: `https://linksnap.co/${shortCode}`,
      createdAt: new Date().toISOString(),
      expiryDate: expiryDate || null,
      clicks: 0,
      isExpired: false
    }

    setUrls(prev => [newUrl, ...prev])
    showNotification('URL shortened successfully!', 'success')
    return newUrl
  }

  const deleteUrl = (id) => {
    setUrls(prev => prev.filter(url => url.id !== id))
    showNotification('URL deleted successfully!', 'success')
  }


  const incrementClicks = (id) => {
    setUrls(prev => prev.map(url => 
      url.id === id ? { ...url, clicks: url.clicks + 1 } : url
    ))
  }


  const getFilteredUrls = () => {
    let filtered = [...urls]


    if (searchTerm) {
      filtered = filtered.filter(url => 
        url.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
        url.shortCode.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }


    const now = new Date()
    switch (currentFilter) {
      case 'today':
        filtered = filtered.filter(url => 
          new Date(url.createdAt).toDateString() === now.toDateString()
        )
        break
      case 'week':
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        filtered = filtered.filter(url => new Date(url.createdAt) >= weekAgo)
        break
      case 'month':
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        filtered = filtered.filter(url => new Date(url.createdAt) >= monthAgo)
        break
      case 'expired':
        filtered = filtered.filter(url => 
          url.expiryDate && new Date(url.expiryDate) < now
        )
        break
    }

    return filtered
  }


  const getStats = () => {
    const totalUrls = urls.length
    const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0)
    const today = new Date().toDateString()
    const todayUrls = urls.filter(url => 
      new Date(url.createdAt).toDateString() === today
    ).length
    const avgClickRate = totalUrls > 0 ? Math.round((totalClicks / totalUrls) * 100) / 100 : 0

    return { totalUrls, totalClicks, todayUrls, avgClickRate }
  }


  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }


  const exportData = () => {
    const data = {
      urls,
      exportDate: new Date().toISOString(),
      version: '1.0'
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `linksnap-export-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
    showNotification('Data exported successfully!', 'success')
  }


  const importData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          if (data.urls && Array.isArray(data.urls)) {
            setUrls(prev => [...data.urls, ...prev])
            showNotification(`Imported ${data.urls.length} URLs successfully!`, 'success')
            resolve()
          } else {
            reject(new Error('Invalid file format'))
          }
        } catch (error) {
          reject(new Error('Failed to parse file'))
        }
      }
      reader.readAsText(file)
    })
  }

  const value = {
    urls,
    currentFilter,
    searchTerm,
    currentPage,
    urlsPerPage,
    qrModalUrl,
    notification,
    setCurrentFilter,
    setSearchTerm,
    setCurrentPage,
    setQrModalUrl,
    addUrl,
    deleteUrl,
    incrementClicks,
    getFilteredUrls,
    getStats,
    showNotification,
    exportData,
    importData
  }

  return (
    <URLContext.Provider value={value}>
      {children}
    </URLContext.Provider>
  )
}