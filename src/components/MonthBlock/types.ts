import { CalendarType, DayType, FirstDayOfWeek } from '@/constants'
import { Todo } from '@/services'

type MonthBlockProps = {
  title: string
  blockDates: Date[]
  handleNextRange: () => void
  handlePrevRange: () => void
  getDayType: (day: Date) => DayType
  type: CalendarType
  firstDayOfWeek: FirstDayOfWeek
  getDayTodos: (day: Date) => Todo[]
  saveDayTodo: (day: Date, todo: Todo) => void
  deleteDayTodo: (day: Date, id: number) => void
  isTodoListAvailable: boolean
  nextDisable: boolean
  prevDisable: boolean
  isDayInRange: (day: Date) => boolean
}

export default MonthBlockProps
