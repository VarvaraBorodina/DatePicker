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
  const [isDateChosen, setIsDateChosen] = useState<boolean>(false)

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
      setError('')
      changeDate(inputValue)
      setIsDateChosen(true)
    } else {
      setError(dateError)
    }
  }

  const handleOnCrossClick = () => {
    setIsDateChosen(false)
    setInputValue('')
    setError('')
    changeDate('')
  }

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Title>{title}</Title>
      <InputContainer $isChosen={isDateChosen}>
        <CalendarIcon />
        <Input
          type="text"
          placeholder={TEXT.DATE_PATTERN}
          value={inputValue}
          onChange={handleOnChange}
        />
        <Button type="button" onClick={handleOnCheckMarkClick}>
          <CheckMarkIcon />
        </Button>
        {inputValue && (
          <Button type="button" onClick={handleOnCrossClick}>
            <CrossIcon />
          </Button>
        )}
      </InputContainer>
    </Container>
  )
}

export default DateInput
