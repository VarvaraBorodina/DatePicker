import React from 'react'

import THEME from '@/constants/theme'

const CheckMarkIcon = () => {
  return (
    <svg
      fill={`${THEME.COLORS.PRIMARY_COLOR}${THEME.OPACITIES.L}`}
      height="14px"
      width="14px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.05 490.05"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z" />{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  )
}

export default React.memo(CheckMarkIcon)
