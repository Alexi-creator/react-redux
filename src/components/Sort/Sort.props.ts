export interface ISortItem {
  name: string
  sortProperty: SortPropertyEnum
}

export interface ISort {
  value: ISortItem
  changeSort: (index: ISortItem) => void
}

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}
