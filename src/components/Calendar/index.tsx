import React, { useMemo } from 'react'

import CalendarHeader from '@/components/CalendarHeader'
import ErrorBoundary from '@/components/ErrorBoundary'
import GlobalThemeProvider from '@/components/GlobalThemeProvider'
import MonthBlock from '@/components/MonthBlock'
import SelectDataForm from '@/components/SelectDataForm'
import CalendarType from '@/constants/calendarType'
import MONTH_NAMES from '@/constants/months'
import useDatesRange from '@/hooks/useDatesRange'
import useService from '@/hooks/useService'
import createService from '@/services/createService'
import { Todo } from '@/services/types'
import getDayType from '@/utils/getDayType'
import getMonth from '@/utils/getMonth'

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

  const isNext = max ? service.getNextDate(new Date(currentDate)) < max : true

  const isPrev = min
    ? service.getPreviousDate(new Date(currentDate)) > min
    : true

  const isValidDate = (dateString: string) => {
    return service.isStringValidData(dateString)
  }
  return (
    <ErrorBoundary>
      <GlobalThemeProvider color={color}>
        <Container>
          <SelectDataForm
            changeCurrentDate={changeCurrentDate}
            changeFromDate={handleRangeStart}
            changeToDate={handleRangeEnd}
            isValidDate={isValidDate}
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
                  getDayTodos={getDayTodos}
                  isTodoListAvailable={todoList ?? false}
                  nextDisable={!isNext}
                  prevDisable={!isPrev}
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
