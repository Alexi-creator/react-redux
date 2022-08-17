import React from 'react'
import styles from './Menu.module.scss'
import cn from 'classnames'
import { IMenu } from './Menu.props'

// данная библиотека помогает опрделить лишний рендер из за чего
// import { useWhyDidYouUpdate } from 'ahooks'

export const Menu: React.FC<IMenu> = React.memo(
  ({ value, changeCategory, categories }) => {
    // нужно передать сам компонент и его пропсы, он покажет в консоле сколько раз перерендериатся из за какого пропса
    // useWhyDidYouUpdate('Menu', { value, changeCategory, categories })
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
)

Menu.displayName = 'Menu' // нужно чтобы eslint не ругался из за обретки React.memo
