import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './styles.scss'
import './scss/app.scss'

import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'
import { FullPizza } from './pages/FullPizza/FullPizza'
import { MainLayout } from './layouts/MainLayout'
import { Preloader } from './components/Preloader/Preloader'

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ './pages/Cart/Cart')
)

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<Preloader />}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}
