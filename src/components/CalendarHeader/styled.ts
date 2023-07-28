import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.SPACES.S}px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  cursor: pointer;
`

const Title = styled.h5`
  margin: 0 auto;
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.L}`};
  opacity: ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}`};
`

export { Container, Button, Title }
