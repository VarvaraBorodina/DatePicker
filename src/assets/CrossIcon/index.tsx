import React from 'react'

import THEME from '@/constants/theme'

const CrossIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9872 2.04239C9.25728 -0.680798 4.77739 -0.680798 2.04745 2.04239C-0.682484 4.76559 -0.682484 9.23441 2.04745 11.9576C4.77739 14.6808 9.18728 14.6808 11.9172 11.9576C14.6471 9.23441 14.7171 4.76559 11.9872 2.04239ZM8.97728 9.93267L7.01733 7.97756L5.05738 9.93267L4.0774 8.95511L6.03735 7L4.0774 5.04489L5.05738 4.06733L7.01733 6.02244L8.97728 4.06733L9.95726 5.04489L7.99731 7L9.95726 8.95511L8.97728 9.93267Z"
        fill={`${THEME.COLORS.PRIMARY_COLOR}${THEME.OPACITIES.L}`}
      />
    </svg>
  )
}

export default CrossIcon