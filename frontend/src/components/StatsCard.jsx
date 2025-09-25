import React from 'react'
import { useURL } from '../contexts/URLContext'
import './StatsCard.css'

const StatsCard = () => {
  const { getStats } = useURL()
  const { totalUrls, totalClicks, todayUrls, avgClickRate } = getStats()

  const stats = [
    { label: 'Total URLs', value: totalUrls, icon: '🔗' },
    { label: 'Total Clicks', value: totalClicks, icon: '👆' },
    { label: "Today's URLs", value: todayUrls, icon: '📅' },
    { label: 'Avg Click Rate', value: `${avgClickRate}%`, icon: '📊' }
  ]

  return (
    <div className="stats-dashboard">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsCard