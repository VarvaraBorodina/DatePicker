import ServiceDecorator from '@/services/decorators/ServiceDecorator'

class YearCalendarDecorator extends ServiceDecorator {
  getPreviousDate(currentDate: Date): Date {
    currentDate.setFullYear(currentDate.getFullYear() - 1)
    return currentDate
  }

  getNextDate(currentDate: Date): Date {
    currentDate.setFullYear(currentDate.getFullYear() + 1)
    return currentDate
  }

  getCurrentDateRange(currentDate: Date): Array<Array<Date>> {
    const currentYear = currentDate.getFullYear()

    const monthesRanges: Array<Array<Date>> = []

    for (let i = 0; i < 12; i += 1) {
      const indexOfFirstDayOfWeek = this.service.firstDayOfWeek as number
      const firstDayOfMonth = new Date(currentYear, i, 1)
      while (firstDayOfMonth.getDay() !== indexOfFirstDayOfWeek) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1)
      }
      const lastDayOfMonth = new Date(currentYear, i + 1, 0)
      while (lastDayOfMonth.getDay() - 1 !== 4 + indexOfFirstDayOfWeek) {
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1)
      }
      lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1)

      monthesRanges.push([firstDayOfMonth, lastDayOfMonth])
    }

    return monthesRanges
  }
}
export default YearCalendarDecorator
