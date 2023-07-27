import styled from 'styled-components'
import DayType from '../../constants/dayType'
import getDayColorsByType from '../../utils/getDayColorsByType'
import { Theme } from '../../utils/types'

const CalendarContainer = styled.div`
  max-width: ${({ theme }) =>
    theme.SIZES.INPUT_WIDTH * 4 + theme.SPACES.M * 3}px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
`

const Month = styled.div`
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  padding: ${({ theme }) => theme.SPACES.M}px;
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  border: solid 1px
    ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}${theme.OPACITIES.S}`};
`

const Dates = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`

const Day = styled.p<{ $dayType: DayType }>`
  font-size: ${({ theme }) => `${theme.FONT_SIZES.S}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.M}`};
  width: 13%;
  padding: ${({ theme }) => theme.SPACES.XS}px
    ${({ theme }) => theme.SPACES.XXS}px;
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  text-align: center;
  ${({ theme, $dayType }) => getDayColorsByType($dayType, theme as Theme)}
  cursor: pointer;
`

const DaysNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.SPACES.XS}px;
`

const DayName = styled.p`
  width: 13%;
  margin: 5px 1px;
  text-align: center;
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.L}`};
  color: ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}`};
  opacity: ${({ theme }) => `0.${theme.OPACITIES.XL}`};
`
export { Container, Dates, Day, Month, DayName, DaysNames, CalendarContainer }
