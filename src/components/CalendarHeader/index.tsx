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
  nextDisable,
  prevDisable,
}) => {
  return (
    <Container>
      {withArrows && (
        <Button type="button" onClick={onPrevious} disabled={prevDisable}>
          <LeftArrow disable={prevDisable} />
        </Button>
      )}
      <Title>{title}</Title>
      {withArrows && (
        <Button type="button" onClick={onNext} disabled={nextDisable}>
          <RightArrow disable={nextDisable} />
        </Button>
      )}
    </Container>
  )
}

export default MonthHeader
