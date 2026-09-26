import React, { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout.jsx'
import StudentOverview from '../components/student/StudentOverview.jsx'
import CoursesView from '../components/student/CoursesView.jsx'
import AIStudyBuddy from '../components/student/AIStudyBuddy.jsx'
import Flashcards from '../components/student/Flashcards.jsx'
import DoubtForum from '../components/student/DoubtForum.jsx'

const TITLES = {
  overview: 'Overview',
  courses: 'My Courses',
  'ai-buddy': 'AI Study Buddy',
  flashcards: 'Flashcards',
  forum: 'Doubt Forum'
}

export default function StudentDashboard({ user, onLogout }) {
  const [section, setSection] = useState('overview')

  const renderSection = () => {
    switch (section) {
      case 'courses': return <CoursesView />
      case 'ai-buddy': return <AIStudyBuddy />
      case 'flashcards': return <Flashcards />
      case 'forum': return <DoubtForum />
      default: return <StudentOverview />
    }
  }

  return (
    <DashboardLayout
      role="student"
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
