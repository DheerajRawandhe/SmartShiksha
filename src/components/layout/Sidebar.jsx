import React from 'react'
import {
  LayoutGrid, BookOpen, MessageSquareText, Sparkles, Layers,
  Users, FileSpreadsheet, ClipboardList, BarChart3, ShieldCheck, Building2, X, GraduationCap
} from 'lucide-react'

const NAV_BY_ROLE = {
  student: [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'ai-buddy', label: 'AI Study Buddy', icon: Sparkles },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'forum', label: 'Doubt Forum', icon: MessageSquareText }
  ],
  faculty: [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'gradebook', label: 'Gradebook', icon: FileSpreadsheet },
    { id: 'exam-generator', label: 'Exam Generator', icon: ClipboardList },
    { id: 'forum', label: 'Doubt Forum', icon: MessageSquareText }
  ],
  admin: [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'departments', label: 'Departments', icon: Building2 },
    { id: 'compliance', label: 'NEP Compliance', icon: ShieldCheck },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ]
}

export default function Sidebar({ role, activeSection, onNavigate, open, onClose }) {
  const items = NAV_BY_ROLE[role] || []

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-ink-950/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-ink-100 bg-white transition-transform duration-200 dark:border-ink-800 dark:bg-ink-900 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="font-display text-base font-bold leading-none text-ink-900 dark:text-white">SmartShiksha</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-400">SIH 2026 · 26207</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2 scrollbar-thin">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'
                    : 'text-ink-600 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800'
                }`}
              >
                <Icon size={17} strokeWidth={isActive ? 2.4 : 2} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="border-t border-ink-100 px-5 py-4 dark:border-ink-800">
          <p className="text-xs text-ink-400">Prototype build · dummy data</p>
          <p className="text-xs text-ink-400">Theme: Smart Education</p>
        </div>
      </aside>
    </>
  )
}
