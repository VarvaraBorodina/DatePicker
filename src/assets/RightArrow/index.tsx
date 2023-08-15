import React from 'react'

import THEME from '@/constants/theme'

const RightArrow = ({ disable }: { disable: boolean }) => {
  return (
    <svg
      width={THEME.SIZES.ICON_WIDTH}
      height={THEME.SIZES.ICON_WIDTH}
      viewBox={`0 0 ${THEME.SIZES.ICON_WIDTH} ${THEME.SIZES.ICON_WIDTH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.27334 4.5L3.33334 5.44L6.38667 8.5L3.33334 11.56L4.27334 12.5L8.27334 8.5L4.27334 4.5Z"
        fill={`${THEME.COLORS.PRIMARY_COLOR}${
          disable ? THEME.OPACITIES.S : ''
        }`}
      />
      <path
        d="M8.66667 4.5L7.72667 5.44L10.78 8.5L7.72667 11.56L8.66667 12.5L12.6667 8.5L8.66667 4.5Z"
        fill={`${THEME.COLORS.PRIMARY_COLOR}${
          disable ? THEME.OPACITIES.S : ''
        }`}
      />
    </svg>
  )
}

export default React.memo(RightArrow)
