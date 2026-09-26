import React, { useState } from 'react'
import { Wand2, Download, FileText } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import { EXAM_BLOOM_LEVELS, COURSES_DATA } from '../../data/dummyData.js'

const SAMPLE_QUESTIONS = [
  { q: 'Define the term "shortest path" in a weighted graph.', level: 'Remember', marks: 2 },
  { q: "Explain why Dijkstra's Algorithm fails on graphs with negative edge weights.", level: 'Understand', marks: 3 },
  { q: 'Apply Dijkstra to find shortest paths from vertex A in the given graph.', level: 'Apply', marks: 5 },
  { q: "Analyze the time complexity trade-offs between Dijkstra's algorithm using an array vs a binary min-heap.", level: 'Analyze', marks: 7.5 }
]

export default function ExamGenerator() {
  const [course, setCourse] = useState(COURSES_DATA[0].code)
  const [generated, setGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const totalMarks = EXAM_BLOOM_LEVELS.reduce((sum, l) => sum + l.marks, 0)

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 900)
  }

  return (
    <div className="space-y-6">
      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">AI examination paper generator</h2>

      <Card className="p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink-600 dark:text-ink-300">Course</span>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-800 focus:border-brand-400 focus:outline-none dark:border-ink-700 dark:bg-ink-800 dark:text-ink-100"
            >
              {COURSES_DATA.map((c) => (
                <option key={c.id} value={c.code}>{c.code} — {c.title}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink-600 dark:text-ink-300">Unit</span>
            <select className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-800 focus:border-brand-400 focus:outline-none dark:border-ink-700 dark:bg-ink-800 dark:text-ink-100">
              <option>Unit 3: Graph Algorithms</option>
              <option>Unit 2: Trees & BSTs</option>
              <option>Unit 1: Arrays, Stacks & Queues</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-ink-600 dark:text-ink-300">Marking scheme</span>
            <select className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-ink-800 focus:border-brand-400 focus:outline-none dark:border-ink-700 dark:bg-ink-800 dark:text-ink-100">
              <option>AICTE 50-mark internal</option>
              <option>NEP 2020 outcome-based</option>
            </select>
          </label>
        </div>
        <Button onClick={handleGenerate} disabled={loading} className="mt-4 w-full sm:w-auto">
          <Wand2 size={15} /> {loading ? 'Generating…' : 'Generate paper'}
        </Button>
      </Card>

      {generated && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="p-5 lg:col-span-1">
            <h3 className="mb-3 font-display text-sm font-semibold text-ink-900 dark:text-white">Bloom's taxonomy mapping</h3>
            <ul className="space-y-2.5 text-sm">
              {EXAM_BLOOM_LEVELS.map((l) => (
                <li key={l.level} className="flex items-center justify-between">
                  <span className="text-ink-600 dark:text-ink-300">{l.level}</span>
                  <span className="text-ink-800 dark:text-ink-100">{l.questions} Qs · {l.marks} marks</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3 text-sm font-semibold dark:border-ink-800">
              <span>Total</span>
              <span>{totalMarks} marks</span>
            </div>
          </Card>

          <Card className="p-5 lg:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-ink-900 dark:text-white">
                <FileText size={15} /> {course} — Sample paper preview
              </h3>
              <button className="flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:underline dark:text-brand-300">
                <Download size={13} /> Export PDF
              </button>
            </div>
            <ol className="space-y-3 text-sm text-ink-700 dark:text-ink-200">
              {SAMPLE_QUESTIONS.map((s, i) => (
                <li key={i} className="flex items-start justify-between gap-3 border-b border-ink-100 pb-3 last:border-0 dark:border-ink-800">
                  <span><span className="font-medium">Q{i + 1}.</span> {s.q} <span className="text-ink-400">({s.level})</span></span>
                  <span className="shrink-0 text-xs text-ink-400">[{s.marks} marks]</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      )}
    </div>
  )
}
