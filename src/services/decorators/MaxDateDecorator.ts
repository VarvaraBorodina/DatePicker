import { TEXT } from '@/constants'
import { Service } from '@/services'

import ServiceDecorator from './ServiceDecorator'

class MaxDateDecorator extends ServiceDecorator {
  maxDate: Date

  constructor(service: Service, maxDate: Date) {
    super(service)
    this.maxDate = maxDate
  }

  stringDataError(dataString: string): string {
    const serviceError = this.service.stringDataError(dataString)

    if (serviceError) {
      return serviceError
    }
    if (this.service.getDateByString(dataString) > this.maxDate) {
      return TEXT.DATE_OUT_OF_RANGE
    }
    return ''
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
