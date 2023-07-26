import React from 'react'
import { ThemeProvider } from 'styled-components'
import THEME from '../../constants/theme'

const GlobalThemProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>
}

export default GlobalThemProvider
