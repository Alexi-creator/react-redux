import React from 'react'
import axios from 'axios'
import { Menu, Pizza, PizzaSkeleton, Sort } from '../components'
import { IPizzaProps } from '../components/Pizza/Pizza.props'
import { SearchContext } from '../App'

import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setSortType } from '../redux/slices/filterSlice'

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

  const { categoryId, sort: sortType } = useSelector(
    (state: RootState) => state.filterSlice
  )
  const dispatch = useDispatch()

  const { searchValue } = React.useContext(SearchContext)

  React.useEffect(() => {
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
  }, [categoryId, sortType, searchValue])
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
