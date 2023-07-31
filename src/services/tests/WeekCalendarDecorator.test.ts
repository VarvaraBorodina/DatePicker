import WeekCalendarDecorator from '@/services/decorators/WeekCalendarDecorator'
import DefaultService from '@/services/DefaultService'

describe('Week Calendar Decorator', () => {
  it('Previous date should be the same day of week', () => {
    const currentDate = new Date()

    const service = new WeekCalendarDecorator(new DefaultService())
    const previousDate = service.getPreviousDate(currentDate)

    expect(previousDate.getDay()).toEqual(currentDate.getDay())
  })

  it('Next date should be the same day of week', () => {
    const currentDate = new Date()

    const service = new WeekCalendarDecorator(new DefaultService())
    const nextDate = service.getNextDate(currentDate)

    expect(nextDate.getDay()).toEqual(currentDate.getDay())
  })

  it('Range starts with first day of week', () => {
    const service = new WeekCalendarDecorator(new DefaultService())
    const currentDate = new Date()

    const range = service.getCurrentDateRange(currentDate)[0]

    expect(range[0].getDay()).toEqual(service.firstDayOfWeek)
  })
})
