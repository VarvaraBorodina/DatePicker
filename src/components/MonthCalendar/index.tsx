import React from 'react'
import FirstDayOfWeek from '../../constants/firstDayOfWeek'
import MONTH_NAMES from '../../constants/months'
import WeekendsDecorator from '../../services/decorators/WeekendsDecorator'
import DefaultService from '../../services/DefaultService'
import getDayType from '../../utils/getDayType'
import CalendarHeader from '../CalendarHeader'
import { Container, Dates, Day } from './styled'

const MonthCalendar = () => {
  const service = new WeekendsDecorator(new DefaultService())
  const currentDate = service.getCurrentDate()
  const range = service.getCurrentDateRange(currentDate)[0]

  const monthDates = []
  for (let i = range[0]; i <= range[1]; i.setDate(i.getDate() + 1)) {
    const dateForArray = new Date(i)
    monthDates.push(dateForArray)
  }

  const title = `${
    MONTH_NAMES[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`

  return (
    <Container>
      <CalendarHeader title={title} firstDayOfWeek={FirstDayOfWeek.monday} />
      <Dates>
        {monthDates.map((date) => (
          <Day
            key={date.getTime()}
            $dayType={getDayType(date, currentDate, service)}
          >
            {date.getDate()}
          </Day>
        ))}
      </Dates>
    </Container>
  )
}

export default MonthCalendar
