import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  appearance: 'primary' | 'transparent' | 'circul' | 'fill'
  varIcon?: 'plus' | 'minus' | 'close'
  counter?: number
  colorIcon?: string
}
