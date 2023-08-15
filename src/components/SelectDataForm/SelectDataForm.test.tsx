import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import THEME from '@/constants/theme'

import SelectDataForm from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Select Data Form', () => {
  it('Date input on screen', async () => {
    const stringDataError = jest.fn().mockReturnValue('')
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        stringDataError={stringDataError}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.getByText('Date')).toBeInTheDocument()
  })

  it('No from input on screen', async () => {
    const isValidDate = jest.fn().mockReturnValue('')
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        stringDataError={isValidDate}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.queryByText('From')).toEqual(null)
  })

  it('No to input on screen', async () => {
    const isValidDate = jest.fn().mockReturnValue('')
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        stringDataError={isValidDate}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.queryByText('To')).toEqual(null)
  })
})
