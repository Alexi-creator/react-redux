import React from 'react'
import styles from './Search.module.scss'
import { SearchInputProps } from './Search.props'

import SearchImg from '../../assets/images/SearchImg'
import Close from '../../assets/images/Close'

export const Search: React.FC<SearchInputProps> = ({
  searchValue,
  setSearchValue,
  placeholder,
}) => {
  const searchRef = React.useRef<HTMLInputElement>(null)
  const clearInput = () => {
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
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <Close onClick={clearInput} className={styles.closeIcon} />
      )}
    </div>
  )
}
