export interface IitemProduct {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number
  types: number
  ammount: number
}

export interface ICartSlice {
  totalPrice: number
  items: IitemProduct[]
}
