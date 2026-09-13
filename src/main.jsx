import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import LiveQueue from './pages/LiveQueue.jsx'
import Login from './pages/Login.jsx'
import RegisterCrop from './pages/RegisterCrop.jsx'
import RegisterFarmer from './pages/RegisterFarmer.jsx'

function Root() {
  const path = window.location.pathname

  // 1. Farmer Registration
  if (path === '/register-farmer') {
    return <RegisterFarmer />
  }

  // 2. Farmer Mobile OTP Login
  if (path === '/login') {
    return <Login />
  }

  // 3. Farmer Command Center Dashboard
  if (path === '/dashboard') {
    return <Dashboard />
  }

  // 4. Live Smart Procurement Queue
  if (path === '/queue') {
    return <LiveQueue />
  }

  // 5. Seasonal Crop Registration
  if (path === '/register-crop') {
    return <RegisterCrop />
  }

  // 6. Landing Page
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)