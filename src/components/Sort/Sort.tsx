import React from 'react'
import styles from './Sort.module.scss'

import ArrowUp from '../../assets/images/ArrowUp'

// interface ISortItem {
//   name: string
//   sortProperty: SortPropertyEnum
// }

// export const sortList: ISortItem[] = [
//   { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
//   { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
//   { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
//   { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
//   { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
//   { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
// ];

export const Sort: React.FC = () => {
  // const [open, setOpen] = React.useState(false)

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <ArrowUp />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      {/* {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  )
}
