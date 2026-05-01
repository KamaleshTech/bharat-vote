import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import VoterFeedback from '../components/VoterFeedback'
import React from 'react'

// Mock Firebase
vi.mock('../lib/firebase', () => ({
  db: {},
}))

// Mock Firestore
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve()),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    form: ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => <form {...props}>{children}</form>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('VoterFeedback', () => {
  it('renders the feedback form', () => {
    render(<VoterFeedback />)
    expect(screen.getByText(/Help Us Improve/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Tell us what you think/i)).toBeInTheDocument()
  })

  it('updates textarea on change', () => {
    render(<VoterFeedback />)
    const textarea = screen.getByPlaceholderText(/Tell us what you think/i)
    fireEvent.change(textarea, { target: { value: 'Great project!' } })
    expect((textarea as HTMLTextAreaElement).value).toBe('Great project!')
  })
})
