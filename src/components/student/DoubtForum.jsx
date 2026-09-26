import React, { useState } from 'react'
import { ArrowBigUp, MessageCircle, ShieldCheck, Plus } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { DISCUSSION_FORUM_POSTS } from '../../data/dummyData.js'

export default function DoubtForum() {
  const [posts, setPosts] = useState(DISCUSSION_FORUM_POSTS)

  const upvote = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p)))
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Classroom doubt forum</h2>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 sm:w-auto">
          <Plus size={15} /> Ask a doubt
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-5">
            <div className="flex items-start gap-4">
              <button
                onClick={() => upvote(post.id)}
                className="flex flex-col items-center gap-0.5 rounded-lg border border-ink-200 px-2.5 py-2 text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:text-ink-400"
              >
                <ArrowBigUp size={16} />
                <span className="text-xs font-semibold">{post.upvotes}</span>
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
                  <Badge tone="brand">{post.course}</Badge>
                  <span>{post.author} · {post.roll}</span>
                  <span>· {post.time}</span>
                </div>
                <h3 className="mt-2 font-display text-sm font-semibold text-ink-900 dark:text-white sm:text-base">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">{post.body}</p>

                {post.facultyVerified && post.verifiedAnswer && (
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0" />
                    <p><span className="font-semibold">Faculty verified: </span>{post.verifiedAnswer}</p>
                  </div>
                )}

                <button className="mt-3 flex items-center gap-1.5 text-xs font-medium text-ink-500 hover:text-brand-600 dark:text-ink-400">
                  <MessageCircle size={14} /> {post.repliesCount} replies
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
