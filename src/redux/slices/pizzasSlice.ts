import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IFilterSort } from './filterSlice'

interface IPizzas {
  id: number
  title: string
  price: number
  category: number
  rating: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

interface IPizzasParams {
  categoryId: number
  sortType: IFilterSort
  searchValue: string
}

export enum statusEnum {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

interface IPizzaSlice {
  items: IPizzas[]
  status: statusEnum
}

const initialState: IPizzaSlice = {
  items: [],
  status: statusEnum.loading,
}

// ассинхронный экшен, первый параметр это тип действия со строкой имени sclice(pizza) для удобства
// будет отображаться в dev tools у каждого thunk должно быть уникальное
export const fetchPizzas = createAsyncThunk<IPizzas[], IPizzasParams>(
  'pizza/fetchPizzas',
  // в params прилетают данные которые передаем при вызове fetchPizzas в dispath
  // 2-м параметром принимает thunkAPI который будет объектом с (методом dispath getState итд) т.е. можно сделать еще один диспатч внутри этой ф-и
  // изменить стейт по условию если придет что то не то
  // async (params, thunkAPI) => {
  async (params) => {
    // console.log(thunkAPI.getState())

    const { categoryId, sortType, searchValue } = params
    const { data } = await axios.get(
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
      state.status = statusEnum.loading
    })
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizzas[]>) => {
        state.items = action.payload
        state.status = statusEnum.success
      }
    )
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = []
      state.status = statusEnum.error
    })
  },
})

export default pizzaSlice.reducer
