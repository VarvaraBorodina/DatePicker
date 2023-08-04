import FirstDayOfWeek from '@/constants/firstDayOfWeek'
import TEXT from '@/constants/text'
import { getLastDayOfWeek } from '@/utils'

import { Service, Todo } from './types'

class DefaultService implements Service {
  firstDayOfWeek: FirstDayOfWeek

  constructor(firstDayOfWeek?: FirstDayOfWeek) {
    this.firstDayOfWeek = firstDayOfWeek ?? FirstDayOfWeek.monday
  }

  getCurrentDate(): Date {
    return new Date()
  }

  getPreviousDate(currentDate: Date): Date {
    currentDate.setMonth(currentDate.getMonth() - 1)
    return currentDate
  }

  getNextDate(currentDate: Date): Date {
    currentDate.setMonth(currentDate.getMonth() + 1)
    return currentDate
  }

  getCurrentDateRange(currentDate: Date): Array<Array<Date>> {
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()

    const indexOfFirstDayOfWeek = this.firstDayOfWeek as number

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
    while (firstDayOfMonth.getDay() !== indexOfFirstDayOfWeek) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1)
    }

    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
    while (
      lastDayOfMonth.getDay() !== getLastDayOfWeek(indexOfFirstDayOfWeek)
    ) {
      lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1)
    }

    return [[firstDayOfMonth, lastDayOfMonth]]
  }

  getDateByString(dataString: string): Date {
    const [day, month, year]: string[] = dataString.split(TEXT.DATE_DIVIDER)
    return new Date(Number(year), Number(month) - 1, Number(day))
  }

  stringDataError(dataString: string): string {
    if (dataString.length !== 10) {
      return TEXT.INVALID_DATE
    }

    const dateParams: string[] = dataString.split(TEXT.DATE_DIVIDER)
    let isValidDataFlag = true

    const [day, month, year]: number[] = dateParams.map((dateParam: string) => {
      if (Number.isNaN(+dateParam)) {
        isValidDataFlag = false
      }
      const numberParam = Number(dateParam)
      if (numberParam !== Math.floor(numberParam)) {
        isValidDataFlag = false
      }
      return numberParam
    })

    if (!isValidDataFlag) {
      return TEXT.INVALID_DATE
    }

    const longMonth = [0, 2, 4, 6, 7, 9, 11]

    if (longMonth.includes(month)) {
      if (day > 31) {
        return TEXT.INVALID_DATE
      }
    }

    if (!longMonth.includes(month)) {
      if (day > 30) {
        return TEXT.INVALID_DATE
      }
    }

    if (year < 1) {
      return TEXT.INVALID_DATE
    }

    if (month === 1 && day > 29 && year % 4 === 0) {
      return TEXT.INVALID_DATE
    }

    if (month === 1 && day > 28 && year % 4 > 0) {
      return TEXT.INVALID_DATE
    }

    return ''
  }

  isWeekend(): boolean {
    return false
  }

  isDayOff(): boolean {
    return false
  }

  getDayTodoFromLocalStorage(): Todo[] {
    return []
  }

  setDayTodoToLocalStorage(): Todo[] {
    return []
  }

  getDaysWithTodoFromLocalStorage(): string[] {
    return []
  }

  deleteDayTodoFromLocalStorage(): void {}
}

export default DefaultService
