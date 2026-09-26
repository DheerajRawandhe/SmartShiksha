import React, { createContext, useContext, useState } from 'react'
import { DEMO_ACCOUNTS } from '../data/dummyData.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (role) => {
    const account = DEMO_ACCOUNTS.find((a) => a.role === role)
    setUser(account || null)
    return account
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
