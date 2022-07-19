import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'

export const store = configureStore({
  reducer: {
    testSlice: testSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
