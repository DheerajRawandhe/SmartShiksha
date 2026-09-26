import React from 'react'
import {
  GraduationCap, ArrowRight, PlayCircle, Sparkles, Plus, CheckCircle2,
  Layers, MessageSquareText, ClipboardList, ShieldCheck, TriangleAlert, Flame
} from 'lucide-react'
import ThemeToggle from '../components/ui/ThemeToggle.jsx'
import Button from '../components/ui/Button.jsx'
import {
  PLATFORM_HIGHLIGHTS, STUDENT_PROFILE, WEEKLY_STUDY_TREND, LANDING_ACTIVITY_FEED
} from '../data/dummyData.js'

const HIGHLIGHT_ICONS = [Sparkles, Layers, MessageSquareText, ClipboardList, ShieldCheck, TriangleAlert]

const ACTIVITY_DOT = {
  success: 'bg-emerald-500',
  brand: 'bg-brand-400',
  amber: 'bg-marigold-400'
}

const NAV_LINKS = ['Features', 'Roles', 'Compliance']

function Sparkline({ data }) {
  const w = 280
  const h = 72
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = w / (data.length - 1)
  const points = data.map((v, i) => {
    const x = i * step
    const y = h - ((v - min) / range) * (h - 10) - 5
    return `${x},${y}`
  })
  const linePath = `M${points.join(' L')}`
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparkFill)" />
      <path d={linePath} fill="none" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => {
        const [x, y] = p.split(',')
        return i === points.length - 1 ? (
          <circle key={i} cx={x} cy={y} r="4" fill="#818CF8" stroke="white" strokeWidth="1.5" />
        ) : null
      })}
    </svg>
  )
}

export default function Landing({ onGetStarted }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-ink-900 dark:bg-ink-950 dark:text-white">
      {/* Ambient glow background, hero-scoped */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand-400/20 blur-[110px] dark:bg-brand-500/30" />
          <div className="absolute -top-20 right-0 h-[360px] w-[360px] rounded-full bg-marigold-300/20 blur-[110px] dark:bg-marigold-500/20" />
        </div>

        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
              <GraduationCap size={18} />
            </span>
            <span className="font-display text-lg font-bold">SmartShiksha</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-500 dark:text-ink-300 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#features" className="transition-colors hover:text-ink-900 dark:hover:text-white">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onGetStarted}
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 sm:px-5"
            >
              Get started
            </button>
          </div>
        </header>

        <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
              <Sparkles size={13} className="text-marigold-500" /> SIH 2026 · PS 26207 · Smart Education
            </span>

            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Learning that keeps up with{' '}
              <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-marigold-500 bg-clip-text text-transparent">
                every student
              </span>
              .
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              One workspace for a 24/7 AI study buddy, spaced-repetition revision, classroom doubt-solving and
              faculty tools — so effective learning fits into a real student's day.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={onGetStarted} className="rounded-full px-6 py-3 sm:w-auto">
                Explore the prototype <ArrowRight size={16} />
              </Button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:bg-ink-50 dark:border-white/15 dark:text-ink-100 dark:hover:bg-white/5"
              >
                <PlayCircle size={17} /> See how it works
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-ink-100 pt-6 dark:border-white/10">
              {[
                ['1,420+', 'students onboard'],
                ['94', 'faculty workspaces'],
                ['96%', 'NEP compliance']
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold">{value}</p>
                  <p className="text-xs text-ink-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live dashboard mockup, browser-chrome style */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl shadow-ink-900/10 dark:border-white/10 dark:bg-ink-900 dark:shadow-black/50">
              <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-marigold-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] text-ink-400 dark:bg-ink-800 dark:text-ink-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> smartshiksha.app
                </span>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-ink-400">Overview</p>
                    <p className="mt-0.5 font-display text-base font-semibold">Good Morning, Dheeraj 👋</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-semibold text-white">
                    <Plus size={12} /> New session
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-ink-50 p-3 dark:bg-white/5">
                    <p className="text-[11px] text-ink-400">CGPA</p>
                    <p className="font-display text-lg font-bold">{STUDENT_PROFILE.cgpa}</p>
                  </div>
                  <div className="rounded-xl bg-ink-50 p-3 dark:bg-white/5">
                    <p className="text-[11px] text-ink-400">Attendance</p>
                    <p className="font-display text-lg font-bold">{STUDENT_PROFILE.attendance}%</p>
                  </div>
                  <div className="rounded-xl bg-ink-50 p-3 dark:bg-white/5">
                    <p className="text-[11px] text-ink-400">Streak</p>
                    <p className="flex items-center gap-1 font-display text-lg font-bold">
                      {STUDENT_PROFILE.dailyStreak} <Flame size={14} className="text-marigold-500" />
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-ink-100 p-4 dark:border-white/10">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="text-xs font-semibold text-ink-600 dark:text-ink-200">Study hours · this week</p>
                    <span className="text-[11px] text-emerald-500">▲ 21%</span>
                  </div>
                  <Sparkline data={WEEKLY_STUDY_TREND} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold text-ink-600 dark:text-ink-200">Activity</p>
                  <ul className="space-y-2.5">
                    {LANDING_ACTIVITY_FEED.map((a) => (
                      <li key={a.id} className="flex items-start gap-2.5 text-xs">
                        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${ACTIVITY_DOT[a.tone]}`} />
                        <div className="min-w-0">
                          <p className="font-medium text-ink-700 dark:text-ink-100">{a.label}</p>
                          <p className="text-ink-400">{a.detail} · {a.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-ink-900 sm:flex">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="text-xs font-medium text-ink-600 dark:text-ink-200">Doubt verified by faculty</span>
            </div>
          </div>
        </section>
      </div>

      {/* Feature grid */}
      <section id="features" className="border-t border-ink-100 bg-ink-50 py-16 dark:border-white/10 dark:bg-white/[0.03] sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
            Everything in one place
          </span>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-bold sm:text-3xl">
            Built for the whole campus
          </h2>
          <p className="mt-2 max-w-xl text-ink-500 dark:text-ink-400">
            Three role-based workspaces, one shared source of truth for progress, doubts and compliance.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_HIGHLIGHTS.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i] || Sparkles
              return (
                <div
                  key={h.title}
                  className="rounded-xl2 border border-ink-100 bg-white p-5 transition-shadow hover:shadow-soft dark:border-white/10 dark:bg-ink-900"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-8 text-center text-xs text-ink-400 sm:px-8">
        Prototype for Smart India Hackathon 2026 · Problem Statement 26207 · Built with React &amp; Tailwind CSS
      </footer>
    </div>
  )
}
