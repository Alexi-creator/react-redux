import React from 'react'
import styles from './Search.module.scss'
import { SearchInputProps } from './Search.props'

import SearchImg from '../../assets/images/SearchImg'

export const Search: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className={styles.root}>
      <SearchImg width={20} className={styles.iconSearch} />
      <input className={styles.input} placeholder={placeholder} />
    </div>
  )
}
