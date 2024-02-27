import { Product, User } from "./async_functions"
import toast from 'react-hot-toast';

export const addToCart = (
  loggedUser: User, 
  targetedProduct: Product,
  trigger?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
  if (loggedUser && loggedUser.cart) {
    loggedUser.cart.push(targetedProduct);
  }
  if (trigger) {
    trigger(true);
    setTimeout(() => {
      trigger(false);
    }, 100);
  }
  toast.success('Successfully added to Cart!', {
    icon: '👏',
  })
}