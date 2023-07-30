import DAYS_OFF from '@/constants/daysOff'
import ServiceDecorator from '@/services/decorators/ServiceDecorator'
import { Holiday, Service } from '@/services/types'

class DaysOffDecorator extends ServiceDecorator {
  holidays: Holiday[]

  constructor(service: Service, holidays?: Holiday[]) {
    super(service)
    this.holidays = holidays ?? DAYS_OFF
  }

  isDayOff(currentDate: Date): boolean {
    const currentDay: Holiday = {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
    }
    return (
      this.holidays.findIndex(
        ({ day, month }) => day === currentDay.day && month === currentDay.month
      ) !== -1
    )
  }
}
export default DaysOffDecorator
