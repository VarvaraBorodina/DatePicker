import React from 'react'
import THEME from '../../../constants/theme'

const LeftArrow = ({ disable }: { disable: boolean }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7267 12.5L12.6667 11.56L9.61332 8.5L12.6667 5.44L11.7267 4.5L7.72666 8.5L11.7267 12.5Z"
        fill={`${THEME.COLORS.PRIMARY_COLOR}${
          disable ? THEME.OPACITIES.S : ''
        }`}
      />
      <path
        d="M7.33332 12.5L8.27332 11.56L5.21998 8.5L8.27331 5.44L7.33331 4.5L3.33332 8.5L7.33332 12.5Z"
        fill={`${THEME.COLORS.PRIMARY_COLOR}${
          disable ? THEME.OPACITIES.S : ''
        }`}
      />
    </svg>
  )
}

export default LeftArrow
