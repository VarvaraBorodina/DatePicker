import React, { useMemo } from 'react'
import GlobalThemProvider from '../GlobalThemeProvider'
import { CalendarContainer, Container, Year } from './styled'
import TodoList from '../TodoList'
import CalendarProps from './types'
import createService from '../../services/createService'
import CalendarHeader from '../CalendarHeader'
import MONTH_NAMES from '../../constants/months'
import getDayType from '../../utils/getDayType'
import CalendarType from '../../constants/calendarType'
import SelectDataForm from '../SelectDataForm'
import getMonth from '../../utils/getMonth'
import useService from '../../hooks/useService'
import MonthBlock from '../MonthBlock'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { color, type } = props
  const service = useMemo(() => createService(props), [props])

  const [currentDate, monthesDates, handleNextRange, handlePreviousRange] =
    useService(service)

  const getDayTypeForCurrentCalendarType =
    (monthDates: Date[]) => (date: Date) => {
      return getDayType(
        date,
        currentDate,
        type === CalendarType.year
          ? getMonth(monthDates)
          : currentDate.getMonth(),
        service
      )
    }

  return (
    <GlobalThemProvider color={color}>
      <Container>
        <SelectDataForm />
        <CalendarContainer>
          {type === CalendarType.year && (
            <CalendarHeader
              title={currentDate.getFullYear().toString()}
              onPrevious={handlePreviousRange}
              onNext={handleNextRange}
              withArrows={type === CalendarType.year}
            />
          )}
          <Year>
            {monthesDates.map((monthDates, index) => (
              <MonthBlock
                key={MONTH_NAMES[index]}
                title={`${
                  MONTH_NAMES[getMonth(monthDates)]
                } ${currentDate.getFullYear()}`}
                blockDates={monthDates}
                handleNextRange={handleNextRange}
                handlePrevRange={handlePreviousRange}
                getDayType={getDayTypeForCurrentCalendarType(monthDates)}
                type={type ?? CalendarType.month}
                firstDayOfWeek={service.firstDayOfWeek}
                daysWithTodos={service.getDaysWithTodoFromLocalStorage()}
              />
            ))}
          </Year>
        </CalendarContainer>
        <TodoList />
      </Container>
    </GlobalThemProvider>
  )
}

export default Calendar
