import { IitemProduct } from '../redux/cart/types'

export const calcTotalPrice = (items: IitemProduct[]): number => {
  return items.reduce((sum, objItem) => {
    return sum + objItem.price * objItem.ammount
  }, 0)
}
