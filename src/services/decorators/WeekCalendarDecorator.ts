import { DAYS_OF_WEEK } from '@/constants'

import ServiceDecorator from './ServiceDecorator'

class WeekCalendarDecorator extends ServiceDecorator {
  getPreviousDate(currentDate: Date): Date {
    const date = currentDate
    date.setDate(date.getDate() - DAYS_OF_WEEK.length)
    return date
  }

  getNextDate(currentDate: Date): Date {
    const date = currentDate
    date.setDate(date.getDate() + DAYS_OF_WEEK.length)
    return date
  }

  getCurrentDateRange(currentDate: Date): Array<Array<Date>> {
    const firstDayOfWeek = new Date(currentDate)

    const indexOfFirstDayOfWeek = this.service.firstDayOfWeek as number
    while (firstDayOfWeek.getDay() !== indexOfFirstDayOfWeek) {
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1)
    }

    const lastDayOfWeek = new Date(firstDayOfWeek)
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() - 1 + DAYS_OF_WEEK.length)

    return [[firstDayOfWeek, lastDayOfWeek]]
  }
}
export default WeekCalendarDecorator
