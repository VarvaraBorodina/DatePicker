import { useState } from 'react'
import { Service } from '../services/types'
import { UseDatesRangeType } from './types'

const useDatesRange = (service: Service): UseDatesRangeType => {
  const [rangeStart, setRangeStart] = useState<Date | null>(null)
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null)

  const handleRangeStart = (newRangeStart: string) => {
    if (!newRangeStart) {
      setRangeStart(null)
      return
    }
    if (service.isStringValidData(newRangeStart)) {
      const startDate = service.getDateByString(newRangeStart)
      if (!rangeEnd || startDate <= rangeEnd) {
        setRangeStart(startDate)
      }
    }
  }

  const handleRangeEnd = (newRangeEnd: string) => {
    if (!newRangeEnd) {
      setRangeEnd(null)
      return
    }
    if (service.isStringValidData(newRangeEnd)) {
      const endDate = service.getDateByString(newRangeEnd)
      if (!rangeStart || endDate >= rangeStart) {
        setRangeEnd(endDate)
      }
    }
  }

  return [rangeStart, rangeEnd, handleRangeStart, handleRangeEnd]
}

export default useDatesRange
