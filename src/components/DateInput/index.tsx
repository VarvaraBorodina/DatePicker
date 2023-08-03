import React, { useState } from 'react'

import CalendarIcon from '@/assets//CalendarIcon'
import CheckMarkIcon from '@/assets//CheckMarkIcon'
import CrossIcon from '@/assets/CrossIcon'
import { TEXT } from '@/constants'

import {
  Button,
  Container,
  Error,
  Input,
  InputContainer,
  Title,
} from './styled'
import { DateInputProps } from './types'

const DateInput: React.FC<DateInputProps> = ({
  title,
  stringDataError,
  changeDate,
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string>('')
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
    const dateError = stringDataError(inputValue)
    if (!dateError) {
      setDateIsChosen(true)
      setError('')
      changeDate(inputValue)
    } else {
      setError(dateError)
    }
  }

  const handleOnCrossClick = () => {
    setInputValue('')
    setError('')
    setDateIsChosen(false)
    changeDate('')
  }

  return (
    <Container>
      {error && <Error>{error}</Error>}
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
