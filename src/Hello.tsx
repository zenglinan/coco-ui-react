import React, { useContext, useState } from 'react'
import useMousePosition from './hooks/useMousePosition'
import { ThemeContext } from "./App"

interface Prop {
  message?: string
}

const Hello: React.FC<Prop> = (props) => {
  const [color, setColor] = useState('red')
  const position = useMousePosition()
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
      <>
        <p>X: {position.x}, Y: {position.y}</p>
        <h2 style={theme} onClick={() => setColor('blue')}>{props.message}</h2>
      </>
  )
}

Hello.defaultProps = {
  message: 'Hello, React'
}

export default Hello
