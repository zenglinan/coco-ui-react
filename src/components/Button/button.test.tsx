import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('Button', () => {
  it('default prop and children prop', () => {
    const el = render(<Button>Text</Button>).getByText('Text')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('BUTTON')
    expect(el).toHaveClass('btn btn-default')
  })

  it('btnType prop', () => {
    const buttonEl = render(<Button btnType="primary">Text1</Button>).getByText('Text1')
    const linkEl = render(<Button btnType="link">Text2</Button>).getByText('Text2')
    expect(buttonEl.tagName).toBe('BUTTON')
    expect(linkEl.tagName).toBe('A')
  })

  it('size prop', () => {
    const el = render(<Button size="small">Text</Button>).getByText('Text')
    expect(el).toHaveClass('btn-small')
  })

  it('disabled prop', () => {
    const linkEl = render(<Button btnType="link" disabled>Text1</Button>).getByText('Text1')
    const buttonEl = render(<Button btnType="primary" disabled>Text2</Button>).getByText('Text2')
    expect(linkEl).toHaveClass('btn-disabled')
    expect(buttonEl).toHaveClass('btn-disabled')
    expect(buttonEl).toBeDisabled()
  })

  it('href prop', () => {
    const el = render(<Button btnType="link" href="www.baidu.com">Text</Button>).getByText('Text')
    expect(el).toHaveAttribute('href', 'www.baidu.com')
  })

  it('className prop', () => {
    const el = render(<Button className="button">Text</Button>).getByText('Text')
    expect(el).toHaveClass('button')
  })
})
