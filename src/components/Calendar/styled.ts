import styled from 'styled-components'

import {
  RESPONSIVE_SIZE_L,
  RESPONSIVE_SIZE_M,
  RESPONSIVE_SIZE_S,
} from '@/constants/breakpoints'

const Container = styled.div`
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
`
const CalendarContainer = styled.div`
  max-width: ${({ theme }) =>
    theme.SIZES.INPUT_WIDTH * 4 + theme.SPACES.M * 3}px;
  @media (max-width: ${RESPONSIVE_SIZE_L}px) {
    max-width: ${({ theme }) =>
      theme.SIZES.INPUT_WIDTH * 3 + theme.SPACES.M * 2}px;
  }
  @media (max-width: ${RESPONSIVE_SIZE_M}px) {
    max-width: ${({ theme }) => theme.SIZES.INPUT_WIDTH * 2 + theme.SPACES.M}px;
  }
  @media (max-width: ${RESPONSIVE_SIZE_S}px) {
    max-width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  }
`

const Year = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
  @media (max-width: ${RESPONSIVE_SIZE_L}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${RESPONSIVE_SIZE_M}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${RESPONSIVE_SIZE_S}px) {
    grid-template-columns: 1fr;
  }
`
export { CalendarContainer, Container, Year }
