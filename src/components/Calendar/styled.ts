import styled from 'styled-components'
import DayType from '../../constants/dayType'
import getDayColorsByType from '../../utils/getDayColorsByType'
import { Theme } from '../../utils/types'

const Container = styled.div`
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
`
const CalendarContainer = styled.div`
  max-width: ${({ theme }) =>
    theme.SIZES.INPUT_WIDTH * 4 + theme.SPACES.M * 3}px;
`

const Year = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
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
export { Container, CalendarContainer, Year, Month, Dates, Day }
