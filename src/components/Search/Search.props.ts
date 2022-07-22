import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface SearchInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
}
