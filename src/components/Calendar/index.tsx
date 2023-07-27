import React from 'react'
import GlobalThemProvider from '../ThemeProvider'
import { Container } from './styled'
import DateInput from '../DateInput'
import TodoList from '../TodoList'
import Global from '../../styles/global'
import CalendarProps from './types'
import WeekCalendar from '../WeekCalendar'

const Calendar: React.FC<CalendarProps> = ({ color }) => {
  return (
    <GlobalThemProvider color={color}>
      <>
        <Global />
        <Container>
          <div>
            <p>Date</p>
            <DateInput />
          </div>
          <div>
            <p>From</p>
            <DateInput />
            <p>To</p>
            <DateInput />
          </div>

          <WeekCalendar />
          <TodoList />
        </Container>
      </>
    </GlobalThemProvider>
  )
}

export default Calendar
