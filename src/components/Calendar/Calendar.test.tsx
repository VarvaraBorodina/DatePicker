import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import CalendarType from '@/constants/calendarType'
import MONTH_NAMES from '@/constants/months'
import THEME from '@/constants/theme'

import Calendar from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Calendar', () => {
  it(`Check year calendar header`, async () => {
    render(<Calendar type={CalendarType.year} />)

    const currentDate = new Date()
    expect(screen.getByText(currentDate.getFullYear())).toBeInTheDocument()
  })

  MONTH_NAMES.forEach((month) => {
    it(`Check ${month} om screen`, async () => {
      render(<Calendar type={CalendarType.year} />)

      const currentDate = new Date().getFullYear()
      expect(screen.getByText(`${month} ${currentDate}`)).toBeInTheDocument()
    })
  })

  it(`Check week calendar header`, async () => {
    render(<Calendar type={CalendarType.week} />)

    const currentDate = new Date()
    const month = MONTH_NAMES[currentDate.getMonth()]
    expect(
      screen.getByText(`${month} ${currentDate.getFullYear()}`)
    ).toBeInTheDocument()
  })

  it(`Check month calendar header`, async () => {
    render(<Calendar type={CalendarType.month} />)

    const currentDate = new Date()
    const month = MONTH_NAMES[currentDate.getMonth()]
    expect(
      screen.getByText(`${month} ${currentDate.getFullYear()}`)
    ).toBeInTheDocument()
  })

  it(`Get previous year`, async () => {
    render(<Calendar type={CalendarType.year} />)

    const currentDate = new Date()
    const prevButton = screen.getAllByRole('button')[3]
    fireEvent.click(prevButton)

    expect(screen.getByText(currentDate.getFullYear() - 1)).toBeInTheDocument()
  })

  it(`Get next year`, async () => {
    render(<Calendar type={CalendarType.year} />)

    const currentDate = new Date()
    const prevButton = screen.getAllByRole('button')[4]
    fireEvent.click(prevButton)

    expect(screen.getByText(currentDate.getFullYear() + 1)).toBeInTheDocument()
  })

  it(`Get previous month`, async () => {
    render(<Calendar type={CalendarType.month} />)

    const currentDate = new Date()
    const prevButton = screen.getAllByRole('button')[3]
    fireEvent.click(prevButton)

    expect(screen.getByText(currentDate.getMonth() + 1)).toBeInTheDocument()
  })

  it(`Get next month`, async () => {
    render(<Calendar type={CalendarType.month} />)

    const currentDate = new Date()
    const prevButton = screen.getAllByRole('button')[4]
    fireEvent.click(prevButton)

    expect(screen.getByText(currentDate.getMonth() - 1)).toBeInTheDocument()
  })
})
