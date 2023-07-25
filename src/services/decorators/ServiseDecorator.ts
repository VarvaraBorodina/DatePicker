import FirstDayOfWeek from '../../constants/firstDayOfWeek'
import { Service, Todo } from '../types'

class ServicesDecorator implements Service {
  service: Service

  color: string

  firstDayOfWeek: FirstDayOfWeek

  constructor(service: Service) {
    this.service = service
    this.color = this.service.color
    this.firstDayOfWeek = this.service.firstDayOfWeek
  }

  getCurrentDate(): Date {
    return this.service.getCurrentDate()
  }

  getPreviousDate(currentDate: Date): Date {
    return this.service.getPreviousDate(currentDate)
  }

  getNextDate(currentDate: Date): Date {
    return this.service.getNextDate(currentDate)
  }

  getCurrentDateRange(currentDate: Date): Array<Array<Date>> {
    return this.service.getCurrentDateRange(currentDate)
  }

  getDateByString(dataString: string): Date {
    return this.service.getDateByString(dataString)
  }

  isStringValidData(dataString: string): boolean {
    return this.service.isStringValidData(dataString)
  }

  isWeekend(currentDate: Date): boolean {
    return this.service.isWeekend(currentDate)
  }

  isDayOff(currentDate: Date): boolean {
    return this.service.isDayOff(currentDate)
  }

  getDayTodoFromLocalStorage(day: string): Todo[] {
    return this.service.getDayTodoFromLocalStorage(day)
  }

  setDayTodoToLocalStorage(day: string, todo: Todo): Todo[] {
    return this.service.setDayTodoToLocalStorage(day, todo)
  }
}
export default ServicesDecorator
