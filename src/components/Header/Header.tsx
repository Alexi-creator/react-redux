import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import styles from './Header.module.scss'
import Logo from '../../assets/images/pizza-logo.svg'
import { Search, Cart } from '../index'
import { Link, useLocation } from 'react-router-dom'
import { selectCart } from '../../redux/slices/cartSlice'
import { setSearchValue } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const isMounted = React.useRef(false)

  const { totalPrice, items } = useSelector(selectCart)
  const { searchValue } = useSelector((state: RootState) => state.filterSlice)

  const setNewSearchValue = (value: string) => dispatch(setSearchValue(value))

  const totalCount = items.reduce((sum, item) => {
    return sum + item.ammount
  }, 0)

  useEffect(() => {
    if (isMounted.current) {
      const cartJson = JSON.stringify(items)
      window.localStorage.setItem('cart', cartJson)
    }
    isMounted.current = true
  }, [items])

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
        {pathname !== '/cart' && (
          <Search
            searchValue={searchValue}
            setSearchValue={setNewSearchValue}
            placeholder="Поиск пиццы..."
          />
        )}
        {pathname !== '/cart' && (
          <Cart
            className={styles.cart}
            amount={totalCount}
            price={totalPrice}
          />
        )}
      </div>
    </div>
  )
}
