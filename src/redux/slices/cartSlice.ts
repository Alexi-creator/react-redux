import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IitemProduct {
  id: number
  title: string
  price: number
  imageUrl: string
  sizes: number
  types: string
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
    // addItem(state, action: PayloadAction<IitemProduct>) {
    //   state.items.push(action.payload)
    //   state.totalPrice = state.items.reduce((sum, objItem) => {
    //     return sum + objItem.price
    //   }, 0)
    // },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })
    },
    clearItems(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
