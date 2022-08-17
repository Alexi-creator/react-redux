import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../utils/getCartFromLocalStorage'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { ICartSlice, IitemProduct } from './types'

const initialState: ICartSlice = {
  totalPrice: calcTotalPrice(getCartFromLS()),
  items: getCartFromLS(),
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

      state.totalPrice = calcTotalPrice(state.items)
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

      item ? item.ammount-- : ''

      state.totalPrice = state.items.reduce((sum, objItem) => {
        return sum + objItem.price * objItem.ammount
      }, 0)
    },
  },
})

export const { addItem, removeItem, clearItems, addAmmount, removeAmmount } =
  cartSlice.actions

export default cartSlice.reducer
