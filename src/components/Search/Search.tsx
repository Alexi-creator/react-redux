import React from 'react'
import styles from './Search.module.scss'
import { SearchInputProps } from './Search.props'
import debounce from 'lodash.debounce'

import SearchImg from '../../assets/images/SearchImg'
import Close from '../../assets/images/Close'

export const Search: React.FC<SearchInputProps> = ({
  setSearchValue,
  placeholder,
}) => {
  const [value, setValue] = React.useState<string>('')

  const searchRef = React.useRef<HTMLInputElement>(null)

  // при перерендере компонента useCallback сохраняет ссылку на функцию
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      setSearchValue(str)
    }, 500),
    []
  )

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const clearInput = () => {
    setValue('')
    setSearchValue('')
    searchRef.current?.focus()
  }

  return (
    <div className={styles.root}>
      <SearchImg width={20} className={styles.iconSearch} />
      <input
        ref={searchRef}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
      {value && <Close onClick={clearInput} className={styles.closeIcon} />}
    </div>
  )
}
