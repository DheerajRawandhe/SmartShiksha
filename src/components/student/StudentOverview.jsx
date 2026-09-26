import React from 'react'
import { Flame, Clock3, Award, BarChart2 } from 'lucide-react'
import Card from '../ui/Card.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import CourseCard from './CourseCard.jsx'
import DeadlinesWidget from './DeadlinesWidget.jsx'
import { STUDENT_PROFILE, COURSES_DATA, ACADEMIC_DEADLINES } from '../../data/dummyData.js'

const STATS = [
  { label: 'CGPA', value: STUDENT_PROFILE.cgpa, icon: Award, tone: 'text-brand-600 dark:text-brand-300', bg: 'bg-brand-50 dark:bg-brand-500/15' },
  { label: 'Attendance', value: `${STUDENT_PROFILE.attendance}%`, icon: BarChart2, tone: 'text-emerald-600 dark:text-emerald-300', bg: 'bg-emerald-50 dark:bg-emerald-500/15' },
  { label: 'Day streak', value: `${STUDENT_PROFILE.dailyStreak} days`, icon: Flame, tone: 'text-marigold-600 dark:text-marigold-300', bg: 'bg-marigold-50 dark:bg-marigold-500/15' },
  { label: 'Study hours (wk)', value: `${STUDENT_PROFILE.weeklyStudyHours}h`, icon: Clock3, tone: 'text-sky-600 dark:text-sky-300', bg: 'bg-sky-50 dark:bg-sky-500/15' }
]

export default function StudentOverview() {
  const creditPct = Math.round((STUDENT_PROFILE.creditsCompleted / STUDENT_PROFILE.creditsTotal) * 100)
  const hoursPct = Math.round((STUDENT_PROFILE.weeklyStudyHours / STUDENT_PROFILE.weeklyGoalHours) * 100)

  return (
    <div className="space-y-6">
      <Card className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-ink-400">{STUDENT_PROFILE.semester}</p>
          <h2 className="mt-1 font-display text-xl font-bold text-ink-900 dark:text-white sm:text-2xl">
            Welcome back, {STUDENT_PROFILE.name.split(' ')[0]} 👋
          </h2>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
            {STUDENT_PROFILE.department} · {STUDENT_PROFILE.college}
          </p>
        </div>
        <div className="min-w-[180px]">
          <div className="mb-1.5 flex justify-between text-xs text-ink-500 dark:text-ink-400">
            <span>Credits completed</span>
            <span className="font-semibold text-ink-700 dark:text-ink-200">{STUDENT_PROFILE.creditsCompleted}/{STUDENT_PROFILE.creditsTotal}</span>
          </div>
          <ProgressBar value={creditPct} color="#4F46E5" />
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Continue learning</h3>
            <span className="text-xs text-ink-400">{COURSES_DATA.length} active courses</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {COURSES_DATA.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <DeadlinesWidget deadlines={ACADEMIC_DEADLINES} />
          <Card className="p-5">
            <h3 className="mb-3 font-display text-base font-semibold text-ink-900 dark:text-white">Weekly study goal</h3>
            <div className="mb-1.5 flex justify-between text-xs text-ink-500 dark:text-ink-400">
              <span>{STUDENT_PROFILE.weeklyStudyHours}h logged</span>
              <span>{STUDENT_PROFILE.weeklyGoalHours}h goal</span>
            </div>
            <ProgressBar value={hoursPct} color="#F59E0B" />
            <p className="mt-3 text-xs text-ink-400">
              {hoursPct >= 100 ? "Goal reached — great work!" : `${STUDENT_PROFILE.weeklyGoalHours - STUDENT_PROFILE.weeklyStudyHours}h to go this week.`}
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
