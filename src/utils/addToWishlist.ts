import { Product, User } from "./async_functions"

export const addToWishlist = (loggedUser: User, targetedProduct: Product) => {
  if (loggedUser && loggedUser.whishlist) {
    loggedUser.whishlist.push(targetedProduct);
  }
}