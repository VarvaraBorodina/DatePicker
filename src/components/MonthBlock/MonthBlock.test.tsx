import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CalendarType, FirstDayOfWeek } from '@/constants'
import THEME from '@/constants/theme'
import { DefaultService } from '@/services'

import MonthBlock from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Month Block', () => {
  it('Check title on screen', async () => {
    const title = 'title'
    const service = new DefaultService()
    const blockDates = service.getCurrentDateRange(service.getCurrentDate())[0]
    const handleNextRange = jest.fn()
    const handlePrevRange = jest.fn()
    const getDayType = jest.fn()
    const type = CalendarType.month
    const firstDayOfWeek = FirstDayOfWeek.monday
    const isTodoListAvailable = false
    const getDayTodos = jest.fn().mockReturnValue([])
    const saveDayTodo = jest.fn()
    const deleteDayTodo = jest.fn()
    const isDayInRange = jest.fn().mockRejectedValue(true)
    const nextDisable = false
    const prevDisable = false

    render(
      <MonthBlock
        title={title}
        blockDates={blockDates}
        handleNextRange={handleNextRange}
        handlePrevRange={handlePrevRange}
        getDayType={getDayType}
        type={type}
        firstDayOfWeek={firstDayOfWeek}
        isTodoListAvailable={isTodoListAvailable}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
        getDayTodos={getDayTodos}
        saveDayTodo={saveDayTodo}
        deleteDayTodo={deleteDayTodo}
        isDayInRange={isDayInRange}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('Every date on screen', async () => {
    const title = 'title'
    const service = new DefaultService()
    const blockDates = service.getCurrentDateRange(service.getCurrentDate())[0]
    const handleNextRange = jest.fn()
    const handlePrevRange = jest.fn()
    const getDayType = jest.fn()
    const type = CalendarType.month
    const firstDayOfWeek = FirstDayOfWeek.monday
    const isTodoListAvailable = false
    const getDayTodos = jest.fn().mockReturnValue([])
    const saveDayTodo = jest.fn()
    const deleteDayTodo = jest.fn()
    const isDayInRange = jest.fn().mockRejectedValue(true)
    const nextDisable = false
    const prevDisable = false

    render(
      <MonthBlock
        title={title}
        blockDates={blockDates}
        handleNextRange={handleNextRange}
        handlePrevRange={handlePrevRange}
        getDayType={getDayType}
        type={type}
        firstDayOfWeek={firstDayOfWeek}
        isTodoListAvailable={isTodoListAvailable}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
        getDayTodos={getDayTodos}
        saveDayTodo={saveDayTodo}
        deleteDayTodo={deleteDayTodo}
        isDayInRange={isDayInRange}
      />
    )

    blockDates.forEach((date) => {
      expect(screen.getByText(date.getDate())).toBeInTheDocument()
    })
  })
  it('Todo does not appear if it is disabled', async () => {
    const title = 'title'
    const service = new DefaultService()
    const blockDates = service.getCurrentDateRange(service.getCurrentDate())[0]
    const handleNextRange = jest.fn()
    const handlePrevRange = jest.fn()
    const getDayType = jest.fn()
    const type = CalendarType.month
    const firstDayOfWeek = FirstDayOfWeek.monday
    const isTodoListAvailable = false
    const getDayTodos = jest.fn().mockReturnValue([])
    const saveDayTodo = jest.fn()
    const deleteDayTodo = jest.fn()
    const isDayInRange = jest.fn().mockRejectedValue(true)
    const nextDisable = false
    const prevDisable = false

    render(
      <MonthBlock
        title={title}
        blockDates={blockDates}
        handleNextRange={handleNextRange}
        handlePrevRange={handlePrevRange}
        getDayType={getDayType}
        type={type}
        firstDayOfWeek={firstDayOfWeek}
        isTodoListAvailable={isTodoListAvailable}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
        getDayTodos={getDayTodos}
        saveDayTodo={saveDayTodo}
        deleteDayTodo={deleteDayTodo}
        isDayInRange={isDayInRange}
      />
    )

    fireEvent.click(screen.getByText(blockDates[0].getDate()))
    expect(screen.queryByText(blockDates[0].toDateString())).toEqual(null)
  })
})
