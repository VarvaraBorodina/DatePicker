type ColorTheme = {
  MAIN_COLOR: string
  PRIMARY_COLOR: string
  ERROR_COLOR: string
  ACCENT_COLOR: string
}

type Opacities = {
  S: number
  M: number
  L: number
}

type Theme = {
  COLORS: ColorTheme
  OPACITIES: Opacities
}

export { Theme }
