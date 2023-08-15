import TEXT from '@/constants/text'
import MaxDateDecorator from '@/services/decorators/MaxDateDecorator'
import DefaultService from '@/services/DefaultService'

describe('Max Date Decorator', () => {
  it('Service has max value', () => {
    const maxDate = new Date(2024, 0, 1)
    const service = new MaxDateDecorator(new DefaultService(), maxDate)

    expect(service.maxDate).toEqual(maxDate)
  })

  it('Date after max date should not be valid', () => {
    const maxDate = new Date(2024, 0, 1)
    const service = new MaxDateDecorator(new DefaultService(), maxDate)

    const date = '23.05.2030'
    expect(service.stringDataError(date)).toEqual(TEXT.DATE_OUT_OF_RANGE)
  })

  it('Date before max date should not be valid', () => {
    const maxDate = new Date(2024, 0, 1)
    const service = new MaxDateDecorator(new DefaultService(), maxDate)

    const date = '10.02.2023'
    expect(service.stringDataError(date)).toEqual('')
  })

  it('Return current date if it is smaller than max date', () => {
    const maxDate = new Date(2024, 0, 1)
    const now = new Date()

    const service = new MaxDateDecorator(new DefaultService(), maxDate)
    const currentDate = service.getCurrentDate()

    expect(currentDate.getDate()).toEqual(now.getDate())
    expect(currentDate.getMonth()).toEqual(now.getMonth())
  })

  it('Return max date if current date is bigger than max date', () => {
    const maxDate = new Date(2022, 0, 1)
    const service = new MaxDateDecorator(new DefaultService(), maxDate)

    expect(service.getCurrentDate()).toEqual(maxDate)
  })

  it('Return previous date if it is smaller than max date', () => {
    const maxDate = new Date(2024, 0, 1)
    const currentDate = new Date(2023, 5, 15)

    const service = new MaxDateDecorator(new DefaultService(), maxDate)
    const previousDate = service.getPreviousDate(new Date(currentDate))

    expect(previousDate.getDate()).toEqual(currentDate.getDate())
    expect(previousDate.getMonth()).toEqual(currentDate.getMonth() - 1)
  })

  it('Return max date if previous date is bigger than max date', () => {
    const maxDate = new Date(2022, 0, 1)
    const currentDate = new Date(2023, 5, 15)

    const service = new MaxDateDecorator(new DefaultService(), maxDate)
    expect(service.getPreviousDate(currentDate)).toEqual(maxDate)
  })

  it('Return next date if it is smaller than max date', () => {
    const maxDate = new Date(2024, 0, 1)
    const currentDate = new Date(2023, 5, 15)

    const service = new MaxDateDecorator(new DefaultService(), maxDate)
    const nextDate = service.getNextDate(new Date(currentDate))

    expect(nextDate.getDate()).toEqual(currentDate.getDate())
    expect(nextDate.getMonth()).toEqual(currentDate.getMonth() + 1)
  })

  it('Return max date if next date is bigger than max date', () => {
    const maxDate = new Date(2022, 0, 1)
    const currentDate = new Date(2021, 11, 15)

    const service = new MaxDateDecorator(new DefaultService(), maxDate)
    expect(service.getNextDate(currentDate)).toEqual(maxDate)
  })
})
