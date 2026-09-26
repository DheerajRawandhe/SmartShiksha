import React, { useState } from 'react'
import { RotateCcw, ThumbsDown, ThumbsUp, Layers } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { FLASHCARD_DECK } from '../../data/dummyData.js'

export default function Flashcards() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [reviewing, setReviewing] = useState(0)

  const card = FLASHCARD_DECK[index % FLASHCARD_DECK.length]
  const isLast = index === FLASHCARD_DECK.length - 1

  const next = (result) => {
    if (result === 'known') setKnown((k) => k + 1)
    if (result === 'again') setReviewing((r) => r + 1)
    setFlipped(false)
    setIndex((i) => (i + 1) % FLASHCARD_DECK.length)
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Active recall flashcards</h2>
        <span className="flex items-center gap-1.5 text-xs text-ink-400">
          <Layers size={14} /> Card {index + 1} of {FLASHCARD_DECK.length}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:max-w-sm">
        <Card className="p-3 text-center">
          <p className="font-display text-lg font-bold text-emerald-600 dark:text-emerald-400">{known}</p>
          <p className="text-[11px] text-ink-400">Known</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="font-display text-lg font-bold text-marigold-600 dark:text-marigold-400">{reviewing}</p>
          <p className="text-[11px] text-ink-400">Reviewing</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="font-display text-lg font-bold text-ink-700 dark:text-ink-200">{FLASHCARD_DECK.length - known - reviewing < 0 ? 0 : FLASHCARD_DECK.length}</p>
          <p className="text-[11px] text-ink-400">Deck size</p>
        </Card>
      </div>

      <div className="mx-auto max-w-xl">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="w-full text-left"
          style={{ perspective: '1200px' }}
        >
          <Card className="flex min-h-[220px] flex-col justify-between p-6 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <Badge tone="brand">{card.course}</Badge>
              <span className="text-xs text-ink-400">{flipped ? 'Answer' : 'Question'} · tap to flip</span>
            </div>
            <p className="my-6 font-display text-lg font-medium leading-snug text-ink-900 dark:text-white">
              {flipped ? card.back : card.front}
            </p>
            <div className="flex items-center gap-1 text-xs text-ink-400">
              <RotateCcw size={13} /> Box {card.box} of 5 · SM-2 schedule
            </div>
          </Card>
        </button>

        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => next('again')}
            className="flex items-center gap-2 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-ink-700 dark:text-ink-300"
          >
            <ThumbsDown size={15} /> Still learning
          </button>
          <button
            onClick={() => next('known')}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            <ThumbsUp size={15} /> Got it {isLast ? '· restart deck' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}
