import { IitemProduct } from '../redux/slices/cartSlice'

export const calcTotalPrice = (items: IitemProduct[]): number => {
  return items.reduce((sum, objItem) => {
    return sum + objItem.price * objItem.ammount
  }, 0)
}
