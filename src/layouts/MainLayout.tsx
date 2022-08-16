import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components'

export const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
