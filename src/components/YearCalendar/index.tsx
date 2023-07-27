import React from 'react'
import DAYS_OF_WEEK from '../../constants/dayOfWeek'
import FirstDayOfWeek from '../../constants/firstDayOfWeek'
import MONTH_NAMES from '../../constants/months'
import WeekendsDecorator from '../../services/decorators/WeekendsDecorator'
import YearCalendarDecorator from '../../services/decorators/YearCalendarDecorator'
import DefaultService from '../../services/DefaultService'
import getDayType from '../../utils/getDayType'
import MonthHeader from '../MonthHeader'
import {
  Container,
  Dates,
  Day,
  Month,
  DayName,
  DaysNames,
  CalendarContainer,
} from './styled'

const YearCalendar = () => {
  const service = new YearCalendarDecorator(
    new WeekendsDecorator(new DefaultService())
  )
  const currentDate = service.getCurrentDate()
  const ranges = service.getCurrentDateRange(currentDate)

  const monthesDates = ranges.map((range) => {
    const monthDates = []
    for (let i = range[0]; i <= range[1]; i.setDate(i.getDate() + 1)) {
      const dateForArray = new Date(i)
      monthDates.push(dateForArray)
    }
    return monthDates
  })

  const getFirstDayOfMonth = (monthDates: Date[]): Date => {
    let i = 0
    while (monthDates[i].getDate() !== 1) {
      i += 1
    }
    return monthDates[i]
  }

  return (
    <CalendarContainer>
      <MonthHeader
        title={currentDate.getFullYear().toString()}
        firstDayOfWeek={FirstDayOfWeek.monday}
        withArrows
      />
      <Container>
        {monthesDates.map((monthDates) => (
          <Month key={`${monthDates[0].getMonth()} ${monthDates[0].getDate()}`}>
            <MonthHeader
              title={MONTH_NAMES[getFirstDayOfMonth(monthDates).getMonth()]}
              firstDayOfWeek={FirstDayOfWeek.monday}
              withArrows={false}
            />
            <DaysNames>
              {DAYS_OF_WEEK.map((day, index) => (
                <DayName key={day}>
                  {DAYS_OF_WEEK[(index + FirstDayOfWeek.monday) % 7]}
                </DayName>
              ))}
            </DaysNames>
            <Dates>
              {monthDates.map((date) => (
                <Day
                  key={date.getTime()}
                  $dayType={getDayType(
                    date,
                    currentDate,
                    getFirstDayOfMonth(monthDates).getMonth(),
                    service
                  )}
                >
                  {date.getDate()}
                </Day>
              ))}
            </Dates>
          </Month>
        ))}
      </Container>
    </CalendarContainer>
  )
}

export default YearCalendar
