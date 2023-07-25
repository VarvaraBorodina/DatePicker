import React from 'react'

interface ButtonProps {
  label: string
}
function Button({ label }: ButtonProps) {
  return (
    <div>
      <button type="button" style={{ backgroundColor: 'yellow' }}>
        {label}
      </button>
    </div>
  )
}

export default Button
