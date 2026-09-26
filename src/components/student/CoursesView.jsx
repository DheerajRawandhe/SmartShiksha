import React, { useState } from 'react'
import { ChevronDown, CheckCircle2, PlayCircle, Lock } from 'lucide-react'
import Card from '../ui/Card.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import { COURSES_DATA } from '../../data/dummyData.js'

const STATUS_ICON = {
  completed: <CheckCircle2 size={16} className="text-emerald-500" />,
  active: <PlayCircle size={16} className="text-brand-500" />,
  locked: <Lock size={15} className="text-ink-300 dark:text-ink-600" />
}

function CourseAccordion({ course }) {
  const [open, setOpen] = useState(course.id === 'cs301')

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: course.color }}>
            {course.code} · {course.credits} credits
          </p>
          <h3 className="mt-1 truncate font-display text-base font-semibold text-ink-900 dark:text-white">
            {course.title}
          </h3>
          <p className="text-sm text-ink-400">{course.instructor}</p>
          <div className="mt-3 max-w-xs">
            <ProgressBar value={course.progress} color={course.color} />
          </div>
        </div>
        <ChevronDown size={18} className={`shrink-0 text-ink-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="border-t border-ink-100 px-5 py-4 dark:border-ink-800">
          <div className="space-y-4">
            {course.units.map((unit) => (
              <div key={unit.unitId}>
                <p className="mb-2 text-sm font-semibold text-ink-700 dark:text-ink-200">{unit.title}</p>
                <ul className="space-y-2">
                  {unit.topics.map((t) => (
                    <li
                      key={t.id}
                      className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm ${
                        t.status === 'active'
                          ? 'bg-brand-50 dark:bg-brand-500/10'
                          : 'bg-ink-50 dark:bg-ink-800/50'
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        {STATUS_ICON[t.status]}
                        <span className={`truncate ${t.status === 'locked' ? 'text-ink-400' : 'text-ink-700 dark:text-ink-100'}`}>
                          {t.title}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs text-ink-400">{t.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

export default function CoursesView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">My courses</h2>
        <span className="text-xs text-ink-400">{COURSES_DATA.length} enrolled this semester</span>
      </div>
      <div className="space-y-4">
        {COURSES_DATA.map((c) => (
          <CourseAccordion key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
