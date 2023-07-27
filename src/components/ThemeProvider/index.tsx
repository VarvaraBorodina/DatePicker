import React from 'react'
import { ThemeProvider } from 'styled-components'
import THEME from '../../constants/theme'

const GlobalThemProvider: React.FC<{
  children: JSX.Element
  color?: string
}> = ({ children, color }) => {
  if (color) {
    THEME.COLORS.ACCENT_COLOR = color
  }
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>
}

export default GlobalThemProvider
