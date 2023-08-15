import DaysOffDecorator from '@/services/decorators/DaysOffDecorator'
import DefaultService from '@/services/DefaultService'

describe('Days Off Decorator', () => {
  it('Shound return true for day off', () => {
    const service = new DaysOffDecorator(new DefaultService())

    const dayOff1 = new Date(2023, 0, 1)
    expect(service.isDayOff(dayOff1)).toEqual(true)

    const dayOff2 = new Date(2023, 2, 8)
    expect(service.isDayOff(dayOff2)).toEqual(true)
  })

  it('Shound return false for not days off', () => {
    const service = new DaysOffDecorator(new DefaultService())

    const dayOff1 = new Date(2023, 6, 31)
    expect(service.isDayOff(dayOff1)).toEqual(false)

    const dayOff2 = new Date(2045, 1, 8)
    expect(service.isDayOff(dayOff2)).toEqual(false)
  })
})
