import { useCallback, useMemo, useState } from 'react'

import { Service } from '@/services'

import { UseServiceType } from './types'

const getMonthesDates = (ranges: Date[][]) => {
  return ranges.map((range) => {
    const monthDates = []
    const [startDate, finishDate] = range
    for (let i = startDate; i <= finishDate; i.setDate(i.getDate() + 1)) {
      const dateForArray = new Date(i)
      monthDates.push(dateForArray)
    }
    return monthDates
  })
}

const useService = (service: Service): UseServiceType => {
  const [currentDate, setCurrentDate] = useState(service.getCurrentDate())

  const monthesDates = useMemo<Date[][]>(() => {
    const ranges = service.getCurrentDateRange(currentDate)
    return getMonthesDates(ranges)
  }, [currentDate, service])

  const handleNextRange = useCallback(() => {
    const nextDate = new Date(service.getNextDate(currentDate))
    setCurrentDate(nextDate)
  }, [currentDate, service])

  const handlePreviousRange = useCallback(() => {
    const nextDate = new Date(service.getPreviousDate(currentDate))
    setCurrentDate(nextDate)
  }, [currentDate, service])

  const changeCurrentDate = useCallback(
    (newDate: string) => {
      if (newDate) {
        setCurrentDate(service.getDateByString(newDate))
      } else {
        setCurrentDate(service.getCurrentDate())
      }
    },
    [service]
  )
  return [
    currentDate,
    monthesDates,
    handleNextRange,
    handlePreviousRange,
    changeCurrentDate,
  ]
}

export default useService
