import { useEffect, useState } from 'react'

import { Service } from '@/services/types'

import { UseServiceType } from './types'

const useService = (service: Service): UseServiceType => {
  const [currentDate, setCurrentDate] = useState(service.getCurrentDate())
  const [monthesDates, setMonthesDates] = useState<Date[][]>([])

  useEffect(() => {
    const ranges = service.getCurrentDateRange(currentDate)
    const monthesDatesFromRanges = ranges.map((range) => {
      const monthDates = []
      const [startDate, finishDate] = range
      for (let i = startDate; i <= finishDate; i.setDate(i.getDate() + 1)) {
        const dateForArray = new Date(i)
        monthDates.push(dateForArray)
      }
      return monthDates
    })
    setMonthesDates(monthesDatesFromRanges)
  }, [currentDate, service])

  const handleNextRange = () => {
    const nextDate = new Date(service.getNextDate(currentDate))
    setCurrentDate(nextDate)
  }

  const handlePreviousRange = () => {
    const nextDate = new Date(service.getPreviousDate(currentDate))
    setCurrentDate(nextDate)
  }

  const changeCurrentDate = (newDate: string) => {
    if (newDate) {
      setCurrentDate(service.getDateByString(newDate))
    } else {
      setCurrentDate(service.getCurrentDate())
    }
  }
  return [
    currentDate,
    monthesDates,
    handleNextRange,
    handlePreviousRange,
    changeCurrentDate,
  ]
}

export default useService
