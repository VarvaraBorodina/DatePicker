import FirstDayOfWeek from '@/constants/firstDayOfWeek'

export interface Todo {
  id: number
  text: string
}

export type DaysTodosType = { [key: string]: Todo[] }

export type DayOff = { day: number; month: number }

export interface Service {
  firstDayOfWeek: FirstDayOfWeek

  maxDate?: Date
  minDate?: Date

  getCurrentDate: () => Date
  getPreviousDate: (currentDate: Date) => Date
  getNextDate: (currentDate: Date) => Date
  getCurrentDateRange: (currentDate: Date) => Array<Array<Date>>

  getDateByString: (dataString: string) => Date
  stringDataError: (dataString: string) => string

  isWeekend: (currentDate: Date) => boolean
  isDayOff: (currentDate: Date) => boolean

  getDayTodoFromLocalStorage: (day: Date) => Todo[]
  setDayTodoToLocalStorage: (day: string, todo: Todo) => Todo[]
  deleteDayTodoFromLocalStorage: (day: Date, id: number) => void

  getDaysWithTodoFromLocalStorage: () => string[]
}
