import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function DashboardLayout({ role, user, activeSection, sectionTitle, onNavigate, onLogout, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-ink-50 dark:bg-ink-950">
      <Sidebar
        role={role}
        activeSection={activeSection}
        onNavigate={(id) => {
          onNavigate(id)
          setSidebarOpen(false)
        }}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          user={user}
          sectionTitle={sectionTitle}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={onLogout}
        />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl animate-rise">{children}</div>
        </main>
      </div>
    </div>
  )
}
