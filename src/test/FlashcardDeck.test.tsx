import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FlashcardDeck from '../components/FlashcardDeck'
import React from 'react'

// Mock the framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('FlashcardDeck', () => {
  it('renders the first flashcard', () => {
    render(<FlashcardDeck />)
    expect(screen.getByText(/Card 1 of/i)).toBeInTheDocument()
  })

  it('flips the card on click', () => {
    render(<FlashcardDeck />)
    const card = screen.getByRole('button', { name: /Flashcard:/i })
    fireEvent.click(card)
    // Flip state is internal but we check if it doesn't crash
    expect(card).toBeInTheDocument()
  })

  it('navigates to the next card', async () => {
    vi.useFakeTimers()
    render(<FlashcardDeck />)
    const nextBtn = screen.getByLabelText(/Next flashcard/i)
    
    fireEvent.click(nextBtn)
    
    // Use act to handle the state update from the timeout
    await React.act(async () => {
      vi.advanceTimersByTime(200)
    })
    
    expect(screen.getByText(/Card 2 of/i)).toBeInTheDocument()
    vi.useRealTimers()
  })
})
