import React from 'react'
import Card from '../ui/Card.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import { DEPARTMENT_PERFORMANCE } from '../../data/dummyData.js'

export default function DepartmentMatrix() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Departmental performance matrix</h2>
      <Card className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-xs uppercase tracking-wide text-ink-400 dark:border-ink-800">
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">Students</th>
              <th className="px-5 py-3 font-medium">Avg. CGPA</th>
              <th className="px-5 py-3 font-medium">Attendance</th>
              <th className="px-5 py-3 font-medium">Placement rate</th>
            </tr>
          </thead>
          <tbody>
            {DEPARTMENT_PERFORMANCE.map((d) => (
              <tr key={d.dept} className="border-b border-ink-100 last:border-0 dark:border-ink-800">
                <td className="whitespace-nowrap px-5 py-3.5 font-medium text-ink-900 dark:text-white">{d.dept}</td>
                <td className="whitespace-nowrap px-5 py-3.5 text-ink-600 dark:text-ink-300">{d.students}</td>
                <td className="whitespace-nowrap px-5 py-3.5 text-ink-600 dark:text-ink-300">{d.avgCgpa}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-24"><ProgressBar value={d.attendance} color="#0EA5E9" height="h-1.5" /></div>
                    <span className="text-xs text-ink-500 dark:text-ink-400">{d.attendance}%</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-24"><ProgressBar value={d.placementRate} color="#16A34A" height="h-1.5" /></div>
                    <span className="text-xs text-ink-500 dark:text-ink-400">{d.placementRate}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
