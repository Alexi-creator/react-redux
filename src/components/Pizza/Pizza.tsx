import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../index'
import styles from './Pizza.module.scss'
import { IPizzaProps } from './Pizza.props'
import cn from 'classnames'

import { addItem, selectCart } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

export const typeNames = ['тонкое', 'традиционное']

export const Pizza: React.FC<IPizzaProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeSize, setActiveSize] = React.useState<number>(sizes[0])
  const [activeType, setActiveType] = React.useState<number>(types[0])
  const dispatch = useDispatch()

  const addPizzaCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        imageUrl,
        sizes: activeSize,
        types: activeType,
        ammount: 1,
      })
    )
  }

  const { items } = useSelector(selectCart)

  return (
    <div className={styles.root}>
      <Link className={styles.link} to={`/pizza/${id}`}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.title}>{title}</h4>
      </Link>
      <div className={styles.row}>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                role="presentation"
                className={cn(styles.type, {
                  [styles.active]: activeType === typeId,
                })}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(size)}
                role="presentation"
                className={cn(styles.size, {
                  [styles.active]: activeSize === sizes[index],
                })}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>От {price} &#8381;</div>
          <Button
            className={styles.button}
            appearance="transparent"
            varIcon="plus"
            counter={items.find((item) => item.id === id)?.ammount}
            onClick={addPizzaCart}
            colorIcon="#fe5f1e"
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  )
}
