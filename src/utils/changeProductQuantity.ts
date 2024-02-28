import { Product, User } from "./async_functions";

export const addQuantity = (
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  quantity: number,
  product: Product,
  user: User | null,
  trigger: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  trigger(true);
  setQuantity(quantity + 1);
  if (product) user?.cart?.push(product);
  setTimeout(() => {
    trigger(false);
  }, 100);
}
export const decreaseQuantity = (
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  quantity: number,
  product: Product,
  user: User | null,
  trigger: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (product && user && user.cart && quantity > 0) {
    trigger(true);
    setQuantity(quantity - 1);
    const index = user?.cart?.findIndex(item => item.id === product.id);
    user?.cart?.splice(index, 1);
    setTimeout(() => {
      trigger(false);
    }, 100);
  }
}
