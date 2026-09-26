import React from 'react'
import { CheckCircle2, Loader, Download } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import { COMPLIANCE_ITEMS, ADMIN_STATS } from '../../data/dummyData.js'

export default function ComplianceExport() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">NEP 2020 & AICTE compliance</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="flex flex-col items-center justify-center p-6 text-center lg:col-span-1">
          <p className="font-display text-4xl font-extrabold text-brand-600 dark:text-brand-300">
            {ADMIN_STATS.nepComplianceScore}%
          </p>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Overall compliance score</p>
          <Button className="mt-5 w-full">
            <Download size={15} /> Export dossier (PDF)
          </Button>
        </Card>

        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-display text-sm font-semibold text-ink-900 dark:text-white">Checklist status</h3>
          <ul className="space-y-3">
            {COMPLIANCE_ITEMS.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 border-b border-ink-100 pb-3 last:border-0 dark:border-ink-800">
                <span className="text-sm text-ink-700 dark:text-ink-200">{item.label}</span>
                {item.status === 'complete' ? (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={15} /> Complete
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-marigold-600 dark:text-marigold-400">
                    <Loader size={15} /> In progress
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
