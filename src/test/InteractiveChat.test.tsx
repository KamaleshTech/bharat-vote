import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import InteractiveChat from '../components/InteractiveChat'
import React from 'react'

// Mock the framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn()

describe('InteractiveChat', () => {
  it('renders welcome message', () => {
    render(<InteractiveChat />)
    expect(screen.getByRole('heading', { name: /Election Expert AI/i })).toBeInTheDocument()
    expect(screen.getByText(/Hello! I am your Election Expert AI/i)).toBeInTheDocument()
  })

  it('sends a predefined question', async () => {
    vi.useFakeTimers()
    render(<InteractiveChat />)
    
    const suggestedQuestion = screen.getByText(/How is the Prime Minister chosen\?/i)
    fireEvent.click(suggestedQuestion)
    
    // User message should appear
    expect(screen.getAllByText(/How is the Prime Minister chosen\?/i)).toHaveLength(2) // One in sidebar, one in chat
    
    // Wait for bot response
    await act(async () => {
      vi.advanceTimersByTime(1500)
    })
    
    expect(screen.getByText(/officially appoints this leader as the Prime Minister/i)).toBeInTheDocument()
    vi.useRealTimers()
  })
})
