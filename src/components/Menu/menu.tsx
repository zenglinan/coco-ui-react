import React, { CSSProperties, createContext, useState } from 'react'
import classNames from 'classnames'
import "./style.scss"

export type Mode = 'vertical' | 'horizontal'
export interface MenuProp {
  defaultIndex?: number
  className?: string
  mode?: Mode
  style?: CSSProperties
  onSelect?: (index: number) => void
  // 默认打开的子菜单数组
  defaultOpenSubMenus?: number[]
}
interface MenuContext {
  index: number
  mode?: Mode
  onSelect?: (index: number) => void
  defaultOpenSubMenus?: number[]
}

export const MenuContext = createContext<MenuContext>({ index: 0 })

const Menu: React.FC<MenuProp> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children } = props
  const classes = classNames('c-menu', className, `c-menu-${mode}`)
  const [ activeIndex, setActiveIndex ] = useState(defaultIndex)
  // 加工 onSelect 方法，执行方法的同时修改 activeIndex
  const processedOnSelect = (index: number) => {
    setActiveIndex(index)
    onSelect && onSelect(index)
  }
  const contextValue = {
    index: activeIndex || 0,
    mode,
    onSelect: processedOnSelect,
    defaultOpenSubMenus
  }
  return (
      <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={contextValue}>
          {children}
        </MenuContext.Provider>
      </ul>

  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu
