import React, { useState } from 'react'
import { GraduationCap, ArrowLeft, LogIn } from 'lucide-react'
import ThemeToggle from '../components/ui/ThemeToggle.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { DEMO_ACCOUNTS } from '../data/dummyData.js'

const ROLE_LABEL = { student: 'Student', faculty: 'Faculty', admin: 'Institutional Admin' }

export default function Login({ onLogin, onBack }) {
  const [role, setRole] = useState('student')
  const account = DEMO_ACCOUNTS.find((a) => a.role === role)
  const [email, setEmail] = useState(account.email)
  const [password, setPassword] = useState(account.password)

  const selectRole = (r) => {
    setRole(r)
    const acc = DEMO_ACCOUNTS.find((a) => a.role === r)
    setEmail(acc.email)
    setPassword(acc.password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(role)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-50 px-4 py-10 dark:bg-ink-950">
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md p-6 sm:p-8">
        <button onClick={onBack} className="mb-6 flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-600 dark:hover:text-ink-200">
          <ArrowLeft size={15} /> Back
        </button>

        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
            <GraduationCap size={19} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-ink-900 dark:text-white">SmartShiksha</p>
            <p className="text-xs text-ink-400">Prototype sign-in · dummy data only</p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-2 rounded-lg bg-ink-100 p-1 dark:bg-ink-800">
          {Object.keys(ROLE_LABEL).map((r) => (
            <button
              key={r}
              onClick={() => selectRole(r)}
              className={`rounded-md py-2 text-xs font-semibold transition-colors sm:text-sm ${
                role === r
                  ? 'bg-white text-brand-700 shadow-sm dark:bg-ink-900 dark:text-brand-300'
                  : 'text-ink-500 dark:text-ink-400'
              }`}
            >
              {ROLE_LABEL[r]}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink-600 dark:text-ink-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-800 focus:border-brand-400 focus:outline-none dark:border-ink-700 dark:bg-ink-800 dark:text-ink-100"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink-600 dark:text-ink-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-800 focus:border-brand-400 focus:outline-none dark:border-ink-700 dark:bg-ink-800 dark:text-ink-100"
            />
          </label>
          <Button type="submit" className="w-full">
            <LogIn size={15} /> Continue as {ROLE_LABEL[role]}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-ink-400">
          Demo credentials are pre-filled — just pick a role and continue.
        </p>
      </Card>
    </div>
  )
}
