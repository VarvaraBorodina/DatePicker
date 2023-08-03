import styled from 'styled-components'

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
`

const Button = styled.button`
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  margin-bottom: ${({ theme }) => theme.SPACES.S}px;
  margin-top: ${({ theme }) => theme.SPACES.S}px;
  padding: ${({ theme }) => theme.SPACES.S}px;
  border: none;
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  background-color: ${({ theme }) => `${theme.COLORS.ACCENT_COLOR}`};
  color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
  cursor: pointer;
`

export { Button, Inputs }
