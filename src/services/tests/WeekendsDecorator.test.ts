import WeekendsDecorator from '@/services/decorators/WeekendsDecorator'
import DefaultService from '@/services/DefaultService'

describe('Weekends Decorator', () => {
  it('IsWeekend shound return true for sunday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 30)
    expect(service.isWeekend(sunday)).toEqual(true)
  })

  it('IsWeekend shound return true for saturday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 29)
    expect(service.isWeekend(sunday)).toEqual(true)
  })

  it('IsWeekend shound return false for monday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 17)
    expect(service.isWeekend(sunday)).toEqual(false)
  })

  it('IsWeekend shound return false for tuesday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 18)
    expect(service.isWeekend(sunday)).toEqual(false)
  })

  it('IsWeekend shound return false for wednesday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 19)
    expect(service.isWeekend(sunday)).toEqual(false)
  })

  it('IsWeekend shound return false for thursday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 20)
    expect(service.isWeekend(sunday)).toEqual(false)
  })

  it('IsWeekend shound return false for friday', () => {
    const service = new WeekendsDecorator(new DefaultService())

    const sunday = new Date(2023, 6, 21)
    expect(service.isWeekend(sunday)).toEqual(false)
  })
})
