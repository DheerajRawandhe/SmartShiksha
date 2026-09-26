import React from 'react'

export default function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`rounded-xl2 border border-ink-100 bg-white shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:shadow-softDark ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
