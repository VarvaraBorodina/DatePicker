import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import THEME from '@/constants/theme'

import DateInput from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Days Names', () => {
  it(`Check title on screen`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        isValidDate={isValidDate}
        changeDate={changeDate}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it(`Check invalid date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(false)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        isValidDate={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText('Invalid Date')).toBeInTheDocument()
  })

  it(`Check valid date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        isValidDate={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(screen.queryByText('Invalid Date')).toEqual(null)
  })

  it(`Check change date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        isValidDate={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(changeDate).toHaveBeenCalled()
  })
})
