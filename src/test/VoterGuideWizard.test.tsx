import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import VoterGuideWizard from '../components/VoterGuideWizard'
import React from 'react'

// Mock the framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('VoterGuideWizard', () => {
  it('renders the first step', () => {
    render(<VoterGuideWizard />)
    expect(screen.getByText(/Are you eligible to vote\?/i)).toBeInTheDocument()
  })

  it('navigates to the next step on button click', () => {
    render(<VoterGuideWizard />)
    const nextBtn = screen.getByLabelText(/Next step/i)
    fireEvent.click(nextBtn)
    expect(screen.getByText(/Registering as a Voter/i)).toBeInTheDocument()
  })

  it('navigates to specific step on circle click', () => {
    render(<VoterGuideWizard />)
    const step3Btn = screen.getByLabelText(/Step 3: Polling Day Guide/i)
    fireEvent.click(step3Btn)
    expect(screen.getByText(/What to do on Election Day/i)).toBeInTheDocument()
  })
})
