import { IPizzaProps } from '../../components/Pizza/Pizza.props'
import { IFilterSort } from '../filter/types'

export interface IPizzas extends IPizzaProps {
  category: number
}

export interface IPizzasParams {
  categoryId: number
  sortType: IFilterSort
  searchValue: string
}

export enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IPizzaSlice {
  items: IPizzas[]
  status: StatusEnum
}
