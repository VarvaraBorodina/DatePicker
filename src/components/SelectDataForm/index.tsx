import React, { useState } from 'react'

import DateInput from '@/components/DateInput'
import { TEXT } from '@/constants'

import { Button, Inputs } from './styled'
import { SelectDataFormProps } from './types'

const SelectDataForm: React.FC<SelectDataFormProps> = (props) => {
  const { changeCurrentDate, changeFromDate, changeToDate, stringDataError } =
    props
  const [showRange, setShowRange] = useState<boolean>(false)

  const handleOnRangeButton = () => {
    setShowRange((prevState) => !prevState)
  }
  return (
    <Inputs>
      <DateInput
        title={TEXT.DATE}
        changeDate={changeCurrentDate}
        stringDataError={stringDataError}
      />
      <Button onClick={handleOnRangeButton}>
        {showRange ? TEXT.REMOVE_RANGE : TEXT.ADD_RANGE}
      </Button>
      {showRange && (
        <>
          <DateInput
            title={TEXT.FROM}
            changeDate={changeFromDate}
            stringDataError={stringDataError}
          />
          <DateInput
            title={TEXT.TO}
            changeDate={changeToDate}
            stringDataError={stringDataError}
          />
        </>
      )}
    </Inputs>
  )
}

export default SelectDataForm
