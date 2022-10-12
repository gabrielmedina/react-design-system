import { FC, ElementType } from 'react'
import classNames from 'classnames'
import { TButton } from './Button.types'
import styles from './Button.module.scss'

const variantMap = {
  primary: {
    className: styles.variantPrimary,
  },
}

export const Button: FC<TButton> = ({
  element = 'button',
  variant = 'primary',
  children,
  ...rest
}) => {
  const Component = element as ElementType

  return (
    <Component
      className={classNames(styles.button, variantMap[variant].className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
