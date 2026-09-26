import React, { useState } from 'react'
import { Menu, Search, Bell, LogOut, ChevronDown } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle.jsx'

export default function Topbar({ user, onMenuClick, onLogout, sectionTitle }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink-100 bg-white/80 px-4 py-3 backdrop-blur dark:border-ink-800 dark:bg-ink-900/80 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 text-ink-500 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-display text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
          {sectionTitle}
        </h1>
      </div>

      <div className="hidden flex-1 max-w-md items-center gap-2 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-400 dark:border-ink-700 dark:bg-ink-800 md:flex">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search courses, topics, students…"
          className="w-full bg-transparent text-ink-700 placeholder:text-ink-400 focus:outline-none dark:text-ink-100"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          className="relative hidden rounded-full p-2 text-ink-500 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 sm:inline-flex"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-marigold-500" />
        </button>

        <ThemeToggle />

        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-ink-200 py-1 pl-1 pr-2 hover:bg-ink-50 dark:border-ink-700 dark:hover:bg-ink-800"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
              {user?.avatarInitials || '??'}
            </span>
            <ChevronDown size={14} className="hidden text-ink-400 sm:block" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-lg border border-ink-100 bg-white shadow-soft dark:border-ink-800 dark:bg-ink-900">
              <div className="border-b border-ink-100 px-4 py-3 dark:border-ink-800">
                <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">{user?.name}</p>
                <p className="truncate text-xs text-ink-400">{user?.title}</p>
              </div>
              <button
                onClick={onLogout}
                className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10"
              >
                <LogOut size={15} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
