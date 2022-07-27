import React from 'react'
import styles from './Search.module.scss'
import { SearchInputProps } from './Search.props'
import { SearchContext } from '../../App'

import SearchImg from '../../assets/images/SearchImg'

export const Search: React.FC<SearchInputProps> = ({ placeholder }) => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      <SearchImg width={20} className={styles.iconSearch} />
      <input
        className={styles.input}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}
