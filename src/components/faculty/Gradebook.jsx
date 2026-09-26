import React from 'react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { FACULTY_STUDENT_ROSTER, FACULTY_PROFILE } from '../../data/dummyData.js'

const STATUS_TONE = {
  'Top 5%': 'success',
  Good: 'brand',
  Consistent: 'neutral',
  'Attention Needed': 'danger'
}

export default function Gradebook() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Gradebook — {FACULTY_PROFILE.section}</h2>
        <span className="text-xs text-ink-400">{FACULTY_STUDENT_ROSTER.length} of {FACULTY_PROFILE.studentsCount} students shown</span>
      </div>

      <Card className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400 dark:border-ink-800">
              <th className="px-5 py-3 font-medium">Roll No.</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Internal 1</th>
              <th className="px-5 py-3 font-medium">Assignment</th>
              <th className="px-5 py-3 font-medium">Attendance</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {FACULTY_STUDENT_ROSTER.map((s) => (
              <tr key={s.rollNo} className="border-b border-ink-100 last:border-0 dark:border-ink-800">
                <td className="whitespace-nowrap px-5 py-3 text-ink-500 dark:text-ink-400">{s.rollNo}</td>
                <td className="whitespace-nowrap px-5 py-3 font-medium text-ink-900 dark:text-white">{s.name}</td>
                <td className="whitespace-nowrap px-5 py-3 text-ink-600 dark:text-ink-300">{s.internal1}/{s.internal1Max}</td>
                <td className="whitespace-nowrap px-5 py-3 text-ink-600 dark:text-ink-300">{s.assignment}/{s.assignmentMax}</td>
                <td className="whitespace-nowrap px-5 py-3 text-ink-600 dark:text-ink-300">{s.attendance}%</td>
                <td className="whitespace-nowrap px-5 py-3"><Badge tone={STATUS_TONE[s.status]}>{s.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
