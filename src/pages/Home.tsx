import React from 'react'
// import axios from 'axios'
import qs from 'qs' // query string
import { useNavigate } from 'react-router-dom'
import {
  ErrorPizzas,
  Menu,
  Pizza,
  PizzaSkeleton,
  Sort,
  sortList,
} from '../components'
import { IPizzaProps } from '../components/Pizza/Pizza.props'
import { SearchContext } from '../App'

import type { AppDispatch, RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setFilters,
} from '../redux/slices/filterSlice'
import { fetchPizzas, statusEnum } from '../redux/slices/pizzasSlice'

const categories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]

export const Home = () => {
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { categoryId, sort: sortType } = useSelector(
    (state: RootState) => state.filterSlice
  )
  const { items, status } = useSelector((state: RootState) => state.pizzaSlice)

  const { searchValue } = React.useContext(SearchContext)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const getPizzas = React.useCallback(() => {
    // данный диспатч вызывает ассинхронную акшен, который достает данные и сохраняет в store
    // dispatch(fetchPizzas({ categoryId, sortType, searchValue }))
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
      <div className="content__top">
        <Menu
          value={categoryId}
          changeCategory={(index) => dispatch(setCategoryId(index))}
          categories={categories}
        />
        <Sort
          value={sortType}
          changeSort={(changeSort) => {
            dispatch(setSortType(changeSort))
          }}
        />
      </div>
      <h2 className="content__title">Пиццы:</h2>
      <div className="content__items">
        {status === statusEnum.loading &&
          [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)}
        {status === statusEnum.success &&
          items.map((pizza: IPizzaProps) => (
            <Pizza key={pizza.id} {...pizza} />
          ))}
        {status === statusEnum.error && <ErrorPizzas />}
      </div>
    </>
  )
}
