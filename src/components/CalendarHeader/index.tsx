import React from 'react'
import DAYS_OF_WEEK from '../../constants/dayOfWeek'
import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'
import { Container, Button, Title, DaysNames, DayName } from './styled'
import { CalendarHeaderProps } from './types'

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  title,
  firstDayOfWeek,
}) => {
  return (
    <>
      <Container>
        <Button type="button">
          <LeftArrow />
        </Button>
        <Title>{title}</Title>
        <Button type="button">
          <RightArrow />
        </Button>
      </Container>
      <DaysNames>
        {DAYS_OF_WEEK.map((day, index) => (
          <DayName key={day}>
            {DAYS_OF_WEEK[(index + firstDayOfWeek) % 7]}
          </DayName>
        ))}
      </DaysNames>
    </>
  )
}

export default CalendarHeader
