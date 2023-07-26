import React from 'react'
import GlobalThemProvider from '../ThemeProvider'
import { Container } from './styled'
import DateInput from '../DateInput'

const Calendar = () => {
  return (
    <GlobalThemProvider>
      <Container>
        <DateInput />
        <div>Calendar</div>
        <div>Todolist</div>
      </Container>
    </GlobalThemProvider>
  )
}

export default Calendar
