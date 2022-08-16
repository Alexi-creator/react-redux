import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IFilterSort } from './filterSlice'
import { IPizzaProps } from '../../components/Pizza/Pizza.props'

interface IPizzas extends IPizzaProps {
  category: number
}

interface IPizzasParams {
  categoryId: number
  sortType: IFilterSort
  searchValue: string
}

export enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IPizzaSlice {
  items: IPizzas[]
  status: StatusEnum
}

const initialState: IPizzaSlice = {
  items: [],
  status: StatusEnum.LOADING,
}

// ассинхронный экшен, первый параметр это тип действия со строкой имени sclice(pizza) для удобства
// будет отображаться в dev tools у каждого thunk должно быть уникальное
export const fetchPizzas = createAsyncThunk<IPizzas[], IPizzasParams>( // первый тип это то что возвращает ф-ия data, а второй это params
  'pizza/fetchPizzas',
  // в params прилетают данные которые передаем при вызове fetchPizzas в dispath
  // 2-м параметром принимает thunkAPI который будет объектом с (методом dispath getState итд) т.е. можно сделать еще один диспатч внутри этой ф-и
  // изменить стейт по условию если придет что то не то
  // async (params, thunkAPI) => {
  async (params) => {
    // console.log(thunkAPI.getState())

    const { categoryId, sortType, searchValue } = params
    const { data } = await axios.get<IPizzas[]>( // не обязательно указывать тип, но указываем что ожидаем возврат от axios данных с определнным типом
      'https://62dd423d79b9f8c30aa554e1.mockapi.io/items?' +
        `${categoryId > 0 ? `category=${categoryId}` : ''}` +
        `&sortBy=${sortType.sortProperty.replace('-', '')}&order=${
          sortType.sortProperty[0] === '-' ? 'asc' : 'desc'
        }` +
        `${searchValue ? `&search=${searchValue}` : ''}`
    )
    return data
  }
)

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = []
      state.status = StatusEnum.LOADING
    })
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizzas[]>) => {
        state.items = action.payload
        state.status = StatusEnum.SUCCESS
      }
    )
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = []
      state.status = StatusEnum.ERROR
    })
  },
})

export default pizzaSlice.reducer
