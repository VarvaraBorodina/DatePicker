import styled from 'styled-components'

const Container = styled.div`
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

export { DayName, Container }
