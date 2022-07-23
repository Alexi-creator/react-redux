import React from 'react'

import styles from './Header.module.scss'
import Logo from '../../assets/images/pizza-logo.svg'
import { Search, Cart } from '../index'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza V2</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search placeholder="Поиск пиццы..." />
        <Cart className={styles.cart} amount="2" price="850" />
      </div>
    </div>
  )
}
