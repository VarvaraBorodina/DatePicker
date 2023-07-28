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
  daysWithTodos: string[]
  getDayTodoFromLocalStorage: (day: Date) => Todo[]
}

export default MonthBlockProps
