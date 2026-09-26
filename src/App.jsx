import React, { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import FacultyDashboard from './pages/FacultyDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

function AppShell() {
  const [view, setView] = useState('landing') // 'landing' | 'login'
  const { user, login, logout } = useAuth()

  if (user) {
    const handleLogout = () => {
      logout()
      setView('landing')
    }
    if (user.role === 'faculty') return <FacultyDashboard user={user} onLogout={handleLogout} />
    if (user.role === 'admin') return <AdminDashboard user={user} onLogout={handleLogout} />
    return <StudentDashboard user={user} onLogout={handleLogout} />
  }

  if (view === 'login') {
    return <Login onLogin={login} onBack={() => setView('landing')} />
  }

  return <Landing onGetStarted={() => setView('login')} />
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  )
}
