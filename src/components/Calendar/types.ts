import CalendarType from '@/constants/calendarType'
import FirstDayOfWeek from '@/constants/firstDayOfWeek'

interface CalendarProps {
  type?: CalendarType
  color?: string
  min?: Date
  max?: Date
  firstDayOfWeek?: FirstDayOfWeek
  todoList?: boolean
  weekends?: boolean
  daysOff?: boolean
}

export default CalendarProps
