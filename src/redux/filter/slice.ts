import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { SortPropertyEnum } from '../../components/Sort/Sort.props'
import { FilterCategoryType, IFilterSlice, IFilterSort } from './types'

const initialState: IFilterSlice = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'popularity (DESC)',
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
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

export const { setCategoryId, setSortType, setFilters, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
