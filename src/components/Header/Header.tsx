import React from 'react'

import styles from './Header.module.scss'
import Logo from '../../assets/images/pizza-logo.svg'
import { Search } from '../index'
import IconCart from '../../assets/images/IconCart'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <div className={styles.logo}>
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza V2</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </a>
        <Search placeholder="Поиск пиццы..." />
        <div className={styles.cart}>
          <a className="button button--cart" href="/cart">
            <span>855 ₽</span>
            <div className="button__delimiter"></div>
            <IconCart />
            <span>2</span>
          </a>
        </div>
      </div>
    </div>
  )
}
