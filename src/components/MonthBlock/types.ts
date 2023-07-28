import CalendarType from '../../constants/calendarType'
import DayType from '../../constants/dayType'
import FirstDayOfWeek from '../../constants/firstDayOfWeek'
import { Todo } from '../../services/types'

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
  isTodoListAvailable: boolean
  nextDisable: boolean
  prevDisable: boolean
}

export default MonthBlockProps
