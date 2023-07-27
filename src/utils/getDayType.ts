import DayType from '../constants/dayType'
import { Service } from '../services/types'
import { isDatesEqual } from './comparisonDates'

const getDayType = (
  day: Date,
  currentDate: Date,
  service: Service
): DayType => {
  if (isDatesEqual(day, currentDate)) {
    return DayType.chosen
  }
  if (
    (service.isWeekend(day) || service.isDayOff(day)) &&
    day.getMonth() !== currentDate.getMonth()
  ) {
    return DayType.anotherMonthWeekend
  }
  if (service.isWeekend(day) || service.isDayOff(day)) {
    return DayType.weekend
  }
  if (day.getMonth() !== currentDate.getMonth()) {
    return DayType.anotherMonth
  }
  return DayType.default
}

export default getDayType
