import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IitemProduct {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number
  types: number
  ammount: number
}

interface ICartSlice {
  totalPrice: number
  items: IitemProduct[]
}

const initialState: ICartSlice = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IitemProduct>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.ammount++
      } else {
        state.items.push({
          ...action.payload,
        })
      }

      state.totalPrice = state.items.reduce((sum, objItem) => {
        return sum + objItem.price * objItem.ammount
      }, 0)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })

      state.totalPrice = state.items.reduce((sum, objItem) => {
        return sum + objItem.price * objItem.ammount
      }, 0)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    addAmmount(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload)

      item ? item.ammount++ : ''

      state.totalPrice = state.items.reduce((sum, objItem) => {
        return sum + objItem.price * objItem.ammount
      }, 0)
    },
    removeAmmount(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload)

      item && item.ammount > 1 ? item.ammount-- : ''

      state.totalPrice = state.items.reduce((sum, objItem) => {
        return sum + objItem.price * objItem.ammount
      }, 0)
    },
  },
})

export const selectCart = (state: RootState) => state.cartSlice

export const { addItem, removeItem, clearItems, addAmmount, removeAmmount } =
  cartSlice.actions

export default cartSlice.reducer
