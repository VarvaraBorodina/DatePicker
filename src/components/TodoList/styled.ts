import styled from 'styled-components'
import { DEFAULT_COLOR } from '../../constants/colors'

const Container = styled.div`
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  padding: ${({ theme }) => theme.SPACES.M}px;
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  border: solid 1px
    ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}${theme.OPACITIES.S}`};
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  cursor: pointer;
`
const Date = styled.p`
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
  opacity: ${({ theme }) => `0.${theme.OPACITIES.L}`};
`
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.SPACES.S}px;
`
const Input = styled.input`
  width: ${({ theme }) => theme.SIZES.INPUT_WIDTH * 0.65}px;
  padding: ${({ theme }) => theme.SPACES.XS}px
    ${({ theme }) => theme.SPACES.S}px;
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
  opacity: ${({ theme }) => `0.${theme.OPACITIES.L}`};
  border: solid 1px
    ${({ theme }) => `${theme.COLORS.PRIMARY_COLOR}${theme.OPACITIES.M}`};
  border-radius: ${({ theme }) => theme.SPACES.S}px;

  &:focus {
    outline: none;
  }
`
const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.SPACES.XS}px
    ${({ theme }) => theme.SPACES.S}px;
  border: none;
  border-radius: ${({ theme }) => theme.SPACES.S}px;
  background-color: ${DEFAULT_COLOR};
  cursor: pointer;
  color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
`
const Todos = styled.ul`
  margin-left: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
  list-style-type: disc;
`

const TodoItem = styled.li`
  margin: ${({ theme }) => theme.SPACES.XS}px;
  font-size: ${({ theme }) => `${theme.FONT_SIZES.M}`}px;
  font-family: ${({ theme }) => `${theme.FONTS.MAIN}`};
  font-weight: ${({ theme }) => `${theme.FONT_WEIGHT.S}`};
  opacity: ${({ theme }) => `0.${theme.OPACITIES.L}`};
`

export {
  Container,
  Input,
  Button,
  Title,
  Date,
  InputContainer,
  AddButton,
  Todos,
  TodoItem,
}
