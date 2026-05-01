import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import QuizEngine from '../components/QuizEngine'
import React from 'react'

// Mock the framer-motion to avoid issues in test environment
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('QuizEngine', () => {
  it('renders the first question', () => {
    render(<QuizEngine />)
    expect(screen.getByText(/Question 1 of/i)).toBeInTheDocument()
  })

  it('selects an option and shows results', async () => {
    render(<QuizEngine />)
    
    // Find first option and click it
    const options = screen.getAllByRole('button')
    fireEvent.click(options[0])
    
    // Check if explanation appears
    expect(screen.getByText(/Explanation:/i)).toBeInTheDocument()
  })
})
