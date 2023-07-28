import React from 'react'
import DateInput from '../DateInput'
import { Inputs } from './styled'

const SelectDataForm = () => {
  return (
    <Inputs>
      <DateInput title="Date" />
      <DateInput title="From" />
      <DateInput title="To" />
    </Inputs>
  )
}

export default SelectDataForm
