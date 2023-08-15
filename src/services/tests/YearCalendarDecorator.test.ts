import { MONTH_NAMES } from '@/constants'
import YearCalendarDecorator from '@/services/decorators/YearCalendarDecorator'
import DefaultService from '@/services/DefaultService'

describe('Year Calendar Decorator', () => {
  it('Previous date should be the same date and month', () => {
    const currentDate = new Date()

    const service = new YearCalendarDecorator(new DefaultService())
    const previousDate = service.getPreviousDate(currentDate)

    expect(previousDate.getDate()).toEqual(currentDate.getDate())
    expect(previousDate.getMonth()).toEqual(currentDate.getMonth())
  })

  it('Next date should be the same day date and month', () => {
    const currentDate = new Date()

    const service = new YearCalendarDecorator(new DefaultService())
    const nextDate = service.getNextDate(currentDate)

    expect(nextDate.getDate()).toEqual(currentDate.getDate())
    expect(nextDate.getMonth()).toEqual(currentDate.getMonth())
  })

  it('Previous date year should be decremented current year', () => {
    const currentDate = new Date()

    const service = new YearCalendarDecorator(new DefaultService())
    const previousDate = service.getPreviousDate(new Date(currentDate))

    expect(previousDate.getFullYear()).toEqual(currentDate.getFullYear() - 1)
  })

  it('Next date year should be incremented current year', () => {
    const currentDate = new Date()

    const service = new YearCalendarDecorator(new DefaultService())
    const nextDate = service.getNextDate(new Date(currentDate))

    expect(nextDate.getFullYear()).toEqual(currentDate.getFullYear() + 1)
  })

  MONTH_NAMES.forEach((month, index) => {
    it(`${month} should start with first day off week and end with last day of week`, () => {
      const currentDate = new Date()
      const service = new YearCalendarDecorator(new DefaultService())

      const range = service.getCurrentDateRange(currentDate)[index]
      expect(range[0].getDay()).toEqual(service.firstDayOfWeek)
      expect(range[1].getDay()).toEqual((6 + service.firstDayOfWeek) % 7)
    })
  })
})
