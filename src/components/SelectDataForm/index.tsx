import React from 'react'
import DateInput from '../DateInput'
import { Inputs } from './styled'
import { SelectDataFormProps } from './types'

const SelectDataForm: React.FC<SelectDataFormProps> = ({
  changeCurrentDate,
  changeFromDate,
  changeToDate,
  isValidDate,
}) => {
  return (
    <Inputs>
      <DateInput
        title="Date"
        changeDate={changeCurrentDate}
        isValidDate={isValidDate}
      />
      <DateInput
        title="From"
        changeDate={changeFromDate}
        isValidDate={isValidDate}
      />
      <DateInput
        title="To"
        changeDate={changeToDate}
        isValidDate={isValidDate}
      />
    </Inputs>
  )
}

export default SelectDataForm
