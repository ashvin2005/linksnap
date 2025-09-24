# LinkSnap Frontend

A modern, beautiful React frontend for the LinkSnap URL shortener application.

## ✨ Features

### 🎨 **Visual Design**
- **Modern Glassmorphism UI**: Semi-transparent cards with blur effects and soft shadows
- **Animated Gradient Backgrounds**: Dynamic color-shifting backgrounds with floating elements
- **Smooth Animations**: Hover transitions, button animations, and 3D effects
- **Dark/Light Theme Toggle**: Switch between themes instantly
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🚀 **Core Functionality**
- **URL Shortening**: Convert long URLs to short, shareable links
- **Custom Aliases**: Create personalized short URLs
- **Expiry Dates**: Set expiration dates for time-sensitive links
- **Click Tracking**: Monitor link performance with analytics
- **URL Preview**: See website metadata before shortening

### 📊 **Advanced Features**
- **Statistics Dashboard**: Track total URLs, clicks, and performance metrics
- **QR Code Generation**: Generate downloadable QR codes for any short URL (coming soon)
- **Bulk URL Shortening**: Shorten multiple URLs at once
- **Search & Filter**: Find URLs by content, date, or status
- **Data Management**: Export/import your URL data as JSON
- **Local Storage**: Persistent data storage without backend dependency

## 🚀 Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **Lucide React** for beautiful icons
- **Modern CSS** with flexbox, grid, and advanced animations
- **Context API** for state management
- **Local Storage** for data persistence

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Quick Start
```bash
cd frontend
npm install
npm run dev

# Your app will be available at http://localhost:3000
```

### Available Scripts
```bash
npm run dev   
npm run build   
npm run preview  
npm run lint   
```

## 🏗️ Project Structure

```
frontend/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── StatsCard.jsx
│   │   ├── URLShortener.jsx
│   │   ├── URLList.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ErrorBanner.jsx
│   │   ├── URLPreview.jsx
│   │   ├── BulkShortener.jsx
│   │   ├── FloatingActionButton.jsx
│   │   ├── Footer.jsx
│   │   └── QRModal.jsx
│   ├── contexts/            # React contexts
│   │   ├── ThemeContext.jsx
│   │   └── URLContext.jsx
│   ├── styles/              # CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   └── component styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 How to Use

1. **Basic Shortening**: Enter any URL and click "Shorten URL"
2. **Custom Aliases**: Add a custom alias in the optional field
3. **Set Expiry**: Choose an expiration date for the URL
4. **View Statistics**: See real-time stats in the dashboard
5. **Theme Toggle**: Click the moon/sun icon to switch themes
6. **Data Export**: Click "Export Data" to download your URLs as JSON
7. **Bulk Processing**: Click "Bulk Shorten URLs" to process multiple URLs

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Blue to purple (`#667eea` to `#764ba2`)
- **Dark Theme**: Deep blue gradient (`#1a1a2e` to `#0f3460`)
- **Accent Colors**: Blue (`#60a5fa`), Green (`#10b981`), Red (`#ef4444`)
- **Glass Effect**: 15% white opacity with backdrop blur

### Typography
- **Font Family**: Inter (modern, clean sans-serif)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear heading and body text distinction

### Animations
- **Hover Effects**: Smooth transforms and shadow changes
- **Loading States**: Spinner animations and skeleton loading
- **Page Transitions**: Fade and slide animations
- **Background**: Color-shifting gradient animation

## 📱 Responsive Design

- **Desktop** (768px+): Full layout with all features
- **Tablet** (640px-768px): Adapted grid layouts
- **Mobile** (480px and below): Stacked single-column layout

## 💾 Data Management

- **Local Storage**: All URLs persist in browser storage
- **Export/Import**: JSON format for data portability
- **No Backend Dependency**: Fully functional standalone app
- **Future Backend Integration**: Ready for API connection

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic URL shortening with custom aliases
- ✅ Local storage and data persistence
- ✅ Statistics dashboard
- ✅ Theme switching
- ✅ Responsive design

### Phase 2 (Backend Integration)
- 🔄 Connect to backend API
- 🔄 User authentication
- 🔄 Cloud data synchronization
- 🔄 Advanced analytics

### Phase 3 (Enhanced Features)
- 📋 QR code generation
- 📋 Bulk URL processing
- 📋 Custom domains
- 📋 Social sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

**Port already in use**
```bash
lsof -ti:3000 | xargs kill -9
```

**Node modules issues**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
node --version
npm --version
```

---

Built with ❤️ using React and modern web technologies