import { FC } from 'react'
import styles from './Button.module.scss'

type TButton = {
  children?: JSX.Element
}

export const Button: FC<TButton> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
