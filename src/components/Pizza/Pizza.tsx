import React from 'react'
import { Button } from '../index'
import styles from './Pizza.module.scss'
import { IPizzaProps } from './Pizza.props'
import cn from 'classnames'

export const Pizza: React.FC<IPizzaProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const typeNames = ['тонкое', 'традиционное']

  const [activeSize, setActiveSize] = React.useState<number>(0)
  const [activeType, setActiveType] = React.useState<number>(0)
  const [pizzaCount, setPizzaCount] = React.useState<number>(0)

  const addCountPizza = () => {
    setPizzaCount((prev) => prev + 1)
  }

  return (
    <div className={styles.root}>
      <a className={styles.link} href={`/pizza/${id}`}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.title}>{title}</h4>
      </a>
      <div className={styles.row}>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                role="presentation"
                className={cn(styles.type, {
                  [styles.active]: activeType === typeId || types.length === 1,
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
                onClick={() => setActiveSize(index)}
                role="presentation"
                className={cn(styles.size, {
                  [styles.active]: activeSize === index,
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
            counter={pizzaCount}
            onClick={addCountPizza}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  )
}
