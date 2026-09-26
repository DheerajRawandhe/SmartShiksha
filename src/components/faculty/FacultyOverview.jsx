import React from 'react'
import { Users, FileWarning, MessageSquareWarning, TriangleAlert } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { FACULTY_PROFILE, FACULTY_STUDENT_ROSTER } from '../../data/dummyData.js'

const STATS = [
  { label: 'Students', value: FACULTY_PROFILE.studentsCount, icon: Users, tone: 'text-brand-600 dark:text-brand-300', bg: 'bg-brand-50 dark:bg-brand-500/15' },
  { label: 'Pending grading', value: FACULTY_PROFILE.pendingGrading, icon: FileWarning, tone: 'text-marigold-600 dark:text-marigold-300', bg: 'bg-marigold-50 dark:bg-marigold-500/15' },
  { label: 'Open doubts', value: FACULTY_PROFILE.openDoubts, icon: MessageSquareWarning, tone: 'text-sky-600 dark:text-sky-300', bg: 'bg-sky-50 dark:bg-sky-500/15' }
]

export default function FacultyOverview() {
  const atRisk = FACULTY_STUDENT_ROSTER.filter((s) => s.attendance < 75)

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="text-sm text-ink-400">{FACULTY_PROFILE.section}</p>
        <h2 className="mt-1 font-display text-xl font-bold text-ink-900 dark:text-white sm:text-2xl">
          Welcome, {FACULTY_PROFILE.name}
        </h2>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{FACULTY_PROFILE.department}</p>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.label} className="p-4">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${s.bg} ${s.tone}`}>
                <Icon size={17} />
              </span>
              <p className="mt-3 font-display text-xl font-bold text-ink-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-ink-400">{s.label}</p>
            </Card>
          )
        })}
      </div>

      {atRisk.length > 0 && (
        <Card className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <TriangleAlert size={17} className="text-rose-500" />
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              Attendance below 75% — needs follow-up
            </h3>
          </div>
          <ul className="space-y-2">
            {atRisk.map((s) => (
              <li key={s.rollNo} className="flex items-center justify-between rounded-lg bg-rose-50 px-3 py-2.5 text-sm dark:bg-rose-500/10">
                <span className="text-ink-700 dark:text-ink-100">{s.name} <span className="text-ink-400">· {s.rollNo}</span></span>
                <Badge tone="danger">{s.attendance}% attendance</Badge>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
