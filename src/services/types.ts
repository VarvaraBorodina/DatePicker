import FirstDayOfWeek from '../constants/firstDayOfWeek'

export interface Todo {
  id: number
  text: string
}

export type DaysTodosType = { [key: string]: Todo[] }

export type Holiday = { day: number; month: number }

export interface Service {
  color: string
  firstDayOfWeek: FirstDayOfWeek

  getCurrentDate: () => Date
  getPreviousDate: (currentDate: Date) => Date
  getNextDate: (currentDate: Date) => Date
  getCurrentDateRange: (currentDate: Date) => Array<Array<Date>>

  getDateByString: (dataString: string) => Date
  isStringValidData: (dataString: string) => boolean

  isWeekend: (currentDate: Date) => boolean
  isDayOff: (currentDate: Date) => boolean

  getDayTodoFromLocalStorage: (day: string) => Todo[]
  setDayTodoToLocalStorage: (day: string, todo: Todo) => Todo[]
}

export default Service