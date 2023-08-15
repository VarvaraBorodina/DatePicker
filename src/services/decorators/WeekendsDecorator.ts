import { DAYS_OF_WEEK } from '@/constants'

import ServiceDecorator from './ServiceDecorator'

class WeekendsDecorator extends ServiceDecorator {
  isWeekend(currentDate: Date): boolean {
    return (
      currentDate.getDay() === 0 ||
      currentDate.getDay() === DAYS_OF_WEEK.length - 1
    )
  }
}
export default WeekendsDecorator
