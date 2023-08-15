import DAYS_OFF from '@/constants/daysOff'
import { DayOff } from '@/services/types'

import ServiceDecorator from './ServiceDecorator'

class DaysOffDecorator extends ServiceDecorator {
  isDayOff(currentDate: Date): boolean {
    const currentDay: DayOff = {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
    }
    return (
      DAYS_OFF.findIndex(
        ({ day, month }) => day === currentDay.day && month === currentDay.month
      ) !== -1
    )
  }
}
export default DaysOffDecorator
