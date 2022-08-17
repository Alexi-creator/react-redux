import { SortPropertyEnum } from '../../components/Sort/Sort.props'

export type FilterCategoryType = number

export interface IFilterSort {
  name: string
  sortProperty: SortPropertyEnum
}

export interface IFilterSlice {
  searchValue: string
  categoryId: FilterCategoryType
  sort: IFilterSort
}
