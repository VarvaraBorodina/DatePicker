import React from 'react'
import { ThemeProvider } from 'styled-components'

import THEME from '@/constants/theme'
import Global from '@/styles/global'

const GlobalThemProvider: React.FC<{
  children: JSX.Element
  color?: string
}> = ({ children, color }) => {
  if (color) {
    THEME.COLORS.ACCENT_COLOR = color
  }
  return (
    <>
      <Global />
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalThemProvider
