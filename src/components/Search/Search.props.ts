import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface SearchInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
  searchValue: string
  setSearchValue: (e: string) => void
}
