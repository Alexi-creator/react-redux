import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { IPizzaProps } from '../../components/Pizza/Pizza.props'
import { PizzaFullSkeleton } from './FullPizza.skeleton'
import styles from './FullPizza.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/images/ArrowLeft'
import cn from 'classnames'

const initState: IPizzaProps = {
  id: '',
  imageUrl: '',
  title: '',
  types: [],
  sizes: [],
  price: 0,
  rating: 0,
}

export const FullPizza: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [statePizza, setStatePizza] = React.useState<IPizzaProps>(initState)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62dd423d79b9f8c30aa554e1.mockapi.io/items/${id}`
        )
        setStatePizza(data)
      } catch (e) {
        console.error(e)
        alert('There is no such pizza...')
        navigate('/')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (isLoading) {
    return (
      <div className={styles.skeleton} style={{ width: '100%' }}>
        <PizzaFullSkeleton viewBox="0 0 550 500" />
      </div>
    )
  }

  return (
    <div className={styles.skeleton}>
      <img src={statePizza.imageUrl} alt="pizza" />
      <div className={styles.title}>{statePizza.title}</div>
      <div className={styles.price}>Price from {statePizza.price}</div>
      <div className={styles.rating}>Rating: {statePizza.rating} / 10</div>
      <Link to={'/'} className={cn(styles.button, styles.buttonBack)}>
        <ArrowLeft />
        Come back
      </Link>
    </div>
  )
}
