# SmartShiksha - React + Tailwind Prototype

SIH 2026 · Problem Statement 26207 · Theme: Smart Education (AICTE)

A role-based academic platform prototype: Student, Faculty and Institutional Admin
workspaces, built with React 18, Vite and Tailwind CSS, with full light/dark mode
and a fully responsive layout. All data in `src/data/dummyData.js` is illustrative
sample data for the demo.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL. Sign in with any of the three roles from the login
screen — demo credentials are pre-filled, no backend required.

## Build for production

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
├── main.jsx                # App bootstrap
├── App.jsx                 # Top-level view routing (landing / login / dashboards)
├── index.css                # Tailwind entry + base styles
├── context/
│   ├── ThemeContext.jsx     # Light/dark theme provider (persists to localStorage)
│   └── AuthContext.jsx      # Demo role-based auth provider
├── data/
│   └── dummyData.js         # All seed/dummy data for the prototype
├── components/
│   ├── ui/                  # Button, Card, Badge, ProgressBar, ThemeToggle
│   ├── layout/               # Sidebar, Topbar, DashboardLayout (shell)
│   ├── student/              # Overview, Courses, AI Study Buddy, Flashcards, Forum
│   ├── faculty/               # Overview, Gradebook, Exam Generator
│   └── admin/                 # Overview, Department Matrix, Compliance Export
└── pages/
    ├── Landing.jsx
    ├── Login.jsx
    ├── StudentDashboard.jsx
    ├── FacultyDashboard.jsx
    └── AdminDashboard.jsx
```

## Demo roles

| Role | Email | Password |
|---|---|---|
| Student | aarav.sharma@nitt.edu | demo123 |
| Faculty | v.raman@nitt.edu | demo123 |
| Admin | dean.academic@nitt.edu | demo123 |

## Notes

- The AI Study Buddy uses a small canned response engine (`generateReply` in
  `AIStudyBuddy.jsx`) so the prototype works fully offline. Swap it for a real
  LLM API call when you wire up a backend.
- Theme (light/dark) is stored in `localStorage` under `smartshiksha-theme` and
  applied before first paint (see the inline script in `index.html`) to avoid
  a flash of the wrong theme.
