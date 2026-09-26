import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'

export default function CourseCard({ course }) {
  return (
    <Card className="flex flex-col gap-4 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: course.color }}>
            {course.code}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold text-ink-900 dark:text-white">
            {course.title}
          </h3>
          <p className="mt-0.5 text-sm text-ink-400">{course.instructor}</p>
        </div>
        <button
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 dark:hover:bg-ink-800"
          aria-label={`Open ${course.title}`}
        >
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>{course.completedLectures}/{course.lecturesCount} lectures</span>
          <span className="font-semibold text-ink-700 dark:text-ink-200">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} color={course.color} />
      </div>

      <div className="rounded-lg bg-ink-50 px-3 py-2.5 text-xs text-ink-500 dark:bg-ink-800/60 dark:text-ink-400">
        <span className="font-medium text-ink-700 dark:text-ink-200">Up next: </span>
        {course.nextTopic}
      </div>
    </Card>
  )
}
