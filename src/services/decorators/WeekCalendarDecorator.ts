import ServiceDecorator from '@/services/decorators/ServiceDecorator'

class WeekCalendarDecorator extends ServiceDecorator {
  getPreviousDate(currentDate: Date): Date {
    const date = currentDate
    date.setDate(date.getDate() - 7)
    return date
  }

  getNextDate(currentDate: Date): Date {
    const date = currentDate
    date.setDate(date.getDate() + 7)
    return date
  }

  getCurrentDateRange(currentDate: Date): Array<Array<Date>> {
    const firstDayOfWeek = new Date(currentDate)

    const indexOfFirstDayOfWeek = this.service.firstDayOfWeek as number
    while (firstDayOfWeek.getDay() !== indexOfFirstDayOfWeek) {
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1)
    }

    const lastDayOfWeek = new Date(firstDayOfWeek)
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6)

    return [[firstDayOfWeek, lastDayOfWeek]]
  }
}
export default WeekCalendarDecorator
