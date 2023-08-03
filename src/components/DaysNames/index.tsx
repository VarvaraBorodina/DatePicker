import React from 'react'

import { DAYS_OF_WEEK, FirstDayOfWeek } from '@/constants'

import { Container, DayName } from './styled'

const DaysNames: React.FC<{ firstDayOfWeek: FirstDayOfWeek }> = ({
  firstDayOfWeek,
}) => {
  return (
    <Container>
      {DAYS_OF_WEEK.map((day, i) => (
        <DayName key={day}>{DAYS_OF_WEEK[(i + firstDayOfWeek) % 7]}</DayName>
      ))}
    </Container>
  )
}

export default React.memo(DaysNames)
