import React, { useRef, useState, useEffect } from 'react'
import { Sparkles, Send, Bot, User } from 'lucide-react'
import Card from '../ui/Card.jsx'
import { AI_TUTOR_SUGGESTIONS, AI_TUTOR_SEED_MESSAGES } from '../../data/dummyData.js'

// A small canned "AI engine" so the prototype feels alive without a real backend/API key.
function generateReply(prompt) {
  const p = prompt.toLowerCase()
  if (p.includes('dijkstra')) {
    return "Think of Dijkstra like exploring a city with a fuel gauge: from your start, you always drive next to whichever unvisited junction currently needs the least fuel to reach. Once you arrive, that junction's fuel cost is locked in forever — because every other route there would only cost more. Repeat until every reachable junction is locked in."
  }
  if (p.includes('bfs') || p.includes('breadth')) {
    return "Here's a C++ BFS template:\n\nvoid bfs(int src, vector<vector<int>>& adj, vector<bool>& visited) {\n  queue<int> q;\n  q.push(src);\n  visited[src] = true;\n  while (!q.empty()) {\n    int u = q.front(); q.pop();\n    for (int v : adj[u]) {\n      if (!visited[v]) { visited[v] = true; q.push(v); }\n    }\n  }\n}"
  }
  if (p.includes('bcnf')) {
    return "Quick BCNF quiz: For relation R(A,B,C) with functional dependency B → C, is R in BCNF if B is not a candidate key? (Answer: No — every determinant must be a candidate key in BCNF, so this FD violates it.)"
  }
  if (p.includes('deadlock')) {
    return "Deadlock prevention attacks one of the four necessary conditions: deny mutual exclusion (where possible), deny hold-and-wait (request all resources upfront), allow preemption, or impose a strict resource ordering to break circular wait."
  }
  return "Good question — here's a quick way to think about it: break the concept into the smallest sub-problem you already understand, solve that, then check what changes when you scale it up. Want a worked example from one of your courses?"
}

export default function AIStudyBuddy() {
  const [messages, setMessages] = useState(AI_TUTOR_SEED_MESSAGES)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const content = (text ?? input).trim()
    if (!content) return
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'user', text: content }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'assistant', text: generateReply(content) }])
      setTyping(false)
    }, 700)
  }

  return (
    <Card className="flex h-[600px] flex-col p-0">
      <div className="flex items-center gap-2 border-b border-ink-100 px-5 py-4 dark:border-ink-800">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
          <Sparkles size={16} />
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">AI Study Buddy</p>
          <p className="text-xs text-ink-400">Simulated for this prototype · no real API call</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4 scrollbar-thin">
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                m.role === 'user' ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900' : 'bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300'
              }`}
            >
              {m.role === 'user' ? <User size={13} /> : <Bot size={13} />}
            </span>
            <div
              className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${
                m.role === 'user'
                  ? 'rounded-tr-sm bg-brand-500 text-white'
                  : 'rounded-tl-sm bg-ink-100 text-ink-800 dark:bg-ink-800 dark:text-ink-100'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <Bot size={13} /> Thinking…
          </div>
        )}
      </div>

      <div className="border-t border-ink-100 p-4 dark:border-ink-800">
        <div className="mb-3 flex flex-wrap gap-2">
          {AI_TUTOR_SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-ink-200 px-3 py-1.5 text-xs text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:text-ink-400 dark:hover:border-brand-500 dark:hover:text-brand-300"
            >
              {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); send() }}
          className="flex items-center gap-2 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 dark:border-ink-700 dark:bg-ink-800"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about any concept, code, or exam topic…"
            className="flex-1 bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none dark:text-ink-100"
          />
          <button
            type="submit"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </Card>
  )
}
