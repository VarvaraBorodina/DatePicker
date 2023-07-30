import React from 'react'
import TEXT from '../../constants/text'
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
        title={TEXT.DATE}
        changeDate={changeCurrentDate}
        isValidDate={isValidDate}
      />
      <DateInput
        title={TEXT.FROM}
        changeDate={changeFromDate}
        isValidDate={isValidDate}
      />
      <DateInput
        title={TEXT.TO}
        changeDate={changeToDate}
        isValidDate={isValidDate}
      />
    </Inputs>
  )
}

export default SelectDataForm
