import ServiceDecorator from '@/services/decorators/ServiceDecorator'
import { Service } from '@/services/types'

class MaxDateDecorator extends ServiceDecorator {
  maxDate: Date

  constructor(service: Service, maxDate: Date) {
    super(service)
    this.maxDate = maxDate
  }

  isStringValidData(dataString: string): boolean {
    if (!this.service.isStringValidData(dataString)) {
      return false
    }
    return this.service.getDateByString(dataString) < this.maxDate
  }

  getCurrentDate(): Date {
    return new Date() > this.maxDate ? this.maxDate : new Date()
  }

  getPreviousDate(currentDate: Date): Date {
    const newDate = this.service.getPreviousDate(currentDate)
    return newDate < this.maxDate ? newDate : currentDate
  }

  getNextDate(currentDate: Date): Date {
    const newDate = this.service.getNextDate(currentDate)
    return newDate < this.maxDate ? newDate : currentDate
  }
}
export default MaxDateDecorator
