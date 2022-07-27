import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles.scss'
import './scss/app.scss'

import { Header } from './components'
import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'
import { Cart } from './pages/Cart/Cart'

// import type { RootState } from './redux/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './redux/testSlice'

export const SearchContext = React.createContext({
  searchValue: '',
  setSearchValue: (value: string) => {
    value
  },
})

export const App = () => {
  // const { value, name } = useSelector((state: RootState) => state.testSlice)
  // const dispatch = useDispatch()

  const [searchValue, setSearchValue] = React.useState('')

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

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </>
  )
}
