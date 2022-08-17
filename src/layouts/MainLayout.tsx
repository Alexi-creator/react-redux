import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components'
import styles from './MainLayout.module.scss'

export const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}
