import { CalendarType, FirstDayOfWeek } from '@/constants'

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
