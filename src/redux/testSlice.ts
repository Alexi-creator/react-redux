import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface ITestSlice {
  value: number
  name: string
}

const initialState: ITestSlice = {
  value: 0,
  name: 'ilya',
}

export const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<ITestSlice>) => {
      state.name = action.payload.name
      state.value = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = testSlice.actions

export default testSlice.reducer
