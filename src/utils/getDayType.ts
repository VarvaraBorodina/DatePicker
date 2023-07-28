import DayType from '../constants/dayType'
import { Service } from '../services/types'
import { isDatesEqual } from './comparisonDates'

const getDayType = (
  day: Date,
  currentDate: Date,
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
  return DayType.default
}

export default getDayType
