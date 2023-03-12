import React from 'react'
import styles from './Sort.module.scss'

import ArrowUp from '../../assets/images/ArrowUp'
import cn from 'classnames'

import { ISort, ISortItem, SortPropertyEnum } from './Sort.props'

type PopupClick = MouseEvent & {
  path: Node[]
}

export const sortList: ISortItem[] = [
  { name: 'popularity (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'popularity (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'price (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'price (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'alphabet (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'alphabet (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
]

export const Sort: React.FC<ISort> = React.memo(({ value, changeSort }) => {
  const [open, setOpen] = React.useState(false)
  const sortRef = React.useRef<HTMLDivElement>(null)

  const onClickListItem = (obj: ISortItem) => {
    changeSort(obj)
    setOpen((prev) => !prev)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick // переопределение типа

      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.label}>
        <div className={styles.row}>
          <ArrowUp />
          <b>Sort by:</b>
        </div>
        <span onClick={() => setOpen((prev) => !prev)} role={'presentation'}>
          {value.name}
        </span>
      </div>
      {open && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                role={'presentation'}
                className={cn(styles.select, {
                  [styles.active]: value.sortProperty === obj.sortProperty,
                })}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})

Sort.displayName = 'Sort' // нужно чтобы eslint не ругался из за обретки React.memo
