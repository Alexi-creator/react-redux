export interface ISort {
  value: number
  changeSort: (index: number) => void
}

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export interface ISortItem {
  name: string
  sortProperty: SortPropertyEnum
}
