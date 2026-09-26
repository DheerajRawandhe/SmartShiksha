import React from 'react'
import { Users, GraduationCap, Building2, BarChart3, Award, ShieldCheck } from 'lucide-react'
import Card from '../ui/Card.jsx'
import { ADMIN_STATS, ENROLLMENT_TREND } from '../../data/dummyData.js'

const STATS = [
  { label: 'Total students', value: ADMIN_STATS.totalStudents.toLocaleString('en-IN'), icon: Users },
  { label: 'Faculty members', value: ADMIN_STATS.totalFaculty, icon: GraduationCap },
  { label: 'Departments', value: ADMIN_STATS.departments, icon: Building2 },
  { label: 'Avg. attendance', value: `${ADMIN_STATS.avgAttendance}%`, icon: BarChart3 },
  { label: 'Avg. CGPA', value: ADMIN_STATS.avgCgpa, icon: Award },
  { label: 'NEP compliance', value: `${ADMIN_STATS.nepComplianceScore}%`, icon: ShieldCheck }
]

export default function AdminOverview() {
  const max = Math.max(...ENROLLMENT_TREND.map((e) => e.students))

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="text-sm text-ink-400">Institutional Admin</p>
        <h2 className="mt-1 font-display text-xl font-bold text-ink-900 dark:text-white sm:text-2xl">
          Campus-wide overview
        </h2>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">National Institute of Technology, Trichy</p>
      </Card>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {STATS.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.label} className="p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                <Icon size={16} />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-ink-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-ink-400">{s.label}</p>
            </Card>
          )
        })}
      </div>

      <Card className="p-5">
        <h3 className="mb-5 font-display text-base font-semibold text-ink-900 dark:text-white">Enrollment trend</h3>
        <div className="flex h-48 items-end gap-3 sm:gap-6">
          {ENROLLMENT_TREND.map((e) => (
            <div key={e.year} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-40 w-full items-end">
                <div
                  className="w-full rounded-t-md bg-brand-500/80 transition-all dark:bg-brand-500"
                  style={{ height: `${(e.students / max) * 100}%` }}
                  title={`${e.students} students`}
                />
              </div>
              <span className="text-xs text-ink-400">{e.year}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
