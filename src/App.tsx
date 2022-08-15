import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles.scss'
import './scss/app.scss'

import { Header } from './components'
import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'
import { Cart } from './pages/Cart/Cart'

export const App = () => {
  return (
    <>
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
    </>
  )
}
