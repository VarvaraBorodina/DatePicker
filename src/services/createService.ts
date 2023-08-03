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

const addCalendarType = (service: Service, type: CalendarType): Service => {
  switch (type) {
    case CalendarType.week:
      return new WeekCalendarDecorator(service)
    case CalendarType.year:
      return new YearCalendarDecorator(service)
    case CalendarType.month:
      return service
    default:
      return service
  }
}

const addCalendarRange = (
  service: Service,
  min: Date | undefined,
  max: Date | undefined
): Service => {
  if (min) {
    service = new MinDateDecorator(service, min)
  }
  if (max) {
    service = new MaxDateDecorator(service, max)
  }
  return service
}

const addDaysType = (
  service: Service,
  weekends: boolean | undefined,
  daysOff: boolean | undefined
): Service => {
  if (weekends) {
    service = new WeekendsDecorator(service)
  }
  if (daysOff) {
    service = new DaysOffDecorator(service)
  }
  return service
}

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
  service = addCalendarType(service, type ?? CalendarType.month)
  service = addCalendarRange(service, min, max)
  service = addDaysType(service, weekends, daysOff)

  if (todoList) {
    service = new TodoListDecorator(service)
  }

  return service
}

export default createService
