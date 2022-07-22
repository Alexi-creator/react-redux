import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  appearance: 'primary' | 'transparent'
  // arrow?: 'right' | 'down' | 'none'
  varIcon?: 'plus'
}
