import React, { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout.jsx'
import AdminOverview from '../components/admin/AdminOverview.jsx'
import DepartmentMatrix from '../components/admin/DepartmentMatrix.jsx'
import ComplianceExport from '../components/admin/ComplianceExport.jsx'

const TITLES = {
  overview: 'Overview',
  departments: 'Departments',
  compliance: 'NEP Compliance',
  analytics: 'Analytics'
}

export default function AdminDashboard({ user, onLogout }) {
  const [section, setSection] = useState('overview')

  const renderSection = () => {
    switch (section) {
      case 'departments': return <DepartmentMatrix />
      case 'compliance': return <ComplianceExport />
      case 'analytics': return <AdminOverview />
      default: return <AdminOverview />
    }
  }

  return (
    <DashboardLayout
      role="admin"
      user={user}
      activeSection={section}
      sectionTitle={TITLES[section]}
      onNavigate={setSection}
      onLogout={onLogout}
    >
      {renderSection()}
    </DashboardLayout>
  )
}
