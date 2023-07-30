import CalendarProps from '@/components/Calendar/types'
import CalendarType from '@/constants/calendarType'
import DaysOffDecorator from '@/services/decorators/DaysOffDecorator'
import MaxDateDecorator from '@/services/decorators/MaxDateDecorator'
import MinDateDecorator from '@/services/decorators/MinDateDecorator'
import TodoListDecorator from '@/services/decorators/TodoListDecorator'
import WeekCalendarDecorator from '@/services/decorators/WeekCalendarDecorator'
import WeekendsDecorator from '@/services/decorators/WeekendsDecorator'
import YearCalendarDecorator from '@/services/decorators/YearCalendarDecorator'
import DefaultService from '@/services/DefaultService'
import { Service } from '@/services/types'

const createService = ({
  type,
  min,
  max,
  firstDayOfWeek,
  todoList,
  weekends,
  daysOff,
}: CalendarProps): Service => {
  let service: Service = new DefaultService(firstDayOfWeek)
  if (type === CalendarType.week) {
    service = new WeekCalendarDecorator(service)
  }
  if (type === CalendarType.year) {
    service = new YearCalendarDecorator(service)
  }
  if (min) {
    service = new MinDateDecorator(service, min)
  }
  if (max) {
    service = new MaxDateDecorator(service, max)
  }
  if (todoList) {
    service = new TodoListDecorator(service)
  }
  if (weekends) {
    service = new WeekendsDecorator(service)
  }
  if (daysOff) {
    service = new DaysOffDecorator(service)
  }
  return service
}

export default createService
