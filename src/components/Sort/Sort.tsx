import React from 'react'
import styles from './Sort.module.scss'

import ArrowUp from '../../assets/images/ArrowUp'
import cn from 'classnames'

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}
interface ISortItem {
  name: string
  sortProperty: SortPropertyEnum
}

type PopupClick = MouseEvent & {
  path: Node[]
}

export const sortList: ISortItem[] = [
  { name: 'по пулярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'по пулярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
]

export const Sort: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<number>(0)
  const sortRef = React.useRef<HTMLDivElement>(null)

  const onClickListItem = (index: number) => {
    setSelected(index)
    setOpen((prev) => !prev)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.label}>
        <ArrowUp />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen((prev) => !prev)} role={'presentation'}>
          {sortList[selected].name}
        </span>
      </div>
      {open && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                role={'presentation'}
                className={cn(styles.select, {
                  [styles.active]: selected === i,
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
}
