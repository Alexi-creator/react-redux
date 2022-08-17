import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  clearItems,
  removeItem,
  addAmmount,
  removeAmmount,
} from '../../redux/cart/slice'
import { selectCart } from '../../redux/cart/selectors'

import cn from 'classnames'

import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/images/ArrowLeft'
import IconCart from '../../assets/images/IconCart'
import IconTrash from '../../assets/images/IconTrash'
import { Button, CartEmpty } from '../../components'
import { typeNames } from '../../components/Pizza/Pizza'

export const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)
  const dispatch = useDispatch()
  const totalCount = items.reduce((sum, item) => sum + item.ammount, 0)

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <IconCart />
          Корзина
        </h2>
        <div className={styles.clearBtn}>
          <IconTrash fill={'#b6b6b6'} />
          <button onClick={() => dispatch(clearItems())}>
            Очистить корзину
          </button>
        </div>
      </div>
      {items &&
        items.map((product) => (
          <div key={product.id} className="content__items">
            <div className="cart__item">
              <div className="cart__item-img">
                <img
                  className="pizza-block__image"
                  src={product.imageUrl}
                  alt="Pizza"
                />
              </div>
              <div className="cart__item-info">
                <h3>{product.title}</h3>
                <p>
                  {typeNames[product.types]}, {product.sizes} см
                </p>
              </div>
              <div className="cart__item-count">
                <Button
                  disabled={product.ammount === 1}
                  appearance="circul"
                  varIcon="minus"
                  colorIcon="#c6c4c4"
                  active={product.ammount > 1 ? true : false}
                  onClick={() => dispatch(removeAmmount(product.id))}
                />
                <b>{product.ammount}</b>
                <Button
                  appearance="circul"
                  varIcon="plus"
                  colorIcon="#fe5f1e"
                  active={true}
                  onClick={() => dispatch(addAmmount(product.id))}
                />
              </div>
              <div className="cart__item-price">
                <b>{product.ammount * product.price} ₽</b>
              </div>
              <div className="cart__item-remove">
                <Button
                  onClick={() => dispatch(removeItem(product.id))}
                  appearance="circul"
                  varIcon="close"
                  colorIcon="#ddd"
                />
              </div>
            </div>
          </div>
        ))}

      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            {' '}
            Всего пицц: <b>{totalCount} шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>{totalPrice} ₽</b>{' '}
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to={'/'} className={cn(styles.button, styles.buttonBack)}>
            <ArrowLeft />
            Вернуться назад
          </Link>
          <div className="">
            <Button appearance="fill">Оплатить сейчас</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
