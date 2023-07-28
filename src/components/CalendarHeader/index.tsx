import React from 'react'
import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'
import { Container, Button, Title } from './styled'
import { CalendarHeaderProps } from './types'

const MonthHeader: React.FC<CalendarHeaderProps> = ({
  title,
  withArrows,
  onNext,
  onPrevious,
}) => {
  return (
    <Container>
      {withArrows && (
        <Button type="button" onClick={onPrevious}>
          <LeftArrow />
        </Button>
      )}
      <Title>{title}</Title>
      {withArrows && (
        <Button type="button" onClick={onNext}>
          <RightArrow />
        </Button>
      )}
    </Container>
  )
}

export default MonthHeader
