import React, { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout.jsx'
import FacultyOverview from '../components/faculty/FacultyOverview.jsx'
import Gradebook from '../components/faculty/Gradebook.jsx'
import ExamGenerator from '../components/faculty/ExamGenerator.jsx'
import DoubtForum from '../components/student/DoubtForum.jsx'

const TITLES = {
  overview: 'Overview',
  gradebook: 'Gradebook',
  'exam-generator': 'Exam Generator',
  forum: 'Doubt Forum'
}

export default function FacultyDashboard({ user, onLogout }) {
  const [section, setSection] = useState('overview')

  const renderSection = () => {
    switch (section) {
      case 'gradebook': return <Gradebook />
      case 'exam-generator': return <ExamGenerator />
      case 'forum': return <DoubtForum />
      default: return <FacultyOverview />
    }
  }

  return (
    <DashboardLayout
      role="faculty"
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
