import React from 'react'
import GlobalThemProvider from '../ThemeProvider'
import { Container } from './styled'
import DateInput from '../DateInput'
import TodoList from '../TodoList'
import Global from '../../styles/global'

const Calendar = () => {
  return (
    <GlobalThemProvider>
      <>
        <Global />
        <Container>
          <DateInput />
          <div>Calendar</div>
          <TodoList />
        </Container>
      </>
    </GlobalThemProvider>
  )
}

export default Calendar
