import React from 'react'
import './styles.scss'
import './scss/app.scss'

import { Header, Menu, Pizza, Sort } from './components'

import pizzas from './assets/pazzas.json'
import { IPizzaProps } from './components/Pizza/Pizza.props'
console.log(typeof pizzas)

// import type { RootState } from './redux/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './redux/testSlice'

export const App = () => {
  // const { value, name } = useSelector((state: RootState) => state.testSlice)
  // const dispatch = useDispatch()

  return (
    <>
      {/* <h1>React typeScript</h1>
      <div>name: {name}</div>
      <div>counter: {value} </div>
      <button onClick={() => dispatch(increment())}>up</button> <br />
      <button onClick={() => dispatch(decrement())}>down</button> <br />
      <button
        onClick={() => dispatch(incrementByAmount({ name: 'pav', value: 5 }))}
      >
        common
      </button> */}

      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Menu />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza: IPizzaProps) => (
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
          </div>
        </div>
      </div>
    </>
  )
}
