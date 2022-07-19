import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITest {
  surname: string
  old: string
}

export interface ITestSlice {
  value: number
  name: string
  sort: ITest
}

const initialState: ITestSlice = {
  value: 0,
  name: 'ilya',
  sort: {
    surname: 'test',
    old: 'yes',
  },
}

export const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<ITest>) => {
      // state.value = action.payload.value
      // state.name = action.payload.name
      state.sort = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = testSlice.actions

export default testSlice.reducer
