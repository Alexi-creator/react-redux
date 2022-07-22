import React from 'react'
import { Button } from '../index'
import styles from './Pizza.module.scss'
import { IPizzaProps } from './Pizza.props'
import cn from 'classnames'

const typeNames = ['тонкое', 'традиционное']

export const Pizza: React.FC<IPizzaProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeSize, setActiveSize] = React.useState(0)
  const [activeType, setActiveType] = React.useState(0)

  return (
    <div className={styles.root}>
      <a href={`/pizza/${id}`}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.title}>{title}</h4>
      </a>
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
        <div className={styles.price}>{price}</div>
        <Button appearance="transparent" varIcon="plus">
          <span>Добавить</span>
        </Button>
      </div>
    </div>
  )
}
