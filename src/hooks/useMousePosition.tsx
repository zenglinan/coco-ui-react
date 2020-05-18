import { useEffect, useState } from 'react'

// 监听鼠标移动，并返回坐标
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const updatePosition = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })
  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])
  return position
}

export default useMousePosition
