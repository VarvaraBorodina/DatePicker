import DayType from '../constants/dayType'
import { Theme } from './types'

const getDayColorsByType = (dayType: DayType, theme: Theme): string => {
  switch (dayType) {
    case DayType.chosen: {
      return `
      background-color: ${theme.COLORS.ACCENT_COLOR};
      color: ${theme.COLORS.MAIN_COLOR};
      `
    }
    case DayType.rangeBorder: {
      return `
      background-color: ${theme.COLORS.ACCENT_COLOR}${theme.OPACITIES.M};
      color: ${theme.COLORS.MAIN_COLOR};
      `
    }
    case DayType.inRange: {
      return `
      background-color: ${theme.COLORS.ACCENT_COLOR}${theme.OPACITIES.S};
      color: ${theme.COLORS.ACCENT_COLOR};
      `
    }
    case DayType.weekend: {
      return `
      background-color: ${theme.COLORS.MAIN_COLOR};
      color: ${theme.COLORS.ACCENT_COLOR};
      `
    }
    case DayType.anotherMonth: {
      return `
      background-color: ${theme.COLORS.MAIN_COLOR};
      color: ${theme.COLORS.PRIMARY_COLOR}${theme.OPACITIES.M};
      `
    }
    case DayType.anotherMonthWeekend: {
      return `
      background-color: ${theme.COLORS.MAIN_COLOR};
      color: ${theme.COLORS.ACCENT_COLOR}${theme.OPACITIES.L};
      `
    }
    case DayType.default: {
      return `
      background-color: ${theme.COLORS.MAIN_COLOR};
      color:  ${theme.COLORS.PRIMARY_COLOR};
      `
    }
    default: {
      return ''
    }
  }
}

export default getDayColorsByType
