import React, { useState } from 'react'

type ButtonSize = 'small' | 'large'
type ButtonType = 'primary' | 'default' | 'link'

interface ButtonProp {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
}

const Component: React.FC<ButtonProp> = (props) => {
  return (
      <div>1</div>
  )
}

export default Component
