import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import styles from './Header.module.scss'
import Logo from '../../assets/images/pizza-logo.svg'
import { Search, Cart } from '../index'
import { Link, useLocation } from 'react-router-dom'
import { setSearchValue } from '../../redux/filter/slice'
import { selectCart } from '../../redux/cart/selectors'
import { selectFilter } from '../../redux/filter/selectors'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const isMounted = React.useRef(false)

  const { totalPrice, items } = useSelector(selectCart)
  const { searchValue } = useSelector(selectFilter)

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
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        {pathname !== '/cart' && (
          <Search
            searchValue={searchValue}
            setSearchValue={setNewSearchValue}
            placeholder="Pizza search..."
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
    </header>
  )
}
