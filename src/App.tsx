import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/testSlice'

import './styles.scss'

export const App = () => {
  const { value, name } = useSelector((state: RootState) => state.testSlice)
  const dispatch = useDispatch()

  return (
    <>
      <h1>React typeScript</h1>
      <div>name: {name}</div>
      <div>counter: {value} </div>
      <button onClick={() => dispatch(increment())}>up</button> <br />
      <button onClick={() => dispatch(decrement())}>down</button> <br />
      <button
        onClick={() =>
          dispatch(incrementByAmount({ surname: 'pav', old: 'den' }))
        }
      >
        common
      </button>
    </>
  )
}
