import React from 'react'
import { Clock } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'

const PRIORITY_TONE = { high: 'danger', medium: 'amber', low: 'neutral' }

export default function DeadlinesWidget({ deadlines }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Upcoming deadlines</h3>
        <Clock size={16} className="text-ink-400" />
      </div>
      <ul className="space-y-3">
        {deadlines.map((d) => (
          <li key={d.id} className="flex items-start justify-between gap-3 border-b border-ink-100 pb-3 last:border-0 last:pb-0 dark:border-ink-800">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{d.title}</p>
              <p className="mt-0.5 text-xs text-ink-400">{d.course} · {d.dueDate}</p>
            </div>
            <Badge tone={PRIORITY_TONE[d.priority]} className="shrink-0">{d.type}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}
