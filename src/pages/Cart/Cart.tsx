import React from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/images/ArrowLeft'
import IconCart from '../../assets/images/IconCart'
import IconTrash from '../../assets/images/IconTrash'
import { Button } from '../../components'

export const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <IconCart />
          Корзина
        </h2>
        <div className="cart__clear">
          <IconTrash fill={'#b6b6b6'} />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Кисло-сладкий цыпленок</h3>
            <p>тонкое, 30 см.</p>
          </div>
          <div className="cart__item-count">
            <Button appearance="circul" varIcon="minus" colorIcon="#c6c4c4" />
            <b>1</b>
            <Button appearance="circul" varIcon="plus" colorIcon="#fe5f1e" />
          </div>
          <div className="cart__item-price">
            <b>275 ₽</b>
          </div>
          <div className="cart__item-remove">
            <Button appearance="circul" varIcon="close" colorIcon="#ddd" />
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            {' '}
            Всего пицц: <b>2 шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>855 ₽</b>{' '}
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to={'/'} className={styles.buttonBack}>
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
