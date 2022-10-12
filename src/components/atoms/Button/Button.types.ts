import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type TButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
export type TAnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>

type TConditionalProps =
  | ({ element?: 'a' } & TAnchorAttributes)
  | ({ element?: 'button' } & TButtonAttributes)

export type TButton = {
  variant?: 'primary'
  children?: ReactNode
} & TConditionalProps