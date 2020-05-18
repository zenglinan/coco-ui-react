import { useRef, useEffect } from 'react'

interface Callback {
  (): any
}

const useDoWhenUpdate = (callback: Callback) => {
  const didMountRef = useRef(false)
  let result: any = null
  useEffect(() => {
    if (didMountRef.current) {
      result = callback()
    } else {
      didMountRef.current = true
    }
  })
  return result
}

export default useDoWhenUpdate

// mount: effect 第一次执行
//
// update: 先执行清除函数，再执行 effect
//
// update: 先执行清除函数，再执行 effect
// ...
//
// unMount: 执行清除函数

