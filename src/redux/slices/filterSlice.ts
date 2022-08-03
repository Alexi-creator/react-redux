import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { SortPropertyEnum } from '../../components/Sort/Sort.props'

type FilterCategoryType = number

export interface IFilterSort {
  name: string
  sortProperty: SortPropertyEnum
}

export interface IFilterSlice {
  categoryId: FilterCategoryType
  sort: IFilterSort
}

const initialState: IFilterSlice = {
  categoryId: 0,
  sort: {
    name: 'по популярности (DESC)',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<FilterCategoryType>) {
      state.categoryId = action.payload
    },
    setSortType(state, action: PayloadAction<IFilterSort>) {
      state.sort = action.payload
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId)
      state.sort = action.payload.sort
    },
  },
})

export const { setCategoryId, setSortType, setFilters } = filterSlice.actions

export default filterSlice.reducer
