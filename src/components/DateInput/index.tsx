import React, { useState } from 'react'
import TEXT from '../../constants/text'
import CalendarIcon from '../icons/CalendarIcon'
import CheckMarkIcon from '../icons/CheckMarkIcon'
import CrossIcon from '../icons/CrossIcon'
import {
  InputContainer,
  Input,
  Error,
  Button,
  Title,
  Container,
} from './styled'
import { DateInputProps } from './types'

const DateInput: React.FC<DateInputProps> = ({
  title,
  isValidDate,
  changeDate,
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [dateIsChosen, setDateIsChosen] = useState<boolean>(false)

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    const newChar = value[value.length - 1]
    const regex = /([0-9]|\.)/
    if (regex.test(newChar) || value === '') {
      setInputValue(value)
    }
  }

  const handleOnCheckMarkClick = () => {
    if (isValidDate(inputValue)) {
      setDateIsChosen(true)
      setError(false)
      changeDate(inputValue)
    } else {
      setError(true)
    }
  }

  const handleOnCrossClick = () => {
    setInputValue('')
    setError(false)
    setDateIsChosen(false)
    changeDate('')
  }

  return (
    <Container>
      {error && <Error>Invalid Date</Error>}
      <Title>{title}</Title>
      <InputContainer>
        <CalendarIcon />
        <Input
          type="text"
          placeholder={TEXT.DATE_PATTERN}
          value={inputValue}
          onChange={handleOnChange}
        />
        {dateIsChosen ? (
          <Button type="button" onClick={handleOnCrossClick}>
            <CrossIcon />
          </Button>
        ) : (
          <Button type="button" onClick={handleOnCheckMarkClick}>
            <CheckMarkIcon />
          </Button>
        )}
      </InputContainer>
    </Container>
  )
}

export default DateInput
