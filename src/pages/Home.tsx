import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { Menu, Pizza, PizzaSkeleton, Sort, sortList } from '../components'
import { IPizzaProps } from '../components/Pizza/Pizza.props'
import { SearchContext } from '../App'

import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setFilters,
} from '../redux/slices/filterSlice'

const categories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]

export const Home = () => {
  const [pizzas, setPizzas] = React.useState<IPizzaProps[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { categoryId, sort: sortType } = useSelector(
    (state: RootState) => state.filterSlice
  )

  const { searchValue } = React.useContext(SearchContext)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchPizzas = React.useCallback(() => {
    setIsLoading(true)
    axios
      .get(
        'https://62dd423d79b9f8c30aa554e1.mockapi.io/items?' +
          `${categoryId > 0 ? `category=${categoryId}` : ''}` +
          `&sortBy=${sortType.sortProperty.replace('-', '')}&order=${
            sortType.sortProperty[0] === '-' ? 'asc' : 'desc'
          }` +
          `${searchValue ? `&search=${searchValue}` : ''}`
      )
      .then((res) => {
        setPizzas(res.data)
        setIsLoading((prev) => !prev)
      })
    window.scrollTo(0, 0)
  }, [categoryId, searchValue, sortType.sortProperty])

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
      fetchPizzas()
    }

    isSearch.current = false // на 2-ой рендер выше условие уже выполниться if (!isSearch.current)
  }, [categoryId, sortType, fetchPizzas, searchValue])

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
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((pizza: IPizzaProps) => (
              <Pizza key={pizza.id} {...pizza} />
            ))}
      </div>
    </>
  )
}
