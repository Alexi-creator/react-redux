import React from 'react'

import './scss/app.scss'

import { Header, Menu, Pizza, Sort } from './components'
// import type { RootState } from './redux/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './redux/testSlice'

import './styles.scss'

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
              <Pizza
                id="1"
                title="маргарита"
                price={350}
                imageUrl={
                  'https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/МАРГ/NULL/NULL/RU'
                }
                sizes={[24, 32, 40]}
                types={[0, 1]}
                rating={2}
              />
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
