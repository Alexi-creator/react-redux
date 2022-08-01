import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { Link } from 'react-router-dom'
import IconCart from '../../assets/images/IconCart'
import styles from './Cart.module.scss'
import cn from 'classnames'

export interface ILink
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  amount: number
  price: number
}

export const Cart: React.FC<ILink> = ({ className, amount, price }) => {
  return (
    <Link to={'/cart'} className={cn(styles.cart, className)}>
      <span className={styles.price}>{price} ₽</span>
      <IconCart width={20} />
      <span className={styles.amount}>{amount}</span>
    </Link>
  )
}
