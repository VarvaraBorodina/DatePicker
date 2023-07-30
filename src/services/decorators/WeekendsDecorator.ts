import ServiceDecorator from '@/services/decorators/ServiceDecorator'

class WeekendsDecorator extends ServiceDecorator {
  isWeekend(currentDate: Date): boolean {
    return currentDate.getDay() === 0 || currentDate.getDay() === 6
  }
}
export default WeekendsDecorator
