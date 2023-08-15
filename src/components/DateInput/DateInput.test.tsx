import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { TEXT } from '@/constants'
import THEME from '@/constants/theme'

import DateInput from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Date Input', () => {
  it(`Check title on screen`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        stringDataError={isValidDate}
        changeDate={changeDate}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it(`Check invalid date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue(TEXT.INVALID_DATE)
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        stringDataError={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText(TEXT.INVALID_DATE)).toBeInTheDocument()
  })

  it(`Check valid date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue('')
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        stringDataError={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(screen.queryByText(TEXT.INVALID_DATE)).toEqual(null)
  })

  it(`Check change date`, async () => {
    const title = 'title'
    const isValidDate = jest.fn().mockReturnValue('')
    const changeDate = jest.fn()
    render(
      <DateInput
        title={title}
        stringDataError={isValidDate}
        changeDate={changeDate}
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(changeDate).toHaveBeenCalled()
  })
})
