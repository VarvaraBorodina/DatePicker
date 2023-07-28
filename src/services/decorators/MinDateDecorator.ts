import { Service } from '../types'
import ServiceDecorator from './ServiceDecorator'

class MinDateDecorator extends ServiceDecorator {
  minDate: Date

  constructor(service: Service, minDate: Date) {
    super(service)
    this.minDate = minDate
  }

  isStringValidData(dataString: string): boolean {
    if (!this.service.isStringValidData(dataString)) {
      return false
    }
    return this.service.getDateByString(dataString) > this.minDate
  }

  getCurrentDate(): Date {
    return new Date() < this.minDate ? this.minDate : new Date()
  }

  getPreviousDate(currentDate: Date): Date {
    const newDate = this.service.getPreviousDate(currentDate)
    return newDate > this.minDate ? newDate : currentDate
  }

  getNextDate(currentDate: Date): Date {
    const newDate = this.service.getNextDate(currentDate)
    return newDate > this.minDate ? newDate : currentDate
  }
}
export default MinDateDecorator
