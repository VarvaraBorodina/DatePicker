import styled from 'styled-components'

const Container = styled.div`
  margin-right: ${({ theme }) => theme.SPACES.M}px;
`
const InputContainer = styled.div<{ $isChosen: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  padding: ${({ theme }) => theme.SPACES.S}px ${({ theme }) => theme.SPACES.M}px;
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  border: solid ${({ theme }) => theme.SIZES.BORDER_WIDTH}px
    ${({ theme, $isChosen }) =>
      $isChosen
        ? theme.COLORS.ACCENT_COLOR
        : `${theme.COLORS.PRIMARY_COLOR}${theme.OPACITIES.S}`};
`

const Input = styled.input`
  width: ${({ theme }) => theme.SIZES.INPUT_FORN_WIDTH}px;
  margin-left: ${({ theme }) => theme.SPACES.S}px;
  border: none;
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
  opacity: ${({ theme }) => `0.${theme.OPACITIES.L}`};
  &:focus {
    outline: none;
  }
`
const Error = styled.p`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.SPACES.S}px;
  margin-top: ${({ theme }) => theme.SPACES.S}px;
  color: ${({ theme }) => `${theme.COLORS.ERROR_COLOR}`};
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.SPACES.S}px;
  margin-top: ${({ theme }) => theme.SPACES.S}px;
  color: ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}`};
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
`

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.SPACES.XS}px;
  width: ${({ theme }) => theme.SIZES.BUTTON_WIDTH}px;
  border: none;
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  cursor: pointer;
`

export { Button, Container, Error, Input, InputContainer, Title }
