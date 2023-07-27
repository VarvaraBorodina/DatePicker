import ServicesDecorator from './ServiseDecorator'

class WeekendsDecorator extends ServicesDecorator {
  isWeekend(currentDate: Date): boolean {
    return currentDate.getDay() === 0 || currentDate.getDay() === 6
  }
}
export default WeekendsDecorator
