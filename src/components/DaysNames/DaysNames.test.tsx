import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import DAYS_OF_WEEK from '@/constants/dayOfWeek'
import FirstDayOfWeek from '@/constants/firstDayOfWeek'
import THEME from '@/constants/theme'

import DaysNames from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Days Names', () => {
  DAYS_OF_WEEK.forEach((day) => {
    it(`Check ${day} on screen`, async () => {
      render(<DaysNames firstDayOfWeek={FirstDayOfWeek.monday} />)

      expect(screen.getByText(day)).toBeInTheDocument()
    })
  })
})
