import CalendarProps from '../components/Calendar/types'
import CalendarType from '../constants/calendarType'
import DaysOffDecorator from './decorators/DaysOffDecorator'
import MaxDateDecorator from './decorators/MaxDateDecorator'
import MinDateDecorator from './decorators/MinDateDecorator'
import TodoListDecorator from './decorators/TodoListDecorator'
import WeekCalendarDecorator from './decorators/WeekCalendarDecorator'
import WeekendsDecorator from './decorators/WeekendsDecorator'
import YearCalendarDecorator from './decorators/YearCalendarDecorator'
import DefaultService from './DefaultService'
import { Service } from './types'

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
