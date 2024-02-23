import { Product, User } from "./async_functions"
import toast from 'react-hot-toast';

export const addToWishlist = (loggedUser: User, targetedProduct: Product) => {
  if (loggedUser && loggedUser.whishlist) {
    loggedUser.whishlist.push(targetedProduct);
  }
  toast.success('Successfully added to Wishlist!', {
    icon: '👏',
  })
}