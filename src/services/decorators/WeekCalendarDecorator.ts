import ServicesDecorator from './ServiseDecorator'

class WeekCalendarDecorator extends ServicesDecorator {
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
    const lastDayOfWeek = new Date(currentDate)

    const indexOfFirstDayOfWeek = this.service.firstDayOfWeek as number
    while (firstDayOfWeek.getDay() !== indexOfFirstDayOfWeek) {
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1)
    }

    while (lastDayOfWeek.getDay() !== 6 - indexOfFirstDayOfWeek) {
      lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 1)
    }
    return [[firstDayOfWeek, lastDayOfWeek]]
  }
}
export default WeekCalendarDecorator
