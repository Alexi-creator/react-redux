import React from 'react'

import type { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

import styles from './Header.module.scss'
import Logo from '../../assets/images/pizza-logo.svg'
import { Search, Cart } from '../index'
import { Link } from 'react-router-dom'
import { SearchContext } from '../../App'

export const Header = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)
  const { totalPrice, items } = useSelector(
    (state: RootState) => state.cartSlice
  )

  const totalCount = items.reduce((sum, item) => {
    return sum + item.ammount
  }, 0)

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder="Поиск пиццы..."
        />
        <Cart className={styles.cart} amount={totalCount} price={totalPrice} />
      </div>
    </div>
  )
}
