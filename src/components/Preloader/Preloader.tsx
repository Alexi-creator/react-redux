import React from 'react'
import styles from './Preloader.module.scss'
import LoaderSvg from '../../assets/images/Loader'

export const Preloader = () => {
  return (
    <div className={styles.root}>
      <LoaderSvg />
    </div>
  )
}
