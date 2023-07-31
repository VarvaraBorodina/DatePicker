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
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        isValidDate={isValidDate}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.getByText('Date')).toBeInTheDocument()
  })

  it('From input on screen', async () => {
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        isValidDate={isValidDate}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.getByText('From')).toBeInTheDocument()
  })

  it('To input on screen', async () => {
    const isValidDate = jest.fn().mockReturnValue(true)
    const changeCurrentDate = jest.fn()
    const changeFromDate = jest.fn()
    const changeToDate = jest.fn()

    render(
      <SelectDataForm
        isValidDate={isValidDate}
        changeCurrentDate={changeCurrentDate}
        changeFromDate={changeFromDate}
        changeToDate={changeToDate}
      />
    )

    expect(screen.getByText('To')).toBeInTheDocument()
  })
})
