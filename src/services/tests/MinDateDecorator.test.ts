import MinDateDecorator from '@/services/decorators/MinDateDecorator'
import DefaultService from '@/services/DefaultService'

describe('Min Date Decorator', () => {
  it('Service has min value', () => {
    const minDate = new Date(2024, 0, 1)
    const service = new MinDateDecorator(new DefaultService(), minDate)

    expect(service.minDate).toEqual(minDate)
  })

  it('Date after min date should not be valid', () => {
    const minDate = new Date(2024, 0, 1)
    const service = new MinDateDecorator(new DefaultService(), minDate)

    const date = '23.05.2025'
    expect(service.isStringValidData(date)).toEqual(true)
  })

  it('Date before min date should not be valid', () => {
    const minDate = new Date(2024, 0, 1)
    const service = new MinDateDecorator(new DefaultService(), minDate)

    const date = '10.02.2023'
    expect(service.isStringValidData(date)).toEqual(false)
  })

  it('Return current date if it is bigger than min date', () => {
    const minDate = new Date(2020, 0, 1)
    const now = new Date()

    const service = new MinDateDecorator(new DefaultService(), minDate)
    const currentDate = service.getCurrentDate()

    expect(currentDate.getDate()).toEqual(now.getDate())
    expect(currentDate.getMonth()).toEqual(now.getMonth())
  })

  it('Return min date if current date is smaller than min date', () => {
    const minDate = new Date(2024, 0, 1)
    const service = new MinDateDecorator(new DefaultService(), minDate)

    expect(service.getCurrentDate()).toEqual(minDate)
  })

  it('Return previous date if it is bigger than min date', () => {
    const minDate = new Date(2023, 0, 1)
    const currentDate = new Date(2023, 5, 15)

    const service = new MinDateDecorator(new DefaultService(), minDate)
    const previousDate = service.getPreviousDate(new Date(currentDate))

    expect(previousDate.getDate()).toEqual(currentDate.getDate())
    expect(previousDate.getMonth()).toEqual(currentDate.getMonth() - 1)
  })

  it('Return current date if previous date is smaller than min date', () => {
    const minDate = new Date(2022, 0, 1)
    const currentDate = new Date(2023, 0, 15)

    const service = new MinDateDecorator(new DefaultService(), minDate)
    expect(service.getPreviousDate(currentDate)).toEqual(currentDate)
  })

  it('Return next date if it is bigger than min date', () => {
    const minDate = new Date(2024, 0, 1)
    const currentDate = new Date(2024, 5, 15)

    const service = new MinDateDecorator(new DefaultService(), minDate)
    const nextDate = service.getNextDate(new Date(currentDate))

    expect(nextDate.getDate()).toEqual(currentDate.getDate())
    expect(nextDate.getMonth()).toEqual(currentDate.getMonth() + 1)
  })

  it('Return current date if next date is smaller than min date', () => {
    const minDate = new Date(2022, 0, 1)
    const currentDate = new Date(2021, 11, 15)

    const service = new MinDateDecorator(new DefaultService(), minDate)
    expect(service.getNextDate(currentDate)).toEqual(currentDate)
  })
})
