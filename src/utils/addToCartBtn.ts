import { Product, User } from "./async_functions"

export const addToCart = (loggedUser: User, targetedProduct: Product) => {
  if (loggedUser && loggedUser.cart) {
    loggedUser.cart.push(targetedProduct);
  }
}