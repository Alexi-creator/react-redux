import React from 'react'
import styles from './Menu.module.scss'

import cn from 'classnames'

const categories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

export const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState<number>(0)

  const changeMenu = (index: number) => {
    setActiveMenu(index)
  }

  return (
    <>
      <ul className={styles.menu}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => changeMenu(index)}
            role="presentation"
            className={cn(styles.menuItem, {
              [styles.active]: activeMenu === index,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  )
}