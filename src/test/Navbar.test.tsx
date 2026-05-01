import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import React from 'react'

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Bharat/i)).toBeInTheDocument()
    expect(screen.getByText(/Vote/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText(/Journey/i)).toBeInTheDocument()
    expect(screen.getByText(/Flashcards/i)).toBeInTheDocument()
    expect(screen.getByText(/Quiz/i)).toBeInTheDocument()
  })
})
