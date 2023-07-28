import { useEffect, useState } from 'react'
import { Service } from '../services/types'
import UseServiceType from './types'

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
  return [currentDate, monthesDates, handleNextRange, handlePreviousRange]
}

export default useService
