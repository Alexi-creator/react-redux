import React from 'react'
import styles from './Menu.module.scss'

import cn from 'classnames'

import { IMenu } from './Menu.props'

export const Menu: React.FC<IMenu> = ({
  value,
  changeCategory,
  categories,
}) => {
  return (
    <>
      <ul className={styles.menu}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => changeCategory(index)}
            role="presentation"
            className={cn(styles.menuItem, {
              [styles.active]: value === index,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  )
}
