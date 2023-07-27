import styled from 'styled-components'
import DayType from '../../constants/dayType'
import getDayColorsByType from '../../utils/getDayColorsByType'
import { Theme } from '../../utils/types'

const Container = styled.div`
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  padding: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
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
export { Container, Dates, Day }
