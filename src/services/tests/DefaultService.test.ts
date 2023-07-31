import FirstDayOfWeek from '@/constants/firstDayOfWeek'
import DefaultService from '@/services/DefaultService'

describe('Default Service', () => {
  it('Get current date', () => {
    const service = new DefaultService()
    const currentDate = service.getCurrentDate().toDateString()
    const now = new Date().toDateString()

    expect(currentDate).toEqual(now)
  })

  it('Get date month ago', () => {
    const service = new DefaultService()
    const currentDate = new Date(2023, 6, 1)

    const previousDate = service.getPreviousDate(new Date(currentDate))

    expect(previousDate.getMonth()).toEqual(currentDate.getMonth() - 1)
    expect(previousDate.getDate()).toEqual(currentDate.getDate())
  })

  it('Get date month ahead', () => {
    const service = new DefaultService()
    const currentDate = new Date(2023, 6, 1)

    const previousDate = service.getNextDate(new Date(currentDate))

    expect(previousDate.getMonth()).toEqual(currentDate.getMonth() + 1)
    expect(previousDate.getDate()).toEqual(currentDate.getDate())
  })

  it('Default first day of week', () => {
    const service = new DefaultService()

    expect(service.firstDayOfWeek).toEqual(FirstDayOfWeek.monday)
  })

  it('Set first day of week', () => {
    const service1 = new DefaultService(FirstDayOfWeek.monday)
    expect(service1.firstDayOfWeek).toEqual(FirstDayOfWeek.monday)

    const service2 = new DefaultService(FirstDayOfWeek.sunday)
    expect(service2.firstDayOfWeek).toEqual(FirstDayOfWeek.sunday)
  })

  it('Test current date range', () => {
    const service = new DefaultService()
    const currentDate = new Date(2023, 6, 1)

    const range = service.getCurrentDateRange(currentDate)[0]

    expect(range[0]).toEqual(new Date(2023, 5, 26))
    expect(range[1]).toEqual(new Date(2023, 7, 6))
  })

  it('Range starts with first day of week', () => {
    const service = new DefaultService()
    const currentDate = new Date()

    const range = service.getCurrentDateRange(currentDate)[0]

    expect(range[0].getDay()).toEqual(service.firstDayOfWeek)
  })

  it('Range ends with last day of week', () => {
    const service = new DefaultService()
    const currentDate = new Date()

    const range = service.getCurrentDateRange(currentDate)[0]

    expect(range[1].getDay()).toEqual((6 + service.firstDayOfWeek) % 7)
  })

  it('Date string with letters should not be valid', () => {
    const service = new DefaultService()
    const dateString = 'dsuhdiushd'

    expect(service.isStringValidData(dateString)).toEqual(false)
  })

  it('Date with another divider should not be valid', () => {
    const service = new DefaultService()

    const dateString1 = '12/03/2023'
    expect(service.isStringValidData(dateString1)).toEqual(false)
  })

  it('Not full date should not be valid', () => {
    const service = new DefaultService()

    const dateString1 = '12.03'
    expect(service.isStringValidData(dateString1)).toEqual(false)

    const dateString2 = '2023'
    expect(service.isStringValidData(dateString2)).toEqual(false)
  })

  it('Valid date string', () => {
    const service = new DefaultService()

    const dateString1 = '12.03.2023'
    expect(service.isStringValidData(dateString1)).toEqual(true)

    const dateString2 = '13.12.1989'
    expect(service.isStringValidData(dateString2)).toEqual(true)
  })

  it('Test getting date by string', () => {
    const service = new DefaultService()

    const dateString = '12.03.2023'
    const date = new Date(2023, 2, 12)

    expect(service.getDateByString(dateString)).toEqual(date)
  })

  it('Is weekend should always be false', () => {
    const service = new DefaultService()
    expect(service.isWeekend()).toEqual(false)
  })

  it('Is day off should always be false', () => {
    const service = new DefaultService()
    expect(service.isDayOff()).toEqual(false)
  })

  it('Get day todos should always be empty array', () => {
    const service = new DefaultService()
    expect(service.getDayTodoFromLocalStorage()).toHaveLength(0)
  })

  it('Set day todos should always be empty array', () => {
    const service = new DefaultService()
    expect(service.setDayTodoToLocalStorage()).toHaveLength(0)
  })

  it('No days with todos', () => {
    const service = new DefaultService()
    expect(service.getDaysWithTodoFromLocalStorage()).toHaveLength(0)
  })
})
