import { TEXT } from '@/constants'
import { Service } from '@/services'

import ServiceDecorator from './ServiceDecorator'

class MinDateDecorator extends ServiceDecorator {
  minDate: Date

  constructor(service: Service, minDate: Date) {
    super(service)
    minDate.setDate(minDate.getDate() - 1)
    this.minDate = minDate
  }

  stringDataError(dataString: string): string {
    const serviceError = this.service.stringDataError(dataString)

    if (serviceError) {
      return serviceError
    }

    if (this.service.getDateByString(dataString) <= this.minDate) {
      return TEXT.DATE_OUT_OF_RANGE
    }
    return ''
  }

  getCurrentDate(): Date {
    return new Date() < this.minDate ? this.minDate : new Date()
  }

  getPreviousDate(currentDate: Date): Date {
    const newDate = this.service.getPreviousDate(currentDate)
    return newDate > this.minDate ? newDate : this.minDate
  }

  getNextDate(currentDate: Date): Date {
    const newDate = this.service.getNextDate(currentDate)
    return newDate > this.minDate ? newDate : this.minDate
  }
}
export default MinDateDecorator
