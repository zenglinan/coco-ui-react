import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { Menu, MenuItem } from './index'
import { MenuProp } from './menu'

const createJestFn = () => jest.fn()

const baseMenuProp: MenuProp = {
  defaultIndex: 0,
  className: 'test',
  style: {border: '1px solid red'},
  onSelect: createJestFn()
}
const verticalModeMenuProp: MenuProp = {
  defaultIndex: 0,
  onSelect: createJestFn(),
  mode: 'vertical'
}
const generateMenu = (props?: MenuProp) => {
  return render(
      <Menu {...(props || {})}>
        <MenuItem index={0}>
          active
        </MenuItem>
        <MenuItem disabled index={1}>
          disabled
        </MenuItem>
        <MenuItem index={2}>
          xxx
        </MenuItem>
      </Menu>
  )
}

let wrapper: RenderResult, menuEl: HTMLElement, menuItemEl: HTMLElement, activeMenuItemEl: HTMLElement, disabledMenuItemEl: HTMLElement
describe('Menu and MenuItem', () => {
  beforeEach(() => {
    wrapper = generateMenu(baseMenuProp)
    menuEl = wrapper.getByTestId('test-menu')
    menuItemEl = wrapper.getByText('xxx')
    activeMenuItemEl = wrapper.getByText('active')
    disabledMenuItemEl = wrapper.getByText('disabled')
  })
  it('default prop', () => {
    expect(menuEl).toBeInTheDocument()
    expect(menuItemEl).toBeInTheDocument()
    expect(menuEl).toHaveClass('c-menu')
    expect(menuItemEl).toHaveClass('c-menu-item')
  })

  it('onSelect and active item change', () => {
    const el = wrapper.getByText('xxx')
    fireEvent.click(el)
    expect(el).toHaveClass('c-menu-item-active')
    expect(baseMenuProp.onSelect).toHaveBeenCalledWith(2)
  })

  it('disabled prop', () => {
    fireEvent.click(disabledMenuItemEl)
    expect(disabledMenuItemEl).not.toHaveClass('c-menu-item-active')
    expect(baseMenuProp.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('vertical mode', () => {
    cleanup()
    wrapper = generateMenu(verticalModeMenuProp)
    menuEl = wrapper.getByTestId('test-menu')
    expect(menuEl).toHaveClass('c-menu-vertical')
  })
})
