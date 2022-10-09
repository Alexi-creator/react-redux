import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartEmpty.module.scss'
import cn from 'classnames'
import emptyCart from '../../assets/images/emptyCart.svg'

export const CartEmpty: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>
        Cart is empty
        <span>😕</span>
      </h2>
      <p>
        You probably haven&apos;t ordered pizza yet.
        {/* You probably haven@apos;t ordered pizza yet. */}
        <br />
        To order pizza, go to the main page.
      </p>
      <img className={styles.img} src={emptyCart} alt="Empty cart" />
      <Link to={'/'}>
        <span className={cn(styles.button, styles.buttonBack, styles.fill)}>
          Come back
        </span>
      </Link>
    </div>
  )
}
