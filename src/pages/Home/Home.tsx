import React from 'react'
import qs from 'qs' // query string
import { useNavigate } from 'react-router-dom'
import {
  ErrorPizzas,
  Menu,
  Pizza,
  PizzaSkeleton,
  Sort,
  sortList,
} from '../../components'
import { IPizzaProps } from '../../components/Pizza/Pizza.props'
import styles from './Home.module.scss'

import type { AppDispatch } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setFilters,
} from '../../redux/filter/slice'
import { fetchPizzas } from '../../redux/pizza/slice'
import { selectFilter } from '../../redux/filter/selectors'
import { StatusEnum } from '../../redux/pizza/types'
import { selectPizza } from '../../redux/pizza/selectors'

const categories: string[] = [
  'All',
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed',
]

export const Home: React.FC = () => {
  const isSearch = React.useRef<boolean>(false)
  const isMounted = React.useRef<boolean>(false)

  const { categoryId, sort: sortType, searchValue } = useSelector(selectFilter)
  const { items, status } = useSelector(selectPizza)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const getPizzas = React.useCallback(() => {
    // данный диспатч вызывает ассинхронную акшен, который достает данные и сохраняет в store
    dispatch(fetchPizzas({ categoryId, sortType, searchValue }))

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, dispatch])

  // если первый рендер то параметры фильтром не вшиваем в строку, а если не первый(т.е. был клик по параметрам) то вшиваем
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true // после первого рендера меняем на тру и в следущий раз сработает условие выше if (isMounted.current)
  }, [categoryId, navigate, sortType])

  // при 1-м ренедере проверяем url параметры, если есть сохраняем их в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      )

      dispatch(
        setFilters({
          categoryId: params.categoryId,
          sort,
        })
      )

      isSearch.current = true // после первого рендера оставляем тру чтобы не делать запрос за данными, но после изменения redux будет перерисовка
    }
  }, [dispatch])

  // на 2-ой и последующий рендер
  React.useEffect(() => {
    if (!isSearch.current) {
      getPizzas()
    }

    isSearch.current = false // на 2-ой рендер выше условие уже выполниться if (!isSearch.current)
  }, [categoryId, sortType, getPizzas, searchValue])

  return (
    <>
      <div className={styles.sort}>
        <Menu
          value={categoryId}
          // оптимизируем перерисовку, запоминаем ссылку ф-ии чтобы при перерндере не создавать новую, новая ссылка будет перерендеривать компонент
          changeCategory={React.useCallback(
            (index) => dispatch(setCategoryId(index)),
            [dispatch]
          )}
          categories={categories}
        />
        <Sort
          value={sortType}
          changeSort={React.useCallback(
            (changeSort) => {
              dispatch(setSortType(changeSort))
            },
            [dispatch]
          )}
        />
      </div>
      <h2 className={styles.title}>Pizzas:</h2>
      <div className={styles.items}>
        {status === StatusEnum.LOADING &&
          [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)}
        {status === StatusEnum.SUCCESS &&
          items.map((pizza: IPizzaProps) => (
            <Pizza key={pizza.id} {...pizza} />
          ))}
        {status === StatusEnum.ERROR && <ErrorPizzas />}
      </div>
    </>
  )
}
