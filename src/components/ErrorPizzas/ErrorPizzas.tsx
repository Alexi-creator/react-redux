import React from 'react'
import styles from './ErrorPizzas.module.scss'

export const ErrorPizzas = () => {
  return (
    <div className={styles.root}>
      <h2>
        К сожалению что то пошло не так
        <span>😕</span>
      </h2>
      <p>Попробуйте выбрать еще раз</p>
    </div>
  )
}
