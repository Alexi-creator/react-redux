import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartEmpty.module.scss'
import cn from 'classnames'
import emptyCart from '../../assets/images/emptyCart.svg'

export const CartEmpty: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>
        Корзина пустая
        <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className={styles.img} src={emptyCart} alt="Empty cart" />
      <Link to={'/'}>
        <span className={cn(styles.button, styles.buttonBack, styles.fill)}>
          Вернуться назад
        </span>
      </Link>
    </div>
  )
}
