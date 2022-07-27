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
  return (
    <div className={styles.root}>
      <SearchImg width={20} className={styles.iconSearch} />
      <input
        className={styles.input}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <Close
          onClick={() => setSearchValue('')}
          className={styles.closeIcon}
        />
      )}
    </div>
  )
}
