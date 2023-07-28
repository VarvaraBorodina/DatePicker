import React from 'react'
import CalendarIcon from '../icons/CalendarIcon'
import CrossIcon from '../icons/CrossIncons'
import {
  InputContainer,
  Input,
  Error,
  Button,
  Title,
  Container,
} from './styled'
import { DateInputProps } from './types'

const DateInput: React.FC<DateInputProps> = ({ title }) => {
  return (
    <Container>
      {true && <Error>Invalid Date</Error>}
      <Title>{title}</Title>
      <InputContainer>
        <CalendarIcon />
        <Input type="text" placeholder="Choose Date" />
        <Button type="button">
          <CrossIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default DateInput
