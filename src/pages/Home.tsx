import React from 'react'
import { Menu, Pizza, PizzaSkeleton, Sort } from '../components'
import { IPizzaProps } from '../components/Pizza/Pizza.props'

export const Home = () => {
  const [pizzas, setPizzas] = React.useState<IPizzaProps[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    fetch('https://62dd423d79b9f8c30aa554e1.mockapi.io/items').then((data) =>
      data.json().then((pizzas) => {
        setPizzas(pizzas)
        setIsLoading((prev) => !prev)
      })
    )
  }, [])
  return (
    <>
      <div className="content__top">
        <Menu />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
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
