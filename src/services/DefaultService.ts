import FirstDayOfWeek from '@/constants/firstDayOfWeek'

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
    while (lastDayOfMonth.getDay() !== (6 + indexOfFirstDayOfWeek) % 7) {
      lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1)
    }

    return [[firstDayOfMonth, lastDayOfMonth]]
  }

  getDateByString(dataString: string): Date {
    const [day, month, year]: string[] = dataString.split('.')
    return new Date(
      year as unknown as number,
      (month as unknown as number) - 1,
      day as unknown as number
    )
  }

  isStringValidData(dataString: string): boolean {
    if (dataString.length !== 10) {
      return false
    }

    const dateParams: string[] = dataString.split('.')
    let isValidDataFlag = true

    const [day, month, year]: number[] = dateParams.map((dateParam: string) => {
      if (Number.isNaN(+dateParam)) {
        isValidDataFlag = true
      }
      const numberParam = +dateParam as unknown as number
      if (numberParam !== Math.floor(numberParam)) {
        isValidDataFlag = true
      }
      return numberParam
    })

    if (!isValidDataFlag) {
      return false
    }

    const longMonth = [0, 2, 4, 6, 7, 9, 11]

    if (longMonth.includes(month)) {
      if (day > 31) {
        return false
      }
    }

    if (!longMonth.includes(month)) {
      if (day > 30) {
        return false
      }
    }

    if (year < 1) {
      return false
    }

    if (month === 1 && day > 29 && year % 4 === 0) {
      return false
    }

    if (month === 1 && day > 28 && year % 4 > 0) {
      return false
    }

    return true
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
}

export default DefaultService
