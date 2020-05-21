import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import "./style.scss"

type ButtonSize = 'small' | 'large'
type ButtonType = 'primary' | 'default' | 'link'

interface BaseButtonProp {
  btnType?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  href?: string
  className?: string
}

// ButtonProp interface 必须包含原生属性，所以这里使用联合类型
// 但 a 和 button 两者的属性并不相通，所以这里用 Partial 将所有属性变为可选属性
type NativeButtonProp = BaseButtonProp & ButtonHTMLAttributes<HTMLElement>
type NativeAnchorProp = BaseButtonProp & AnchorHTMLAttributes<HTMLElement>
type ButtonProp = Partial<NativeAnchorProp & NativeButtonProp>

const Button: React.FC<ButtonProp> = (props) => {
  const { btnType, size, disabled, href, children, className, ...restProps } = props
  const classnames = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    'btn-disabled': disabled,
    [`btn-${size}`]: size
  })
  if (btnType === 'link') {
    return (
        <a
            href={href}
            {...restProps}
            className={classnames}
        >
          {children}
        </a>
    )
  }
  return (
      <button
          disabled={disabled}
          {...restProps}
          className={classnames}
      >
        {children}
      </button>
  )
}

Button.defaultProps = {
  btnType: 'default'
}

export default Button
