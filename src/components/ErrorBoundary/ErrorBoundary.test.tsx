import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import TEXT from '@/constants/text'

import ErrorBoundary from '.'

describe('Error Boundary', () => {
  test('Error Boundary catch error', () => {
    const ThrowError = () => {
      throw new Error('Test')
    }
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )
    expect(screen.getByText(TEXT.ERROR_TEXT)).toBeVisible()
  })
})
