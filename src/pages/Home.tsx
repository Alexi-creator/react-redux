import React from 'react'
import { Menu, Pizza, PizzaSkeleton, Sort } from '../components'
import { IPizzaProps } from '../components/Pizza/Pizza.props'
import { ISortItem, SortPropertyEnum } from '../components/Sort/Sort.props'

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

  const [categoryId, setCategoryId] = React.useState<number>(0)
  const [sortType, setSortType] = React.useState<ISortItem>({
    name: 'по популярности',
    sortProperty: SortPropertyEnum.RATING_DESC,
  })

  React.useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://62dd423d79b9f8c30aa554e1.mockapi.io/items?' +
        `${categoryId > 0 ? `category=${categoryId}` : ''}` +
        `&sortBy=${sortType.sortProperty.replace('-', '')}&order=${
          sortType.sortProperty[0] === '-' ? 'asc' : 'desc'
        }`
    ).then((data) =>
      data.json().then((pizzas) => {
        setPizzas(pizzas)
        setIsLoading((prev) => !prev)
      })
    )
    window.scrollTo(0, 0)
  }, [categoryId, sortType])
  return (
    <>
      <div className="content__top">
        <Menu
          value={categoryId}
          changeCategory={(index) => setCategoryId(index)}
          categories={categories}
        />
        <Sort
          value={sortType}
          changeSort={(changeSort) => {
            setSortType({
              ...sortType,
              sortProperty: changeSort.sortProperty,
              name: changeSort.name,
            })
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
      <ul className="Pagination_root__uwB0O">
        {/* <li className="previous disabled">
        <a href="/">&lt;</a>
      </li>
      <li className="selected">
        <a href="/">1</a>
      </li>
      <li>
        <a href="/">2</a>
      </li>
      <li>
        <a href="/">3</a>
      </li>
      <li className="next">
        <a href="/">&gt;</a>
      </li> */}
      </ul>
    </>
  )
}
