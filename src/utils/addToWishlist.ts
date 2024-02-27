import { Product, User } from "./async_functions"
import toast from 'react-hot-toast';

export const addToWishlist = (loggedUser: User, targetedProduct: Product) => {
  if (loggedUser && loggedUser.whishlist && !loggedUser.whishlist.includes(targetedProduct) && !loggedUser.cart?.includes(targetedProduct)) {
    loggedUser.whishlist.push(targetedProduct);
    toast.success('Successfully added to Wishlist!', {
      icon: '👏',
    })
  } else if (!loggedUser?.cart?.includes(targetedProduct)) {
    toast.error('Item already in your cart')
  } else if (!loggedUser?.whishlist?.includes(targetedProduct)) {
    toast.error('Item already in your wishlist')
  }
}