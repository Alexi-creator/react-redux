import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/slice'
import cartSlice from './cart/slice'
import pizzaSlice from './pizza/slice'

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
