import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  label: string
}

const Input = styled.input`
  font-family: Open Sans;
  color: red;
  ::placeholder: {
    color: red;
  }
`
function Button({ label }: ButtonProps) {
  return (
    <div>
      <button type="button" style={{ backgroundColor: 'yellow' }}>
        {label}
      </button>
      <Input placeholder="oooo" />
    </div>
  )
}

export default Button
