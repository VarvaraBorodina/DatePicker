import DayType from '../constants/dayType'
import { Service } from '../services/types'
import { isDatesEqual } from './comparisonDates'

const getDayType = (
  day: Date,
  currentDate: Date,
  rangeStart: Date | null,
  rangeEnd: Date | null,
  month: number,
  service: Service
): DayType => {
  if (isDatesEqual(day, currentDate) && month === day.getMonth()) {
    return DayType.chosen
  }
  if (
    (service.isWeekend(day) || service.isDayOff(day)) &&
    day.getMonth() !== month
  ) {
    return DayType.anotherMonthWeekend
  }
  if (service.isWeekend(day) || service.isDayOff(day)) {
    return DayType.weekend
  }
  if (day.getMonth() !== month) {
    return DayType.anotherMonth
  }
  if (rangeStart && rangeEnd && day >= rangeStart && day <= rangeEnd) {
    return DayType.inRange
  }
  return DayType.default
}

export default getDayType
