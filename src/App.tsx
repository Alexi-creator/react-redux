import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles.scss'
import './scss/app.scss'

import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'
import { Cart } from './pages/Cart/Cart'
import { FullPizza } from './pages/FullPizza/FullPizza'
import { MainLayout } from './layouts/MainLayout'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}
