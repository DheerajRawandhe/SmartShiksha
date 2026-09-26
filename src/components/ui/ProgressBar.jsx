import React from 'react'

export default function ProgressBar({ value = 0, color = '#4F46E5', trackClassName = '', height = 'h-2' }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={`w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800 ${height} ${trackClassName}`}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  )
}
