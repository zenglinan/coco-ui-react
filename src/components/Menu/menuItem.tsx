import React, { useContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

interface MenuItemProp {
  index: number
  className?: string
  disabled?: boolean
  style?: CSSProperties
}

const MenuItem: React.FC<MenuItemProp> = (props) => {
  const { index, className, disabled, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('c-menu-item', className, {
    'c-menu-item-disabled': disabled,
    'c-menu-item-active': context.index === index
  })
  const handleClick = () => {
    // 禁用的 menuItem 不触发点击事件
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
      <li className={classes} style={style} onClick={handleClick}>
        {children}
      </li>
  )
}

export default MenuItem
