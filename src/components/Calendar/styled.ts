import styled from 'styled-components'

import { RESPONSIVE } from '@/constants'

const Container = styled.div`
  background-color: ${({ theme }) => `${theme.COLORS.MAIN_COLOR}`};
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
`
const CalendarContainer = styled.div`
  max-width: ${({ theme }) => theme.SIZES.CALENDAR_WIDTH_L}px;
  @media (max-width: ${RESPONSIVE.L}px) {
    max-width: ${({ theme }) => theme.SIZES.CALENDAR_WIDTH_M}px;
  }
  @media (max-width: ${RESPONSIVE.M}px) {
    max-width: ${({ theme }) => theme.SIZES.CALENDAR_WIDTH_S}px;
  }
  @media (max-width: ${RESPONSIVE.S}px) {
    max-width: ${({ theme }) => theme.SIZES.INPUT_WIDTH}px;
  }
`

const Year = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.SPACES.M}px;
  margin-top: ${({ theme }) => theme.SPACES.M}px;
  margin-bottom: ${({ theme }) => theme.SPACES.M}px;
  @media (max-width: ${RESPONSIVE.L}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${RESPONSIVE.M}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${RESPONSIVE.S}px) {
    grid-template-columns: 1fr;
  }
`
export { CalendarContainer, Container, Year }
