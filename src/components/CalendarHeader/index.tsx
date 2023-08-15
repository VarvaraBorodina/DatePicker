import React from 'react'

import LeftArrow from '@/assets/LeftArrow'
import RightArrow from '@/assets/RightArrow'

import { Button, Container, Title } from './styled'
import { CalendarHeaderProps } from './types'

const MonthHeader: React.FC<CalendarHeaderProps> = (props) => {
  const { title, withArrows, onNext, onPrevious, nextDisable, prevDisable } =
    props
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
