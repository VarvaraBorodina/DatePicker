import React, { useMemo } from 'react'

import CalendarHeader from '@/components/CalendarHeader'
import ErrorBoundary from '@/components/ErrorBoundary'
import GlobalThemeProvider from '@/components/GlobalThemeProvider'
import MonthBlock from '@/components/MonthBlock'
import SelectDataForm from '@/components/SelectDataForm'
import { CalendarType, MONTH_NAMES } from '@/constants'
import { useDatesRange, useService } from '@/hooks'
import { createService, Todo } from '@/services'
import { getDayType, getMonth } from '@/utils'

import { CalendarContainer, Container, Year } from './styled'
import CalendarProps from './types'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { color, type, todoList, min, max } = props

  const service = useMemo(() => createService(props), [props])
  const [rangeStart, rangeEnd, handleRangeStart, handleRangeEnd] =
    useDatesRange(service)
  const [
    currentDate,
    monthesDates,
    handleNextRange,
    handlePreviousRange,
    changeCurrentDate,
  ] = useService(service)

  const getDayTypeForCurrentCalendarType =
    (monthDates: Date[]) => (date: Date) => {
      const month =
        type === CalendarType.year
          ? getMonth(monthDates, currentDate)
          : currentDate.getMonth()

      return getDayType(date, currentDate, rangeStart, rangeEnd, month, service)
    }

  const getDayTodos = (day: Date) => service.getDayTodoFromLocalStorage(day)

  const saveDayTodo = (day: Date, todo: Todo) => {
    service.setDayTodoToLocalStorage(day.toDateString(), todo)
  }

  const deleteDayTodo = (day: Date, id: number) =>
    service.deleteDayTodoFromLocalStorage(day, id)

  const isNext =
    max && monthesDates.length
      ? monthesDates[monthesDates.length - 1][1] < max
      : true

  const isPrev = min && monthesDates.length ? monthesDates[0][0] > min : true

  const stringDataError = (dateString: string): string => {
    return service.stringDataError(dateString)
  }

  const isInDayRange = (date: Date) => {
    if ((max && date > max) || (min && date < min)) {
      return false
    }
    return true
  }
  return (
    <ErrorBoundary>
      <GlobalThemeProvider color={color}>
        <Container>
          <SelectDataForm
            changeCurrentDate={changeCurrentDate}
            changeFromDate={handleRangeStart}
            changeToDate={handleRangeEnd}
            stringDataError={stringDataError}
          />
          <CalendarContainer>
            {type === CalendarType.year && (
              <CalendarHeader
                title={currentDate.getFullYear().toString()}
                onPrevious={handlePreviousRange}
                onNext={handleNextRange}
                withArrows={type === CalendarType.year}
                nextDisable={!isNext}
                prevDisable={!isPrev}
              />
            )}
            <Year>
              {monthesDates.map((monthDates: Date[], index: number) => (
                <MonthBlock
                  key={MONTH_NAMES[index]}
                  title={`${
                    MONTH_NAMES[getMonth(monthDates, currentDate)]
                  } ${currentDate.getFullYear()}`}
                  blockDates={monthDates}
                  handleNextRange={handleNextRange}
                  handlePrevRange={handlePreviousRange}
                  getDayType={getDayTypeForCurrentCalendarType(monthDates)}
                  type={type ?? CalendarType.month}
                  firstDayOfWeek={service.firstDayOfWeek}
                  saveDayTodo={saveDayTodo}
                  deleteDayTodo={deleteDayTodo}
                  getDayTodos={getDayTodos}
                  isTodoListAvailable={todoList ?? false}
                  nextDisable={!isNext}
                  prevDisable={!isPrev}
                  isDayInRange={isInDayRange}
                />
              ))}
            </Year>
          </CalendarContainer>
        </Container>
      </GlobalThemeProvider>
    </ErrorBoundary>
  )
}

export default Calendar
