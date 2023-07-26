import React from 'react'
import CalendarIcon from '../icons/CalendarIcon'
import CrossIcon from '../icons/CrossIncons'
import { InputContainer, Input, Error, Button } from './styled'

const DateInput = () => {
  return (
    <>
      <Error>Invalid Date</Error>
      <InputContainer>
        <CalendarIcon />
        <Input type="text" placeholder="Choose Date" />
        <Button type="button">
          <CrossIcon />
        </Button>
      </InputContainer>
    </>
  )
}

export default DateInput
